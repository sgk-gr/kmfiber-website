'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  FileText, 
  ShieldCheck, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  ArrowLeft, 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  Coins, 
  Briefcase, 
  Calendar, 
  Clock, 
  Scale, 
  RefreshCw,
  AlertCircle,
  Network
} from 'lucide-react';

// Static statutory fallback data
const STATIC_STATUTORY = {
  arGemi: "188525832000",
  afm: "803064377",
  euid: "ELGEMI.188525832000",
  coNameEl: "K.M.FIBER Ι.Κ.Ε.",
  coNameEn: "K.M.FIBER P.C.",
  coTitleEl: "K.M.FIBER",
  legalType: "Ιδιωτική Κεφαλαιουχική Εταιρεία (Ι.Κ.Ε.)",
  status: "Ενεργή",
  chamber: "ΕΠΙΜΕΛΗΤΗΡΙΟ ΚΑΣΤΟΡΙΑΣ (ID: 32)",
  incorporationDate: "07/11/2025",
  address: "Παππά Εμμανουήλ 3, Τ.Κ. 52200, Άργος Ορεστικό (Δήμος Άργους Ορεστικού / Π.Ε. Καστοριάς)",
  phone: "6932426214 / 6938410889",
  email: "stathismonocholias@gmail.com / karagiannisath@gmail.com",
  capitalStock: "20.000,00 €",
  capitalParts: "2.000 εταιρικά μερίδια ονομαστικής αξίας 10,00 € έκαστο",
  capitalTypes: "100% Κεφαλαιακές Εισφορές (20.000,00 €)",
  governance: [
    {
      name: "ΜΟΝΟΧΟΛΙΑΣ ΕΥΣΤΑΘΙΟΣ του ΠΑΝΤΕΛΗ",
      role: "Μέλος & Διαχειριστής",
      shares: "1.000 μερίδια (50%)",
      amount: "10.000,00 €",
      category: "Εταίροι & Διαχειριστές",
      phone: "6932426214",
      email: "stathismonocholias@gmail.com"
    },
    {
      name: "ΚΑΡΑΓΙΑΝΝΗΣ ΑΘΑΝΑΣΙΟΣ του ΠΑΣΧΑΛΗ",
      role: "Μέλος & Διαχειριστής",
      shares: "1.000 μερίδια (50%)",
      amount: "10.000,00 €",
      category: "Εταίροι & Διαχειριστές",
      phone: "6938410889",
      email: "karagiannisath@gmail.com"
    }
  ],
  primaryKad: {
    code: "43210006",
    title: "ΥΠΗΡΕΣΙΕΣ ΕΓΚΑΤΑΣΤΑΣΗΣ ΚΑΛΩΔΙΩΣΕΩΝ ΚΑΙ ΕΞΟΠΛΙΣΜΟΥ ΤΗΛΕΠΙΚΟΙΝΩΝΙΩΝ ΚΑΙ ΔΙΚΤΥΩΝ"
  },
  secondaryKads: [
    { code: "43130001", title: "Οριζόντιες διατρήσεις για το πέρασμα καλωδίων ή υδρορροών" },
    { code: "43120200", title: "Εργασίες εκσκαφών και μετακίνησης γαιών" },
    { code: "43210002", title: "Υπηρεσίες επισκευής ηλεκτρικών καλωδιώσεων και εξαρτημάτων, με διάθεση υλικών" },
    { code: "43210003", title: "Υπηρεσίες επισκευής ηλεκτρικών καλωδιώσεων και εξαρτημάτων, χωρίς διάθεση υλικών" },
    { code: "43221200", title: "Εργασίες εγκαταστάσεων θέρμανσης, αερισμού και κλιματισμού" },
    { code: "43999000", title: "Εξειδικευμένες κατασκευαστικές εργασίες π.δ.κ.α." },
    { code: "81220200", title: "Υπηρεσίες εξειδικευμένου καθαρισμού" }
  ],
  documents: [
    {
      kak: "5684227",
      title: "Πιστοποίηση Καταβολής Αρχικού Εταιρικού Κεφαλαίου",
      type: "Απόφαση Διαχειριστή (Αυτοματοποιημένη Καταχώριση)",
      dateAssembly: "17/11/2025",
      dateRegistration: "05/12/2025",
      url: "https://opendata-api.businessportal.gr/api/opendata/v1/downloadFile?key=assemblyDecision&elementId=5684227"
    },
    {
      kak: "ΣΥΣΤΑΣΗ",
      title: "Ανακοίνωση Σύστασης & Καταστατικό ΥΜΣ",
      type: "Ανακοίνωση Καταχώρισης Σύστασης ΓΕΜΗ",
      dateAssembly: "07/11/2025",
      dateRegistration: "07/11/2025",
      url: "https://eyms.businessportal.gr/preview/61bd6831754437426372de849bd1d442/announcement-certificate/print"
    }
  ]
};

