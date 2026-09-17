'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Building2, 
  ArrowUpRight 
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      
      {/* HEADER: ONLY THE LOGO */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-300 bg-black shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/logo.jpg" 
                alt="K.M. FIBER Logo" 
                fill 
                className="object-contain" 
                priority 
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-slate-950 group-hover:text-slate-700 transition-colors">
                  K.M. FIBER
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 border border-slate-300 text-slate-800 font-bold tracking-wider">
                  Ι.Κ.Ε.
                </span>
              </div>
              <span className="text-[11px] tracking-wider uppercase text-slate-500 font-semibold">
                Τηλεπικοινωνιακές Υποδομές &amp; Οπτικές Ίνες
              </span>
            </div>
          </Link>
        </div>
      </header>

      {/* HERO: FULL-WIDTH RESIDENTIAL FTTH FIBER INSTALLATION PHOTO */}
      <main className="flex-1 w-full bg-white">
        <section className="relative w-full overflow-hidden border-b border-slate-200">
          <div className="relative w-full h-[55vh] sm:h-[68vh] lg:h-[78vh] min-h-[420px] max-h-[850px]">
            <Image
              src="/images/indoor-fiber-installation.jpg"
              alt="K.M. FIBER - Εγκατάσταση Οπτικών Ινών FTTH σε Κτίρια & Οικοδομές"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </section>
      </main>

      {/* FOOTER: WHITE / GREY / BLACK THEME WITH COMPLETE CONTACT & STATUTORY INFO */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 text-slate-600 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            
            {/* Col 1: Brand & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-slate-300 bg-black shrink-0">
                  <Image 
                    src="/images/logo.jpg" 
                    alt="K.M. FIBER" 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-slate-950 tracking-tight">K.M. FIBER Ι.Κ.Ε.</span>
                  <span className="text-[11px] text-slate-500 font-medium">Τηλεπικοινωνιακές Υποδομές</span>
                </div>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
                Εξειδικευμένες εργασίες κατασκευής &amp; ανάπτυξης δικτύων οπτικών ινών FTTH/FTTB, οριζόντιων διατρήσεων και τηλεπικοινωνιακού εξοπλισμού.
              </p>
              <div className="pt-2">
                <Link 
                  href="/gemi" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Εταιρική Διαφάνεια &amp; Γ.Ε.ΜΗ.</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </div>

            {/* Col 2: Direct Contact with Both Partners */}
            <div>
              <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                Επικοινωνια &amp; Διαχειριση
              </h4>
              <div className="space-y-4 text-xs">
                
                {/* Partner 1: Μονοχολιάς Ευστάθιος */}
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs uppercase tracking-wide">
                    Μονοχολιας Ευσταθιος
                    <span className="ml-1.5 text-[10px] font-normal text-slate-500 lowercase">(διαχειριστής)</span>
                  </div>
                  <div className="flex flex-col gap-1 text-slate-700">
                    <a href="tel:6932426214" className="hover:text-black font-semibold flex items-center gap-1.5 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-slate-500" />
                      <span>6932426214</span>
                    </a>
                    <a href="mailto:stathismonocholias@gmail.com" className="hover:text-black flex items-center gap-1.5 transition-colors break-all">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      <span>stathismonocholias@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Partner 2: Καραγιάννης Αθανάσιος */}
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs uppercase tracking-wide">
                    Καραγιαννης Αθανασιος
                    <span className="ml-1.5 text-[10px] font-normal text-slate-500 lowercase">(διαχειριστής)</span>
                  </div>
                  <div className="flex flex-col gap-1 text-slate-700">
                    <a href="tel:6938410889" className="hover:text-black font-semibold flex items-center gap-1.5 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-slate-500" />
                      <span>6938410889</span>
                    </a>
                    <a href="mailto:karagiannisath@gmail.com" className="hover:text-black flex items-center gap-1.5 transition-colors break-all">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      <span>karagiannisath@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 pt-1 text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                  <span>Παππά Εμμανουήλ 3, Τ.Κ. 52200, Άργος Ορεστικό</span>
                </div>

              </div>
            </div>

            {/* Col 3: Statutory Registry */}
            <div>
              <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                Στοιχεια Μητρωου (Γ.Ε.ΜΗ.)
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Αρ. Γ.Ε.ΜΗ.:</span>
                  <span className="font-mono text-slate-950 font-bold">188525832000</span>
                </li>
                <li className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Α.Φ.Μ.:</span>
                  <span className="font-mono text-slate-950 font-bold">803064377</span>
                </li>
                <li className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Δ.Ο.Υ.:</span>
                  <span className="text-slate-800 font-medium">Καστοριάς</span>
                </li>
                <li className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">EUID:</span>
                  <span className="font-mono text-slate-800 font-semibold">ELGEMI.188525832000</span>
                </li>
                <li className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Επιμελητήριο:</span>
                  <span className="text-slate-800 font-medium">Επιμελητήριο Καστοριάς (32)</span>
                </li>
                <li className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Κεφάλαιο:</span>
                  <span className="text-slate-900 font-semibold">20.000,00 €</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright & sgk.gr attribution */}
          <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} K.M. FIBER Ι.Κ.Ε. Με επιφύλαξη παντός δικαιώματος.
              <div className="text-[11px] text-slate-400 mt-0.5">
                Ιστότοπος εταιρικής παρουσίας &amp; δημοσιότητας κατά το άρθρο 47 του Ν. 4072/2012 &amp; Ν. 4919/2022.
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://sgk.gr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-600 hover:text-black transition-colors font-medium text-xs flex items-center gap-1"
              >
                Powered by <span className="text-slate-950 font-bold underline">sgk.gr</span>
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
