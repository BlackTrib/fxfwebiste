import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate GDPR | FXF București',
  description: 'Politica de confidențialitate și protecția datelor personale la FXF Web Solution. Conformitate GDPR completă. Transparență totală privind colectarea datelor.',
}

export default function ConfidentialitaterPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-5 py-24">
          <h1 className="font-display text-4xl font-bold text-primary mb-2">Politica de Confidențialitate</h1>
          <p className="text-muted-foreground text-sm mb-12">Ultima actualizare: aprilie 2026 | Conformă cu GDPR (Regulamentul UE 2016/679)</p>

          <div className="prose prose-lg max-w-none space-y-10 text-foreground">

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">1. Operator de date</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>FXF Creative Agency SRL</strong>, cu sediul în Str. Topolnita nr. 5, București, România,
                este operatorul datelor cu caracter personal colectate prin intermediul site-ului fxf.ro.
                Ne puteți contacta la <strong>office@fxf.ro</strong> sau <strong>+40 785 277 566</strong> pentru orice
                solicitare legată de datele dumneavoastră personale.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">2. Date colectate</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Colectăm doar datele necesare pentru furnizarea serviciilor noastre:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong>Date de identificare:</strong> nume, prenume, denumire companie</li>
                <li><strong>Date de contact:</strong> adresă de email, număr de telefon</li>
                <li><strong>Date de navigare:</strong> adresă IP, tip browser, pagini vizitate (prin cookies)</li>
                <li><strong>Date financiare:</strong> informații de facturare (fără date card bancar)</li>
                <li><strong>Comunicări:</strong> mesajele trimise prin formularul de contact</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">3. Scopul prelucrării datelor</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Datele sunt prelucrate exclusiv în scopuri legitime:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Furnizarea serviciilor contractate</li>
                <li>Comunicare cu clienții și potențialii clienți</li>
                <li>Emiterea facturilor și respectarea obligațiilor fiscale</li>
                <li>Îmbunătățirea serviciilor și experienței utilizatorului</li>
                <li>Trimiterea de oferte și informații relevante (cu acordul prealabil)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">4. Temeiul juridic</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prelucrarea datelor se bazează pe: <strong>(a)</strong> executarea unui contract la care persoana vizată este parte,
                <strong> (b)</strong> consimțământul explicit acordat, <strong>(c)</strong> obligații legale sau <strong>(d)</strong> interesul
                legitim al operatorului, conform art. 6 din GDPR.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">5. Durata stocării datelor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Datele sunt stocate doar atât timp cât este necesar pentru scopul colectării:
                datele clienților activi — pe durata relației contractuale plus 5 ani conform legislației fiscale;
                datele din formularul de contact — maxim 2 ani; datele de navigare — maxim 12 luni.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">6. Drepturile dumneavoastră</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Conform GDPR, aveți următoarele drepturi:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong>Dreptul de acces</strong> — să solicitați o copie a datelor prelucrate</li>
                <li><strong>Dreptul la rectificare</strong> — corectarea datelor inexacte</li>
                <li><strong>Dreptul la ștergere</strong> — ștergerea datelor (&quot;dreptul de a fi uitat&quot;)</li>
                <li><strong>Dreptul la restricționare</strong> — limitarea prelucrării în anumite condiții</li>
                <li><strong>Dreptul la portabilitate</strong> — primirea datelor într-un format structurat</li>
                <li><strong>Dreptul la opoziție</strong> — opoziția față de prelucrarea bazată pe interes legitim</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Pentru exercitarea acestor drepturi, ne contactați la <strong>office@fxf.ro</strong>. Răspundem în termen de 30 de zile.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">7. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Site-ul nostru utilizează cookies esențiale pentru funcționare și cookies analitice (Google Analytics) pentru înțelegerea
                comportamentului utilizatorilor. La prima vizită, veți fi solicitat să vă exprimați acordul. Puteți gestiona preferințele
                cookies din setările browser-ului sau din banner-ul de consimțământ.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">8. Transferuri internaționale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Datele dumneavoastră nu sunt transferate în afara Spațiului Economic European. În cazul utilizării unor servicii terțe
                (ex: Google Analytics), acestea operează în conformitate cu GDPR și au implementate garanții adecvate.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">9. Securitatea datelor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor: conexiuni SSL/HTTPS, acces restricționat
                la baze de date, backup-uri periodice și politici interne de securitate. În eventualitatea unei breșe de securitate, vom
                notifica autoritățile competente și persoanele afectate conform legii.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">10. Reclamații</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dacă considerați că datele dumneavoastră sunt prelucrate ilegal, aveți dreptul să depuneți o plângere la
                <strong> Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>,
                cu sediul în B-dul G-ral. Gheorghe Magheru nr. 28-30, București, sau pe site-ul <strong>www.dataprotection.ro</strong>.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
