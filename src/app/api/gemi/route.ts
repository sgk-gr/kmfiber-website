import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 300; // Cache for 5 minutes

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return '';
  const parts = dateStr.trim().split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

export async function GET(request: NextRequest) {
  const apiKey = '1QV0mFBoWsaprgiphMaBKEANZL0tRCc5';
  const arGemi = '188525832000';
  const headers = {
    'api_key': apiKey,
    'Accept': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  };

  const { searchParams } = new URL(request.url);
  const isForceRefresh = searchParams.has('refresh') || searchParams.has('t');

  const fetchOptions: any = {
    headers,
    signal: AbortSignal.timeout(10000),
    ...(isForceRefresh ? { cache: 'no-store' } : { next: { revalidate: 300 } })
  };

  try {
    // 1. Fetch Company Info
    const companyRes = await fetch(`https://opendata-api.businessportal.gr/api/opendata/v1/companies/${arGemi}`, fetchOptions);
    const companyData = companyRes.ok ? await companyRes.json() : null;

    // 2. Fetch Published Documents & Decisions
    let docsData: any = null;
    try {
      const docsRes = await fetch(`https://opendata-api.businessportal.gr/api/opendata/v1/companies/${arGemi}/documents`, fetchOptions);
      if (docsRes.ok) {
        docsData = await docsRes.json();
      }
    } catch (docsErr) {
      console.warn('GEMI Documents fetch notice:', docsErr);
    }

    // 3. Normalize documents into structured list
    const normalizedDocs: any[] = [];
    if (docsData && Array.isArray(docsData.decision)) {
      for (const d of docsData.decision) {
        normalizedDocs.push({
          kak: d.kak ? String(d.kak) : 'ΚΑΤΑΧΩΡΙΣΗ',
          title: d.summary || d.decisionSubject || 'Απόφαση Γ.Ε.ΜΗ.',
          type: d.decisionSubject || d.assembly || 'Καταχώριση Πράξης',
          dateRegistration: formatDate(d.dateRegistrated || d.dateAnnounced),
          dateAssembly: d.dateAssemblyDecided ? formatDate(d.dateAssemblyDecided) : undefined,
          url: d.assemblyDecisionUrl || `https://opendata-api.businessportal.gr/api/opendata/v1/downloadFile?key=assemblyDecision&elementId=${d.kak}`
        });
      }
    }

    if (docsData && Array.isArray(docsData.publication)) {
      for (const p of docsData.publication) {
        if (p.url) {
          normalizedDocs.push({
            kak: 'ΣΥΣΤΑΣΗ',
            title: 'Ανακοίνωση Σύστασης & Καταστατικό ΥΜΣ',
            type: 'Ανακοίνωση Καταχώρισης Σύστασης ΓΕΜΗ',
            dateRegistration: '07/11/2025',
            url: p.url
          });
        }
      }
    }

    return NextResponse.json({
      company: companyData,
      rawDocuments: docsData,
      documents: normalizedDocs,
      source: companyData ? 'live_gemi_opendata' : 'fallback',
      timestamp: new Date().toISOString()
    }, {
      headers: {
        'Cache-Control': isForceRefresh 
          ? 'no-store, no-cache, must-revalidate, proxy-revalidate' 
          : 'public, s-maxage=300, stale-while-revalidate=600'
      }
    });
  } catch (error: any) {
    console.error('GEMI API fetch error:', error);
    return NextResponse.json({
      company: null,
      documents: [],
      source: 'fallback',
      error: error.message || 'Failed to fetch live GEMI data',
      timestamp: new Date().toISOString()
    }, { status: 200 });
  }
}
