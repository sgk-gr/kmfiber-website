'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Network, 
  Cpu, 
  Layers, 
  Wrench, 
  Activity, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Zap, 
  Clock, 
  Building2,
  HardHat,
  ArrowUpRight
} from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* TOP NOTIFICATION & STATUTORY BAR */}
      <div className="bg-slate-950/80 border-b border-cyan-950/40 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-medium text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Ενεργή Ι.Κ.Ε.
            </span>
            <span className="text-slate-400 hidden sm:inline">Αρ. Γ.Ε.ΜΗ.:</span>
            <span className="font-mono text-cyan-400 font-semibold">188525832000</span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-400 hidden md:inline">Α.Φ.Μ.:</span>
            <span className="font-mono text-slate-200 font-semibold hidden md:inline">803064377</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="tel:6932426214" className="hover:text-cyan-400 flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>6932426214</span>
            </a>
            <Link 
              href="/gemi" 
              className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
            >
              <FileText className="w-3 h-3" />
              <span>Στοιχεία Γ.Ε.ΜΗ.</span>
            </Link>
          </div>
        </div>
      </div>

      {/* STICKY MAIN NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
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

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Υπηρεσίες
            </Link>
            <Link href="#equipment" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Τεχνογνωσία &amp; Εξοπλισμός
            </Link>
            <Link href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Η Εταιρεία
            </Link>
            <Link href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Επικοινωνία
            </Link>
            <Link 
              href="/gemi" 
              className="px-3.5 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/60 hover:border-cyan-400 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Μητρώο Γ.Ε.ΜΗ.</span>
            </Link>
          </nav>

          {/* Quick CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:6932426214"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>6932426214</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <Link 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400 border-b border-slate-900"
            >
              Υπηρεσίες
            </Link>
            <Link 
              href="#equipment" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400 border-b border-slate-900"
            >
              Τεχνογνωσία &amp; Εξοπλισμός
            </Link>
            <Link 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400 border-b border-slate-900"
            >
              Η Εταιρεία
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400 border-b border-slate-900"
            >
              Επικοινωνία
            </Link>
            <Link 
              href="/gemi" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-cyan-400 font-semibold"
            >
              Εταιρική Διαφάνεια &amp; Γ.Ε.ΜΗ. ➔
            </Link>
            <div className="pt-2">
              <a 
                href="tel:6932426214"
                className="w-full py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Κλήση: 6932426214</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION WITH REAL FIBER OPTIC VISUAL */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Background Glowing Grid & Gradients */}
        <div className="absolute inset-0 fiber-grid opacity-30 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Υπερσύγχρονες Τηλεπικοινωνιακές Υποδομές</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                Συνδέουμε το Μέλλον με <span className="cyan-gradient-text">Ταχύτητα Φωτός</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Η <strong className="text-white">K.M.FIBER Ι.Κ.Ε.</strong> εξειδικεύεται στην κατασκευή και ανάπτυξη τηλεπικοινωνιακών δικτύων <strong>FTTH / FTTB</strong>, οριζόντιων διατρήσεων (HDD), εμφύσησης &amp; συγκόλλησης οπτικών ινών ακριβείας, και πιστοποίησης δικτύων νέας γενιάς.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                <Link
                  href="#contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-base shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  Ζητήστε Προσφορά
                </Link>

                <Link
                  href="/gemi"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 font-semibold text-base transition-all flex items-center justify-center gap-2 group"
                >
                  <Building2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>Στοιχεία Γ.Ε.ΜΗ.</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                <div>
                  <div className="text-2xl font-black text-cyan-400">FTTH/B</div>
                  <div className="text-xs text-slate-400">Δίκτυα Υψηλών Ταχυτήτων</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">&lt;0.02 dB</div>
                  <div className="text-xs text-slate-400">Απώλεια Συγκόλλησης</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-xs text-slate-400">Πιστοποιημένες Μετρήσεις</div>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.25)] group">
                <div className="relative h-[380px] sm:h-[460px] w-full">
                  <Image
                    src="/images/hero-fiber.jpg"
                    alt="K.M.FIBER Οπτικές Ίνες & Τηλεπικοινωνιακές Υποδομές"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent"></div>
                </div>

                {/* Floating Status Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                      <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">
                          Optical Fiber Infrastructure
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Εγκαταστάσεις Καναλιών &amp; Fusion Splicing
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-300 font-bold">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
              Ολοκληρωμενες Λυσεις
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4">
              Οι Υπηρεσίες της K.M.FIBER
            </h2>
            <p className="text-slate-400 text-base">
              Αναλαμβάνουμε υπεύθυνα κάθε στάδιο ανάπτυξης, επέκτασης και συντήρησης τηλεπικοινωνιακών υποδομών, τηρώντας τα πιο αυστηρά πρότυπα των μεγάλων τηλεπικοινωνιακών παρόχων.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="rounded-2xl bg-[#0d1322] border border-slate-800 p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <Network className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  Εγκατάσταση Δικτύων Οπτικών Ινών (FTTH / FTTB)
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Ανάπτυξη δικτύων Fiber to the Home &amp; Building. Εμφύσηση (jetting) οπτικών καλωδίων σε μικροσωληνώσεις, τοποθέτηση οπτικών διανεμητών (ODF), splitters και τερματικών BEP.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Κύρια Δραστηριότητα (ΚΑΔ 43210006)</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="rounded-2xl bg-[#0d1322] border border-slate-800 p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  Οριζόντιες Κατευθυνόμενες Διατρήσεις (HDD)
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Υπόγειες διελεύσεις καλωδίων και αγωγών χωρίς τομή οδοστρώματος. Ιδανική μέθοδος για διέλευση κάτω από δρόμους, σιδηροδρομικές γραμμές και αστικές διασταυρώσεις.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Χωρίς Διατάραξη Επιφάνειας</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="rounded-2xl bg-[#0d1322] border border-slate-800 p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <Wrench className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  Εκσκαφές, Trenching &amp; Υπόγειες Υποδομές
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Εργασίες χωματουργικών, micro-trenching, εκσκαφής χανδάκων, τοποθέτησης φρεατίων έλξης καλωδίων και πλήρους αποκατάστασης ασφαλτοτάπητα.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Πλήρης Χωματουργικός Εξοπλισμός</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="rounded-2xl bg-[#0d1322] border border-slate-800 p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  Συγκολλήσεις Ακριβείας (Fusion Splicing)
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Θερμική συγκόλληση μονοτροπικών (Single-mode) και πολυτροπικών (Multi-mode) οπτικών ινών με core-alignment μηχανές για ελάχιστες απώλειες και απόλυτη αξιοπιστία.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Υπερσύγχρονοι Core-Alignment Splicers</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="rounded-2xl bg-[#0d1322] border border-slate-800 p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  Μετρήσεις &amp; Πιστοποιήσεις OTDR
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Έλεγχος δικτύων με οπτικά ανακλασίμετρα χρόνου (OTDR) και power meters. Παροχή επίσημων εκθέσεων μέτρησης (pass/fail traces) για κάθε οπτική ίνα του έργου.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Επίσημα Πρωτόκολλα Παράδοσης</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="rounded-2xl bg-[#0d1322] border border-slate-800 p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  Συντήρηση &amp; Αποκατάσταση Βλαβών
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Άμεση ανταπόκριση για τον εντοπισμό κοπής καλωδίων ή καταστροφής αγωγών. Επανασυγκόλληση και ταχεία αποκατάσταση τηλεπικοινωνιακής διασύνδεσης.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ετοιμότητα Άμεσης Επέμβασης</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TECHNICAL SHOWCASE WITH WORK IMAGE */}
      <section id="equipment" className="py-20 bg-[#090d16] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.2)]">
                <div className="relative h-[360px] sm:h-[420px] w-full">
                  <Image
                    src="/images/splicing.jpg"
                    alt="Τεχνικός K.M.FIBER σε συγκόλληση οπτικών ινών"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent"></div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                      <HardHat className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Πιστοποιημένο Τεχνικό Προσωπικό</div>
                      <div className="text-xs text-slate-400">Αυστηρή τήρηση μέτρων ασφαλείας &amp; ποιότητας</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Tech Specs */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                Τεχνογνωσια &amp; Αρτιοτητα
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Κορυφαίος Εξοπλισμός &amp; Αυστηρά Πρότυπα
              </h2>
              <p className="text-slate-300 leading-relaxed text-base">
                Στην <strong className="text-white">K.M.FIBER</strong> επενδύουμε σε όργανα μέτρησης και μηχανήματα τελευταίας γενιάς. Κάθε εγκατάσταση οπτικής ίνας ελέγχεται εξονυχιστικά ώστε να διασφαλίζεται η μέγιστη ταχύτητα και αντοχή στο χρόνο.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1322] border border-slate-800">
                  <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Core-Alignment Fusion Splicers</h4>
                    <p className="text-slate-400 text-sm">Μηχανές θερμοσυγκόλλησης υψηλής ευθυγράμμισης πυρήνα με αυτόματο έλεγχο απωλειών.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1322] border border-slate-800">
                  <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Οπτικά Ανακλασίμετρα OTDR &amp; Power Meters</h4>
                    <p className="text-slate-400 text-sm">Διάγνωση εξασθένησης, μήκους και σφαλμάτων σε μήκη κύματος 1310nm / 1550nm / 1625nm.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1322] border border-slate-800">
                  <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Μηχανήματα Οριζόντιας Διάτρησης (HDD Rigs)</h4>
                    <p className="text-slate-400 text-sm">Κατευθυνόμενη διάνοιξη χωρίς εκσκαφή επιφανείας, προστατεύοντας υπάρχουσες αστικές υποδομές.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ABOUT COMPANY & LEADERSHIP */}
      <section id="about" className="py-20 bg-slate-950/70 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
              Σχετικα με εμας
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4">
              K.M.FIBER Ι.Κ.Ε.
            </h2>
            <p className="text-slate-400 text-base">
              Εταιρεία τηλεπικοινωνιακών υποδομών με έδρα το Άργος Ορεστικό Καστοριάς και δραστηριότητα σε όλη τη Δυτική Μακεδονία και την ελληνική επικράτεια.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Governance Card 1 */}
            <div className="rounded-2xl bg-[#0d1322] border border-slate-800 p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-bold flex items-center justify-center text-lg shrink-0">
                ΜΕ
              </div>
              <div>
                <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Μέλος &amp; Διαχειριστής</div>
                <h4 className="text-lg font-bold text-white mt-0.5">ΜΟΝΟΧΟΛΙΑΣ ΕΥΣΤΑΘΙΟΣ</h4>
                <div className="text-sm text-slate-400">του Παντελή</div>
                <div className="mt-3 inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <span>Εταιρική Συμμετοχή: <strong>50%</strong> (10.000 €)</span>
                </div>
              </div>
            </div>

            {/* Governance Card 2 */}
            <div className="rounded-2xl bg-[#0d1322] border border-slate-800 p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-bold flex items-center justify-center text-lg shrink-0">
                ΚΑ
              </div>
              <div>
                <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Μέλος &amp; Διαχειριστής</div>
                <h4 className="text-lg font-bold text-white mt-0.5">ΚΑΡΑΓΙΑΝΝΗΣ ΑΘΑΝΑΣΙΟΣ</h4>
                <div className="text-sm text-slate-400">του Πασχάλη</div>
                <div className="mt-3 inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <span>Εταιρική Συμμετοχή: <strong>50%</strong> (10.000 €)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick GEMI Callout Card */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-900 border border-cyan-500/30 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Επίσημη Δημοσιότητα &amp; Στοιχεία Γ.Ε.ΜΗ.</h4>
                <p className="text-slate-400 text-sm">
                  Πλήρης διαφάνεια σύμφωνα με τον Ν. 4072/2012 και τον Ν. 4919/2022.
                </p>
              </div>
            </div>
            <Link
              href="/gemi"
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm whitespace-nowrap transition-colors flex items-center gap-1.5"
            >
              <span>Προβολή Στοιχείων ΓΕΜΗ</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* CONTACT & INQUIRY SECTION */}
      <section id="contact" className="py-20 bg-[#090d16] border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
              Επικοινωνια
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4">
              Επικοινωνήστε Μαζί μας
            </h2>
            <p className="text-slate-400 text-base">
              Είμαστε στη διάθεσή σας για οποιαδήποτε τεχνική μελέτη, ανάθεση έργου ή παροχή προσφοράς τηλεπικοινωνιακών υποδομών.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Phone Card */}
            <a 
              href="tel:6932426214"
              className="rounded-2xl bg-[#0d1322] border border-slate-800 p-8 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 text-center flex flex-col items-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Τηλέφωνο Επικοινωνίας</span>
              <span className="text-xl font-black text-white mt-1 group-hover:text-cyan-300 transition-colors">
                6932426214
              </span>
              <span className="text-xs text-slate-500 mt-2">Άμεση τηλεφωνική εξυπηρέτηση</span>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:stathismonocholias@gmail.com"
              className="rounded-2xl bg-[#0d1322] border border-slate-800 p-8 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 text-center flex flex-col items-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Ηλεκτρονικό Ταχυδρομείο</span>
              <span className="text-sm sm:text-base font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors break-all">
                stathismonocholias@gmail.com
              </span>
              <span className="text-xs text-slate-500 mt-2">Αποστολή μελετών &amp; σχεδίων</span>
            </a>

            {/* Location Card */}
            <div className="rounded-2xl bg-[#0d1322] border border-slate-800 p-8 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 text-center flex flex-col items-center group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Έδρα Επιχείρησης</span>
              <span className="text-base font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                Παππά Εμμανουήλ 3
              </span>
              <span className="text-xs text-slate-400 mt-1">Τ.Κ. 52200, Άργος Ορεστικό</span>
              <span className="text-xs text-slate-500 mt-1">Επιμελητήριο Καστοριάς</span>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Col 1: Brand */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-white tracking-tight">K.M.FIBER Ι.Κ.Ε.</span>
                  <span className="text-[11px] text-slate-400">Τηλεπικοινωνιακές Υποδομές &amp; Δίκτυα Οπτικών Ινών</span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                Ανάπτυξη δικτύων οπτικών ινών FTTH/FTTB, οριζόντιες κατευθυνόμενες διατρήσεις, εγκατάσταση τηλεπικοινωνιακού εξοπλισμού και συντήρηση δικτύων σε όλη την Ελλάδα.
              </p>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Πλοηγηση</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="#services" className="hover:text-cyan-400 transition-colors">Υπηρεσίες</Link></li>
                <li><Link href="#equipment" className="hover:text-cyan-400 transition-colors">Τεχνογνωσία &amp; Εξοπλισμός</Link></li>
                <li><Link href="#about" className="hover:text-cyan-400 transition-colors">Η Εταιρεία</Link></li>
                <li><Link href="#contact" className="hover:text-cyan-400 transition-colors">Επικοινωνία</Link></li>
                <li>
                  <Link href="/gemi" className="text-cyan-400 font-semibold hover:underline flex items-center gap-1">
                    <span>Στοιχεία Γ.Ε.ΜΗ.</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Statutory Registry */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Στοιχεια Μητρωου</h4>
              <ul className="space-y-1.5 text-xs">
                <li><span className="text-slate-500">Αρ. Γ.Ε.ΜΗ.:</span> <span className="font-mono text-cyan-400 font-semibold">188525832000</span></li>
                <li><span className="text-slate-500">Α.Φ.Μ.:</span> <span className="font-mono text-slate-200">803064377</span></li>
                <li><span className="text-slate-500">EUID:</span> <span className="font-mono text-slate-300">ELGEMI.188525832000</span></li>
                <li><span className="text-slate-500">Επιμελητήριο:</span> Καστοριάς</li>
                <li><span className="text-slate-500">Έδρα:</span> Άργος Ορεστικό</li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
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
