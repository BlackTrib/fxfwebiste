import { CheckCircle2, TrendingUp, Users, Clock } from 'lucide-react'

const stats = [
  { icon: CheckCircle2, value: '150+', label: 'Proiecte Web', desc: 'Site-uri și magazine online livrate' },
  { icon: TrendingUp, value: '98%', label: 'Satisfacție Clienți', desc: 'Rating mediu al colaborărilor' },
  { icon: Users, value: '94%', label: 'Rată Retenție', desc: 'Clienți care revin pentru noi proiecte' },
  { icon: Clock, value: '4h', label: 'Timp Răspuns', desc: 'Suport tehnic în zilele lucrătoare' },
]

export function Stats() {
  return (
    <section className="py-8 bg-accent-brand/90">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm mb-2">
                <s.icon size={20} className="text-white" strokeWidth={1.5} />
              </div>
              <p className="font-display text-3xl font-bold text-white">{s.value}</p>
              <p className="text-sm font-medium text-white/90 mt-0.5">{s.label}</p>
              <p className="text-xs text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
