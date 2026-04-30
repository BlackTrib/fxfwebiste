'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import { PageHeroVisual } from '@/components/page-hero-visual'

// Metadata exported from a separate file for client components
// See app/contact/metadata.ts

const services = [
  'Site de prezentare profesional',
  'Magazin online (E-Commerce)',
  'Redesign site existent',
  'SEO & Optimizare pentru motoare de căutare',
  'Google Ads & Campanii Plătite',
  'Mentenanță și Suport Tehnic',
  'Integrări și Automatizări',
  'Consultanță Digitală',
]

const contactInfo = [
  { icon: Phone, label: 'Telefon', value: '+40 785 277 566', href: 'tel:+40785277566' },
  { icon: Mail, label: 'Email', value: 'office@fxf.ro', href: 'mailto:office@fxf.ro' },
  { icon: MapPin, label: 'Locație', value: 'Str. Topolnita nr 5, București, România', href: null },
  { icon: Clock, label: 'Program', value: 'Luni – Vineri, 10:00 – 18:00 EET | Weekend inchis', href: null },
]

function generateCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  return { a, b, answer: a + b }
}

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState(generateCaptcha)
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaError, setCaptchaError] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (parseInt(captchaInput) !== captcha.answer) {
      setCaptchaError(true)
      setCaptcha(generateCaptcha())
      setCaptchaInput('')
      return
    }
    setCaptchaError(false)
    setLoading(true)
    try {
      // Using Web3Forms for static hosting compatibility
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '0af7bd53-cb68-45b7-98f4-63e5eb75da25',
          subject: `Solicitare nouă de la ${form.name} - FXF.ro`,
          from_name: 'FXF Website',
          ...form,
        }),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setSent(true)
        setForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
      } else {
        alert('Eroare la trimitere. Încearcă din nou.')
      }
    } catch (error) {
      alert('Eroare la conexiune. Încearcă din nou.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-white/50 font-semibold text-sm uppercase tracking-widest mb-3">
                  Contact FXF Web Solution
                </p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 text-balance">
                  Solicită ofertă gratuită pentru proiectul tău web
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  Consultanța inițială este 100% gratuită și fără obligații. Completează formularul 
                  și te contactăm în maxim 24 de ore pentru a discuta despre cerințele tale și 
                  oportunitățile de colaborare.
                </p>
                <p className="text-white/50 text-sm">
                  Răspundem la toate solicitările în maxim 4 ore lucrative. Proiecte de web design, 
                  magazine online, SEO sau marketing digital - suntem aici să te ajutăm.
                </p>
              </div>
              <PageHeroVisual page="contact" />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Contact Info */}
                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                    Informații Contact
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((item) => {
                      const Icon = item.icon
                      const content = (
                        <div key={item.label} className="flex items-start gap-4 group">
                          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all">
                            <Icon size={20} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">
                              {item.label}
                            </p>
                            <p className="text-base font-semibold text-foreground">{item.value}</p>
                          </div>
                        </div>
                      )
                      return item.href ? (
                        <a key={item.label} href={item.href} className="hover:opacity-80 transition-opacity block">
                          {content}
                        </a>
                      ) : (
                        <div key={item.label}>{content}</div>
                      )
                    })}
                  </div>
                </div>

                {/* Quick Benefits */}
                <div className="bg-gradient-to-br from-primary/8 to-primary/3 border border-primary/20 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-base text-foreground mb-5">
                    După ce trimiți formularul
                  </h3>
                  <ol className="space-y-3">
                    {[
                      { num: 1, text: 'Confirmare instant pe email cu nr. de referință' },
                      { num: 2, text: 'Contact în maxim 24h pentru discuție inițială' },
                      { num: 3, text: 'Analiză personalizată și recomandări gratuite' },
                      { num: 4, text: 'Propunere detaliată fără obligații' },
                    ].map((step) => (
                      <li key={step.num} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {step.num}
                        </span>
                        <span className="text-sm text-foreground/80 pt-0.5">{step.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-br from-accent-brand/8 to-accent-brand/3 border border-accent-brand/20 rounded-2xl p-6 flex items-start gap-3">
                  <Zap size={24} className="text-accent-brand shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Răspunsul garantat</p>
                    <p className="text-xs text-muted-foreground">
                      Răspundem la toate solicitările în maxim 4 ore lucrative. Chiar dacă e weekend, trimiți mesajul și-ți va veni confirmarea luni dimineață.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                {sent ? (
                  <div className="bg-gradient-to-br from-green-50 to-green-50/50 border border-green-200 rounded-2xl p-12 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-pulse">
                      <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                    <h2 className="font-display font-bold text-3xl text-foreground mb-3">
                      Mulțumim!
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-8">
                      Mesajul tău a fost trimis cu succes. Te contactăm în maxim 24 de ore pentru
                      a discuta în detaliu despre proiectul tău și oportunități de colaborare.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-primary font-semibold text-sm hover:underline"
                    >
                      Trimite un alt mesaj
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h2 className="font-display font-bold text-2xl text-foreground mb-8">
                      Ofertă Gratuită
                    </h2>

                    {/* Row 1 */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2.5">
                          Nume complet <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Ion Popescu"
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2.5">
                          Adresă email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="ion@companie.ro"
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2.5">
                          Telefon
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+40 7xx xxx xxx"
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2.5">
                          Companie / Brand
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Numele companiei tale"
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2.5">
                          Ce serviciu te interesează? <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={form.service}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        >
                          <option value="">Selectează un serviciu</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold text-foreground mb-2.5">
                          Buget estimat
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        >
                          <option value="">Nu sunt sigur</option>
                          <option value="sub-1000">Sub 1.000 EUR</option>
                          <option value="1000-3000">1.000 EUR – 3.000 EUR</option>
                          <option value="3000-6000">3.000 EUR – 6.000 EUR</option>
                          <option value="6000-10000">6.000 EUR – 10.000 EUR</option>
                          <option value="peste-10000">Peste 10.000 EUR</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2.5">
                        Descrie pe scurt ce ai nevoie <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Spune-ne despre afacerea ta, obiectivele actuale și ce vrei să realizezi cu ajutorul nostru..."
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      />
                    </div>

                    {/* Math CAPTCHA and Submit Button */}
                    <div className="flex flex-col sm:flex-row items-end gap-3 mb-6">
                      {/* CAPTCHA */}
                      <div className="flex-1">
                        <label className="block text-sm font-semibold text-foreground mb-2.5">
                          Verificare antispam <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="bg-secondary text-foreground font-mono font-bold text-sm px-3 py-2.5 rounded-lg border border-border select-none whitespace-nowrap">
                            {captcha.a} + {captcha.b} =
                          </span>
                          <input
                            type="number"
                            value={captchaInput}
                            onChange={(e) => { setCaptchaInput(e.target.value); setCaptchaError(false) }}
                            placeholder="?"
                            required
                            className={`w-16 bg-background border rounded-lg px-3 py-2.5 text-sm text-center text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${captchaError ? 'border-red-500 ring-2 ring-red-500/30' : 'border-border'}`}
                          />
                        </div>
                        {captchaError && (
                          <p className="text-red-500 text-xs mt-1.5">Răspuns incorect</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl whitespace-nowrap"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Se trimite...
                          </>
                        ) : (
                          <>
                            Trimite Solicitarea <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-muted-foreground mt-5">
                      🔒 Datele tale sunt 100% confidențiale și nu vor fi partajate cu terți.
                      Folosim cele mai bune practici de securitate pentru protejarea informațiilor.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ or CTA */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Întrebări frecvente despre colaborare
            </h2>
            <p className="text-muted-foreground text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Răspunsuri la cele mai frecvente întrebări despre serviciile noastre de web design și development.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {[
                { q: 'Cât costă un site?', a: 'Prețurile variază în funcție de complex și funcționalități. Oferim pachete de la 1.000€ pentru site-uri de prezentare și de la 2.500€ pentru magazine online.' },
                { q: 'Cât timp durează dezvoltarea?', a: 'Un site standard durează 4-8 săptămâni. E-commerce-urile și platformele complexe pot dura 10-16 săptămâni.' },
                { q: 'Oferiți suport după lansare?', a: 'Da, oferim mentenanță inclusă prima lună, apoi pachete de suport de la 100€/lună.' },
                { q: 'Cum funcționează procesul?', a: 'Discuție inițială → Propunere → Design → Development → Testing → Lansare → Suport continuu.' },
              ].map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 text-left">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

