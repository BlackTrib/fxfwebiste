import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Termeni și Condiții | FXF Web Solution București',
  description: 'Termenii și condițiile contractuale ale serviciilor FXF Web Solution din București. Informații despre plăți, garanții, livrare și drepturi utilizator.',
}

export default function TermeniPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-5 py-24">
          <h1 className="font-display text-4xl font-bold text-primary mb-2">Termeni și Condiții</h1>
          <p className="text-muted-foreground text-sm mb-12">Ultima actualizare: aprilie 2026</p>

          <div className="prose prose-lg max-w-none space-y-10 text-foreground">

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">1. Informații generale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prezentul document reglementează termenii și condițiile de utilizare a serviciilor oferite de <strong>FXF Creative Agency SRL</strong>,
                cu sediul în Str. Topolnita nr. 5, București, România, denumită în continuare &quot;FXF&quot; sau &quot;Prestatorul&quot;.
                Prin accesarea site-ului sau comandarea oricărui serviciu, Clientul acceptă în totalitate prezentele termeni și condiții.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">2. Servicii oferite</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                FXF oferă servicii profesionale de:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Web design și dezvoltare web</li>
                <li>Creare magazine online (e-commerce)</li>
                <li>Optimizare SEO (Search Engine Optimization)</li>
                <li>Campanii Google Ads și publicitate online</li>
                <li>Mentenanță și suport tehnic website</li>
                <li>Găzduire web și înregistrare domenii</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">3. Comenzi și contracte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Orice colaborare începe printr-un contract semnat de ambele părți sau printr-o confirmare scrisă (email) a ofertei acceptate.
                Prețurile sunt negociate individual în funcție de specificațiile proiectului. FXF își rezervă dreptul de a refuza orice comandă
                care contravine valorilor companiei sau legislației în vigoare.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">4. Plăți și facturare</h2>
              <p className="text-muted-foreground leading-relaxed">
                Plata se efectuează conform graficului stabilit în contract, de regulă în tranșe: un avans la semnarea contractului și restul la
                livrarea finală. Factura se emite în termen de 5 zile lucrătoare de la efectuarea plății. Întârzierea plăților poate atrage
                penalități de 0,1% pe zi din suma datorată.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">5. Livrare și termene</h2>
              <p className="text-muted-foreground leading-relaxed">
                Termenele de livrare sunt stabilite în contract și pot varia în funcție de complexitatea proiectului. FXF se angajează să respecte
                termenele asumate. Întârzierile cauzate de lipsa materialelor sau feedbackului din partea Clientului nu sunt responsabilitatea FXF.
                Clientul are la dispoziție o perioadă de 14 zile pentru revizii după livrarea proiectului.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">6. Drepturi de proprietate intelectuală</h2>
              <p className="text-muted-foreground leading-relaxed">
                După achitarea integrală a sumelor datorate, drepturile de proprietate intelectuală asupra lucrărilor realizate se transferă
                Clientului. Până la achitarea integrală, FXF păstrează toate drepturile asupra lucrărilor. FXF își rezervă dreptul de a prezenta
                proiectul în portofoliu, cu acordul prealabil al Clientului.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">7. Garanție și mentenanță</h2>
              <p className="text-muted-foreground leading-relaxed">
                Proiectele livrate beneficiază de o garanție de 30 de zile de la data lansării, în care se remediază gratuit orice erori tehnice
                apărute din vina FXF. Modificările solicitate de Client în această perioadă se tarifează separat. Serviciile de mentenanță continuă
                se contractează separat.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">8. Limitarea răspunderii</h2>
              <p className="text-muted-foreground leading-relaxed">
                FXF nu este responsabilă pentru pierderile indirecte, pierderea de profit sau daune cauzate de utilizarea sau imposibilitatea
                utilizării serviciilor. Răspunderea totală a FXF nu va depăși suma plătită de Client pentru serviciul respectiv.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">9. Rezilierea contractului</h2>
              <p className="text-muted-foreground leading-relaxed">
                Oricare dintre părți poate rezilia contractul cu un preaviz de 15 zile, în scris. În cazul rezilierii din vina Clientului,
                avansul plătit nu se returnează. În cazul rezilierii din vina FXF, avansul se returnează integral.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">10. Legislație aplicabilă</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prezentul contract este guvernat de legislația română în vigoare. Orice litigiu va fi soluționat pe cale amiabilă sau, în caz
                contrar, de instanțele judecătorești competente din București.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">11. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pentru orice întrebări legate de acești termeni, ne puteți contacta la:<br />
                <strong>Email:</strong> office@fxf.ro<br />
                <strong>Telefon:</strong> +40 785 277 566<br />
                <strong>Adresă:</strong> Str. Topolnita nr. 5, București, România
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
