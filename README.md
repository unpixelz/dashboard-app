# Private Next.js Dashboard – Lernprojekt

Dieses Repository ist ein **privates Lern- und Experimentierprojekt** zur Entwicklung eines modernen Dashboards mit **Next.js (App Router)**.

Der Fokus liegt auf:

* sauberer Projektstruktur
* modernen UI-/UX-Konzepten (Dark Mode, Clean Design)
* Best Practices in React & Next.js
* schrittweiser Erweiterung (Auth, Layouts, State, Datenanbindung)

> **Hinweis:** Dieses Projekt ist **nicht für den produktiven Einsatz** gedacht. Es dient ausschließlich dem persönlichen Lernen und Ausprobieren.

---

## Tech Stack

* **Next.js** (App Router)
* **React**
* **TypeScript**
* **CSS / Tailwind CSS** (geplant)
* **Dark Mode** (System / Toggle)

---

## Projektziele

* Aufbau eines skalierbaren Dashboard-Layouts
* Entwicklung eines Login-Screens (UI-first)
* Verständnis für Routing, Layouts & Server Components
* Integration typischer Dashboard-Bausteine:

  * Sidebar / Navigation
  * Header
  * Karten & Tabellen
  * Dummy-Daten & später APIs

---

## Getting Started

### Development Server starten

```bash
npm run dev
# oder
yarn dev
# oder
pnpm dev
# oder
bun dev
```

Anschließend im Browser öffnen:

```
http://localhost:3000
```

---

## Projektstruktur (Auszug)

```txt
app/
 ├─ page.tsx        # Einstiegspunkt (Dashboard / Landing)
 ├─ layout.tsx      # Globales Layout
 ├─ globals.css     # Globale Styles
```

Die Seite aktualisiert sich automatisch bei Änderungen.

---

## Schriftarten

Dieses Projekt nutzt **next/font** zur automatischen Optimierung und Einbindung der Schriftart **Geist**.

---

## Lernressourcen

* Next.js Dokumentation: [https://nextjs.org/docs](https://nextjs.org/docs)
* App Router Guide: [https://nextjs.org/docs/app](https://nextjs.org/docs/app)
* React Docs: [https://react.dev](https://react.dev)

---

## Deployment

Ein Deployment ist **optional** und dient nur Testzwecken.

Empfohlen:

* **Vercel** (einfachste Option für Next.js)

---

## Lizenz

Privates Projekt – keine öffentliche Lizenz.

---

*Dieses README wird im Laufe des Projekts erweitert, sobald neue Features oder Konzepte hinzukommen.*
