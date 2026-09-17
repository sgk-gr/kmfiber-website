'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Network, 
  Phone, 
  Mail, 
  MapPin, 
  Building2, 
  ArrowUpRight 
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* HEADER: ONLY THE LOGO */}
      <header className="sticky top-0 z-50 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center p-2.5 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <Network className="w-full h-full text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  K.M.FIBER
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold tracking-wider">
                  Ι.Κ.Ε.
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 font-medium">
                Τηλεπικοινωνιακές Υποδομές &amp; Οπτικές Ίνες
              </span>
            </div>
          </Link>
        </div>
      </header>

      {/* HERO: OPTICAL FIBERS INSTALLATION PHOTO */}
      <main className="flex-1 flex flex-col justify-center">
        <section className="relative overflow-hidden py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] bg-slate-950">
            <div className="relative w-full aspect-[16/9] min-h-[380px] sm:min-h-[500px] lg:min-h-[620px]">
              <Image
                src="/images/fiber-installation.jpg"
                alt="K.M.FIBER - Εγκατάσταση Οπτικών Ινών & Τηλεπικοινωνιακές Υποδομές"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER: LINKS & STATUTORY DETAILS */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-10 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Col 1: Brand & Description */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-lg font-black text-white tracking-tight">K.M.FIBER Ι.Κ.Ε.</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Εγκατάσταση δικτύων οπτικών ινών FTTH/FTTB, οριζόντιες κατευθυνόμενες διατρήσεις και τηλεπικοινωνιακές υποδομές.
              </p>
            </div>

            {/* Col 2: Direct Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Συνδεσμοι &amp; Επικοινωνια</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link 
                    href="/gemi" 
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Δημοσιότητα &amp; Στοιχεία Γ.Ε.ΜΗ.</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <a 
                    href="tel:6932426214" 
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Τηλέφωνο: 6932426214</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:stathismonocholias@gmail.com" 
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Email: stathismonocholias@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Παππά Εμμανουήλ 3, Τ.Κ. 52200, Άργος Ορεστικό</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Statutory Registry */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Στοιχεια Μητρωου</h4>
              <ul className="space-y-1.5 text-xs">
                <li><span className="text-slate-500">Αρ. Γ.Ε.ΜΗ.:</span> <span className="font-mono text-cyan-400 font-semibold">188525832000</span></li>
                <li><span className="text-slate-500">Α.Φ.Μ.:</span> <span className="font-mono text-slate-200 font-semibold">803064377</span> (Δ.Ο.Υ. Καστοριάς)</li>
                <li><span className="text-slate-500">EUID:</span> <span className="font-mono text-slate-300">ELGEMI.188525832000</span></li>
                <li><span className="text-slate-500">Επιμελητήριο:</span> Επιμελητήριο Καστοριάς (ID: 32)</li>
              </ul>
            </div>

          </div>

          <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} K.M.FIBER Ι.Κ.Ε. Με επιφύλαξη παντός δικαιώματος.
              <div className="text-[11px] text-slate-600 mt-0.5">
                Ιστότοπος εταιρικής παρουσίας &amp; δημοσιότητας κατά το άρθρο 47 του Ν. 4072/2012 &amp; Ν. 4919/2022.
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://sgk.gr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-cyan-400 transition-colors font-medium text-xs flex items-center gap-1"
              >
                Powered by <span className="text-white font-bold underline">sgk.gr</span>
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
