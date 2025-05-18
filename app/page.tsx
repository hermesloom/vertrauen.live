"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ApplicationForm from "@/components/application-form";
import Link from "next/link";

export default function Home() {
  // Add smooth scroll handler function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-screen-xl mx-auto flex h-14 items-center justify-center">
          <div className="flex w-full max-w-4xl justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Vertrauen</span>
              <span className="text-xs text-muted-foreground">
                vertrauen.live
              </span>
            </Link>
            <nav className="flex items-center space-x-4 lg:space-x-6">
              <Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Was uns besonders macht
              </Link>
              <Link
                href="#process"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("process");
                }}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Dein Weg zu uns
              </Link>
              <Link
                href="#application"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("application");
                }}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Bewerbung
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Vertrauen</span> ist möglich.
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8">
              Das erste Datingnetzwerk Deutschlands für wirklich besondere
              Begegnungen.
            </p>
            <p className="md:text-lg mb-12 max-w-2xl mx-auto">
              Bei uns zählt nicht Masse, sondern Klasse. Jedes Mitglied
              durchläuft ein persönliches Gespräch, bevor es aufgenommen wird.
              Warum? Weil echte Verbindung Vertrauen braucht – und Vertrauen
              beginnt mit Verantwortung, Ehrlichkeit und echtem Interesse am
              Gegenüber.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="px-6"
                onClick={() => scrollToSection("application")}
              >
                Jetzt bewerben
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6"
                onClick={() => scrollToSection("about")}
              >
                Mehr erfahren
              </Button>
            </div>
            <p className="text-sm mt-12 font-medium flex items-center justify-center">
              <span className="mr-2">🔒</span>
              Vertrauen ist keine Plattform. Vertrauen ist ein Versprechen.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-4 py-16 md:py-24 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
              Was Vertrauen besonders macht
            </h2>

            <div className="grid grid-cols-1 gap-8">
              {/* First row: Two cards side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Persönliches Aufnahmegespräch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Bevor du Mitglied wirst, führen wir ein vertrauliches
                      Gespräch mit dir. Wir wollen wissen: Wer bist du? Was
                      bewegt dich? Und warum möchtest du Teil dieses Netzwerks
                      sein?
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ein monatliches Gespräch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Als Mitglied verpflichtest du dich, einmal im Monat ein
                      echtes Gespräch zu führen – entweder mit einem anderen
                      Mitglied oder mit jemandem, der sich auf eine
                      Mitgliedschaft bewirbt. Du gibst weiter, was du empfangen
                      hast.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Second row: Gemeinsame Werte card spanning full width */}
              <Card>
                <CardHeader>
                  <CardTitle>Gemeinsame Werte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed">
                    Unsere Gemeinschaft lebt nach klaren Prinzipien, die jede
                    Begegnung prägen:
                    <strong className="font-semibold"> Freundlichkeit</strong> –
                    Wir begegnen uns mit Respekt, Wohlwollen und Offenheit.
                    <strong className="font-semibold"> Ehrlichkeit</strong> –
                    Wir sagen, was wir meinen. Und wir meinen, was wir sagen.
                    <strong className="font-semibold"> Konsent</strong> – Nur
                    ein klares "Ja" ist ein Ja. Alles andere ist ein Nein.
                    <strong className="font-semibold"> Verantwortung</strong> –
                    Jede Begegnung ist eine Gelegenheit, das Leben des anderen
                    positiv zu berühren. Und deines ebenso.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
              Dein Weg zu Vertrauen
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Bewerbung ausfüllen
                  </h3>
                  <p className="text-muted-foreground">
                    Erzähle uns von dir, deinen Werten und was du dir von
                    Vertrauen erhoffst.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Einladung zum Gespräch erhalten
                  </h3>
                  <p className="text-muted-foreground">
                    Bei positiver Vorprüfung laden wir dich zu einem
                    vertraulichen Gespräch ein.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Mitglied werden
                  </h3>
                  <p className="text-muted-foreground">
                    Nach dem Gespräch entscheiden wir gemeinsam, ob Vertrauen
                    der richtige Ort für dich ist.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Monatlich ein Gespräch führen
                  </h3>
                  <p className="text-muted-foreground">
                    Als Mitglied verpflichtest du dich zu mindestens einem
                    Gespräch pro Monat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Verbindungen leben, die verändern
                  </h3>
                  <p className="text-muted-foreground">
                    Erlebe Begegnungen, die auf Vertrauen, Respekt und echtem
                    Interesse aufbauen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="application" className="px-4 py-16 md:py-24 bg-muted">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
              Bewerbungsformular
            </h2>
            <p className="text-center mb-12 italic">
              "Bevor du jemanden triffst, lernst du dich selbst neu kennen."
            </p>

            <ApplicationForm />
          </div>
        </section>
      </main>

      {/* Simplified, centered footer */}
      <footer className="border-t py-8">
        <div className="container max-w-screen-xl mx-auto flex justify-center">
          <p className="text-sm text-muted-foreground text-center">
            ❤️ {new Date().getFullYear()} Vertrauen
          </p>
        </div>
      </footer>
    </div>
  );
}