export default function GemiPage() {
  const [liveData, setLiveData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<'live' | 'fallback'>('fallback');
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    async function fetchGemi() {
      try {
        const res = await fetch('/api/gemi');
        if (res.ok) {
          const json = await res.json();
          if (json.company || json.documents) {
            setLiveData(json);
            setDataSource(json.source === 'live_gemi_opendata' ? 'live' : 'fallback');
            setLastUpdated(json.timestamp || new Date().toISOString());
          }
        }
      } catch (err) {
        console.warn('Using statutory fallback data for GEMI registry:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchGemi();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-black hover:border-slate-400 transition-all flex items-center gap-2 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 text-slate-600" />
              <span className="hidden sm:inline">Επιστροφή στην Αρχική</span>
            </Link>

            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-slate-300 bg-black shrink-0">
                <Image 
                  src="/images/logo.jpg" 
                  alt="K.M. FIBER Logo" 
                  fill 
                  className="object-contain" 
                  priority 
                />
              </div>
              <span className="text-xl font-black text-slate-950 tracking-tight">
                K.M. FIBER <span className="text-slate-500 text-xs font-bold">Ι.Κ.Ε.</span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-700 font-medium">
                {dataSource === 'live' ? 'Live OpenData GEMI API' : 'Επίσημο Καταστατικό Μητρώο'}
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* HERO BANNER FOR STATUTORY DISCLOSURE */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col items-start space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 border border-slate-300 text-slate-800 text-xs font-bold tracking-wide">
              <Scale className="w-3.5 h-3.5 text-slate-700" />
              <span>ΔΗΜΟΣΙΟΠΟΙΗΣΗ ΣΤΟΙΧΕΙΩΝ ΓΕΝΙΚΟΥ ΕΜΠΟΡΙΚΟΥ ΜΗΤΡΩΟΥ</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
              Εταιρική Διαφάνεια &amp; Στοιχεία Γ.Ε.ΜΗ.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Επίσημη ιστοσελίδα δημοσιότητας της <strong className="text-slate-900">K.M.FIBER ΙΔΙΩΤΙΚΗ ΚΕΦΑΛΑΙΟΥΧΙΚΗ ΕΤΑΙΡΕΙΑ</strong>, σε πλήρη συμμόρφωση με τις διατάξεις του <strong>άρθρου 47 του Ν. 4072/2012</strong> και του <strong>Ν. 4919/2022</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Κατάσταση: <strong className="text-emerald-700">Ενεργή</strong></span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center gap-1.5 shadow-2xs">
                <Calendar className="w-4 h-4 text-slate-600" />
                <span>Σύσταση: <strong className="text-slate-900">07/11/2025</strong></span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center gap-1.5 shadow-2xs">
                <Building2 className="w-4 h-4 text-slate-600" />
                <span>Επιμελητήριο: <strong className="text-slate-900">Καστοριάς</strong></span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* MAIN REGISTRY CARDS GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 flex-grow w-full">
        
        {/* 1. KEY IDENTIFICATION METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">ΑΡΙΘΜΟΣ Γ.Ε.ΜΗ.</span>
            <div className="text-2xl font-mono font-black text-slate-950 mt-2">
              {STATIC_STATUTORY.arGemi}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">Κωδικός Καταχώρισης</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Α.Φ.Μ.</span>
            <div className="text-2xl font-mono font-black text-slate-950 mt-2">
              {STATIC_STATUTORY.afm}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">Δ.Ο.Υ. Καστοριάς</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">EUID (ΕΥΡΩΠΑΪΚΟ ΑΝΑΓΝΩΡΙΣΤΙΚΟ)</span>
            <div className="text-lg font-mono font-bold text-slate-900 mt-2 truncate" title={STATIC_STATUTORY.euid}>
              {STATIC_STATUTORY.euid}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">European Unique Identifier</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">ΕΤΑΙΡΙΚΟ ΚΕΦΑΛΑΙΟ</span>
            <div className="text-2xl font-black text-emerald-600 mt-2">
              {STATIC_STATUTORY.capitalStock}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">100% Καταβεβλημένο</span>
          </div>

        </div>

        {/* 2. STATUTORY ENTITY PROFILE */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
          <div className="px-6 py-4 bg-slate-100 border-b border-slate-200 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-slate-700" />
            <h3 className="text-lg font-bold text-slate-950">Στοιχεία Ταυτότητας Νομικού Προσώπου</h3>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            
            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-500 uppercase font-bold block">Πλήρης Επωνυμία (Ελληνικά)</span>
                <span className="text-base font-bold text-slate-950 mt-1 block">{STATIC_STATUTORY.coNameEl}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 uppercase font-bold block">Company Name (English)</span>
                <span className="text-base font-semibold text-slate-800 mt-1 block">{STATIC_STATUTORY.coNameEn}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 uppercase font-bold block">Διακριτικός Τίτλος</span>
                <span className="text-base font-bold text-slate-950 mt-1 block">{STATIC_STATUTORY.coTitleEl}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 uppercase font-bold block">Νομική Μορφή</span>
                <span className="text-slate-800 mt-1 block">{STATIC_STATUTORY.legalType}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-500 uppercase font-bold block">Έδρα / Ταχυδρομική Διεύθυνση</span>
                <span className="text-slate-800 mt-1 block leading-relaxed">{STATIC_STATUTORY.address}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 uppercase font-bold block">Αρμόδια Υπηρεσία Γ.Ε.ΜΗ.</span>
                <span className="text-slate-800 mt-1 block">{STATIC_STATUTORY.chamber}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 uppercase font-bold block">Τηλέφωνα &amp; Email Επικοινωνίας</span>
                <div className="flex flex-col gap-1 mt-1 text-slate-800">
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-slate-500" /> 6932426214 / 6938410889</span>
                  <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-500" /> stathismonocholias@gmail.com / karagiannisath@gmail.com</span>
                </div>
              </div>
              <div>
                <span className="text-xs text-slate-500 uppercase font-bold block">Διάρθρωση Κεφαλαίου</span>
                <span className="text-slate-800 mt-1 block">{STATIC_STATUTORY.capitalParts} ({STATIC_STATUTORY.capitalTypes})</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3. PARTNERS & GOVERNANCE (ΕΤΑΙΡΟΙ & ΔΙΟΙΚΗΣΗ) */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
          <div className="px-6 py-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-slate-700" />
              <h3 className="text-lg font-bold text-slate-950">Εταίροι &amp; Διαχείριση Εταιρείας</h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">Σύμφωνα με το καταστατικό</span>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {STATIC_STATUTORY.governance.map((person, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                      {person.role}
                    </span>
                    <h4 className="text-lg font-bold text-slate-950 mt-1">
                      {person.name}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-200 border border-slate-300 text-slate-800 font-bold text-xs">
                    50%
                  </span>
                </div>

                {/* Direct Phone and Email */}
                <div className="space-y-1 text-xs pt-1">
                  <a href={`tel:${person.phone}`} className="flex items-center gap-1.5 text-slate-700 hover:text-black font-semibold">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>{person.phone}</span>
                  </a>
                  <a href={`mailto:${person.email}`} className="flex items-center gap-1.5 text-slate-700 hover:text-black">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{person.email}</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 block">Μερίδια:</span>
                    <span className="font-semibold text-slate-900">{person.shares}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Αξία Εισφοράς:</span>
                    <span className="font-mono font-semibold text-slate-900">{person.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. OFFICIAL GEMI DOCUMENTS & CERTIFICATES */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
          <div className="px-6 py-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-slate-700" />
              <h3 className="text-lg font-bold text-slate-950">Επίσημες Δημοσιεύσεις &amp; Πιστοποιητικά Γ.Ε.ΜΗ.</h3>
            </div>
            <span className="text-xs text-slate-600 font-medium">Απευθείας Λήψη PDF</span>
          </div>

          <div className="p-6 space-y-4">
            {STATIC_STATUTORY.documents.map((doc, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-xs font-mono font-semibold">
                      ΚΑΚ: {doc.kak}
                    </span>
                    <span className="text-xs text-slate-500">Καταχώριση: {doc.dateRegistration}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-950">{doc.title}</h4>
                  <p className="text-xs text-slate-600">{doc.type}</p>
                </div>

                <a 
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex items-center gap-2 shrink-0 shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Προβολή / Λήψη Εγγράφου</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 5. KAD / OBJECTIVE BREAKDOWN */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
          <div className="px-6 py-4 bg-slate-100 border-b border-slate-200 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-slate-700" />
            <h3 className="text-lg font-bold text-slate-950">Δραστηριότητες &amp; Κωδικοί Αριθμοί Δραστηριότητας (ΚΑΔ)</h3>
          </div>

          <div className="p-6 space-y-6">
            
            {/* Primary KAD */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                ΚΥΡΙΑ ΔΡΑΣΤΗΡΙΟΤΗΤΑ
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                <span className="text-base font-mono font-bold text-slate-950">
                  {STATIC_STATUTORY.primaryKad.code}
                </span>
                <span className="text-slate-400 hidden sm:inline">—</span>
                <span className="text-base font-bold text-slate-900">
                  {STATIC_STATUTORY.primaryKad.title}
                </span>
              </div>
            </div>

            {/* Secondary KADs */}
            <div>
              <span className="text-xs text-slate-500 uppercase font-bold block mb-3">
                ΔΕΥΤΕΡΕΥΟΥΣΕΣ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {STATIC_STATUTORY.secondaryKads.map((kad, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-slate-900 shrink-0 mt-0.5">
                      {kad.code}
                    </span>
                    <span className="text-xs text-slate-700">
                      {kad.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-200 py-8 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div>© {new Date().getFullYear()} K.M. FIBER Ι.Κ.Ε. — Επίσημη Εταιρική Διαφάνεια Γ.Ε.ΜΗ.</div>
            <div className="text-slate-400 text-[11px] mt-0.5">
              Στοιχεία δημοσιότητας σύμφωνα με το Ν. 4072/2012 (Άρθρο 47) και το Ν. 4919/2022.
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-slate-600 hover:text-black transition-colors font-medium">
              Αρχική Σελίδα
            </Link>
            <span className="text-slate-300">•</span>
            <a 
              href="https://sgk.gr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-600 hover:text-black transition-colors"
            >
              Powered by <span className="text-slate-950 font-bold underline">sgk.gr</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
