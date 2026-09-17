import { NextResponse } from 'next/server';

export const revalidate = 1800; // Cache for 30 minutes to respect rate limit

export async function GET() {
  const apiKey = '1QV0mFBoWsaprgiphMaBKEANZL0tRCc5';
  const arGemi = '188525832000';
  const headers = {
    'api_key': apiKey,
    'Accept': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  };

  try {
    // 1. Fetch Company Info
    const companyRes = await fetch(`https://opendata-api.businessportal.gr/api/opendata/v1/companies/${arGemi}`, {
      headers,
      signal: AbortSignal.timeout(10000)
    });
    const companyData = companyRes.ok ? await companyRes.json() : null;

    // 2. Fetch Published Documents & Decisions
    let docsData = null;
    try {
      const docsRes = await fetch(`https://opendata-api.businessportal.gr/api/opendata/v1/companies/${arGemi}/documents`, {
        headers,
        signal: AbortSignal.timeout(10000)
      });
      if (docsRes.ok) {
        docsData = await docsRes.json();
      }
    } catch (docsErr) {
      console.warn('GEMI Documents fetch notice:', docsErr);
    }

    return NextResponse.json({
      company: companyData,
      documents: docsData,
      source: companyData ? 'live_gemi_opendata' : 'fallback',
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('GEMI API fetch error:', error);
    return NextResponse.json({
      company: null,
      documents: null,
      source: 'fallback',
      error: error.message || 'Failed to fetch live GEMI data'
    }, { status: 200 });
  }
}
