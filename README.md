# Vertrauen - Das erste hochqualitative Datingportal Deutschlands

## Übersicht

Vertrauen ist ein hochqualitatives Datingnetzwerk für besondere Begegnungen, das auf gegenseitigem Vertrauen und gemeinsamen Werten basiert. Es unterscheidet sich von konventionellen Dating-Plattformen durch:

- Ein persönliches Aufnahmegespräch für jedes potenzielle Mitglied
- Die Verpflichtung zu monatlichen Gesprächen mit anderen Mitgliedern
- Eine Gemeinschaft, die auf Freundlichkeit, Ehrlichkeit, Konsent und Verantwortung aufbaut

## Technischer Aufbau

Dieses Projekt wurde mit modernen Webtechnologien entwickelt:

- **Framework**: [Next.js](https://nextjs.org/) mit App Router
- **UI-Komponenten**: [Shadcn UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typensicherheit**: [TypeScript](https://www.typescriptlang.org/)
- **Schriftarten**: Geist Sans & Geist Mono von Vercel

## Funktionen

- Responsives Design für alle Gerätetypen
- Mehrstufiges Bewerbungsformular mit E-Mail-Integration
- Smooth-Scroll-Navigation für eine verbesserte Benutzererfahrung
- Moderne, minimalistische Ästhetik
- Themensystem (hell/dunkel) mit System-Präferenz-Unterstützung

## Lokale Entwicklung

### Voraussetzungen

- Node.js 18.x oder höher
- npm, yarn oder pnpm

### Installation

1. Repository klonen:
   ```bash
   git clone https://github.com/yourusername/vertrauen.git
   cd vertrauen
   ```

2. Abhängigkeiten installieren:
   ```bash
   npm install
   # oder
   yarn install
   # oder
   pnpm install
   ```

3. Entwicklungsserver starten:
   ```bash
   npm run dev
   # oder
   yarn dev
   # oder
   pnpm dev
   ```

4. Browser öffnen und http://localhost:3000 aufrufen

## Projektstruktur

```
vertrauen/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root Layout
│   └── page.tsx          # Hauptseite
├── components/           # React-Komponenten
│   ├── application-form.tsx  # Bewerbungsformular
│   ├── theme-provider.tsx    # Theme-Provider
│   └── ui/               # UI-Komponenten (shadcn)
├── lib/                  # Hilfsfunktionen
│   └── utils.ts          # Utility-Funktionen
├── public/               # Statische Dateien
└── tailwind.config.js    # Tailwind-Konfiguration
```

## Anpassung

Das Bewerbungsformular sendet Anfragen per E-Mail an applications@vertrauen.live. Um dies zu ändern, passe die E-Mail-Adresse in `components/application-form.tsx` an:

```typescript
const mailtoUrl = `mailto:deine-email@example.com?subject=...`;
```

Um die Werte oder den Inhalt der Seite zu ändern, bearbeite die entsprechenden Abschnitte in `app/page.tsx`.

## Deployment

Dieses Projekt kann einfach auf Vercel, Netlify oder jeder anderen Next.js-kompatiblen Hosting-Plattform deployt werden:

```bash
# Für Vercel
vercel

# Für Netlify
netlify deploy
```

## Mitwirken

Beiträge zum Projekt sind willkommen. Bitte halte dich an den Kodex der Gemeinschaft und die Werte von Vertrauen, wenn du Änderungen vorschlägst.

## Lizenz

MIT

---

Entwickelt mit ❤️ für echte Begegnungen.
