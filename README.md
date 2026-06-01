# 🌸 Radha Naam Japa Counter

A beautiful and modern digital Japa Counter designed to help you track your chanting of the holy names of **Radha** with audio support, history tracking, and an immersive user interface.

---

## ✨ Features

We provided lots of features in our **Radha Naam Japa Counter**:

- **📿 Chanting System** - User can tap everywhere in the hero section.
- **📊 History Track** - Monthly, Weekly, and Yearly wise statistics.
- **🔊 Audio Support** - User can toggle sound on/off during chanting.
- **🌐 Multi-language Support** - User can chant in their own language.
- **📿 Switch Multiple Mantra** - User can switch multiple mantras like (Ram Ram, Om Namah Shivaya etc).

---

## 🛠️ Tech Stack

### 🚀 Core Technologies

- **Next.js** (Frontend)
- **Firebase** (Backend)

### 📚 Libraries

- **Tailwind CSS** — For responsive, modern styling.
- **Framer Motion** — For smooth, fluid animations.
- **Canvas Confetti** — For celebrating chanting milestones.
- **React Hot Toast** — For beautiful notifications and alerts.
- **CLSX & Tailwind Merge** — Dynamically changes Tailwind utility classes.
- **Recharts** — For interactive data visualizations.
- **use-sound** — For immersive sound effects.
- **i18n** — For robust internationalization and multi-language support.

---

## 🔄 Architecture Flow

1. **User clicks to chant** (tap anywhere in the hero section).
2. **Instant count increase** and animated visual fill of one Japa bead.
3. **Mala completion** — Automatically shows a notification message and celebration once a Mala is completed.
4. **View statistics** — Monitor progress over weekly, monthly, and yearly intervals.

---

## 📁 Folder Structure

```text
my-japa-app/
├── public/                     # Global static assets
│   ├── audios/                 # Sound profiles managed by use-sound
│   │   ├── click.mp3
│   │   └── bell.mp3
│   └── images/
│       └── radha-krishna.webp
├── src/
│   ├── app/                    # App Router: Core Routing & Page Wrappers Only
│   │   ├── layout.js           # Main layout, metadata, global Context providers
│   │   ├── page.js             # Main workspace route -> Imports <ChantingDashboard />
│   │   ├── stats/              # Dashboard Statistics Sub-page (/stats)
│   │   │   └── page.js         # Sub-route page wrapper -> Imports <StatsDashboard />
│   │   ├── settings/           # System Configurations Sub-page (/settings)
│   │   │   └── page.js         # Sub-route page wrapper -> Imports <SettingsPanel />
│   │   └── globals.css         # Global Tailwind utilities & variables
│   │
│   ├── components/             # ── OVERALL / CORE UI COMPONENTS ──
│   │   ├── layout/             # Global structure nodes
│   │   │   └── Navbar.jsx      # Navigation bar header
│   │   └── ui/                 # Shared Atom Elements (Design System)
│   │       ├── Button.jsx      # Reusable design standard button
│   │       ├── Card.jsx        # Reusable content layout wrapper
│   │       ├── Dropdown.jsx    # Multi-use clean popover selector menu
│   │       └── Toggle.jsx      # Reusable input selection switches
│   │
│   ├── features/               # ── FEATURE-BASED DOMAIN MODEL MODULES ──
│   │   ├── chanting-engine/    # Main tracking and interface feature
│   │   │   ├── components/     # Domain-specific structural elements
│   │   │   │   ├── BeadCircle.jsx   # Interactive SVG loop tracking 108 beads
│   │   │   │   ├── DeityDisplay.jsx # Central tap image target with framer-motion labels
│   │   │   │   └── CounterPanel.jsx # Active numbers tracker block ("Japa: 14, Mala: 2")
│   │   │   ├── hooks/          # Feature custom logic abstractions
│   │   │   │   ├── useAudioEngine.js# Audio trigger layer handling use-sound configuration
│   │   │   │   └── useJapaState.js  # Feature logic calculator hooks
│   │   │   └── index.js        # Public API entry point: Exports <ChantingDashboard />
│   │   │
│   │   ├── analytics/          # History parsing and rendering feature
│   │   │   ├── components/
│   │   │   │   ├── ProgressChart.jsx# Rich data layouts using Recharts maps
│   │   │   │   └── StreakCalendar.jsx# Grid tracker evaluating month-over-month habits
│   │   │   └── index.js        # Public API entry point: Exports <StatsDashboard />
│   │   │
│   │   └── auth/               # Cloud Account Management Feature
│   │       ├── components/
│   │       │   ├── LoginForm.jsx   # Interactive custom signing panels
│   │       │   └── UserProfile.jsx # Current session overview blocks
│   │       ├── hooks/          # Firebase authentication layer state abstractions
│   │       │   └── useAuthSession.js
│   │       └── index.js        # Public API entry point: Exports <AuthGuard />
│   │
│   ├── context/                # Global Cross-Cutting Application Concerns
│   │   └── GlobalAppContext.jsx # Orchestrates theme sets or synchronized shared properties
│   ├── hooks/                  # Global Shared Utility Hooks
│   │   └── useLocalStorage.js  # Client-safe hook avoiding Next.js SSR hydration errors
│   ├── lib/                    # Third-Party Instantiations
│   │   └── firebase.js         # Core structural initializing variables for Firebase
│   └── utils/                  # Pure Mathematical/Text Constants
│       ├── cn.js               # Integrates clsx & tailwind-merge without compilation conflicts
│       └── constants.js        # Immutable lists (Mantra titles, baseline track dimensions)
```

---

## 🔮 Future Plans

In **Radha Japa Counter**, we are actively working on adding even more features:

- **🔥 Streaks (Strikes)** — Track consecutive daily chanting habits.
- **🏆 Leaderboard** — Global community tracking for motivation.
- **💎 Premium Plan** — Exclusive customization features and themes.
- **🏅 Awards** — Celebrating monthly and yearly milestones.
- **🔐 Social Login** — Effortless log-in via third-party providers.
- **⚙️ Admin Panel** — Dedicated dashboard for content and system management.
- **📅 Daily Goals** — Goal-oriented progress tracking to stay consistent.
- **📤 Export Data** — Save chanting history as CSV or PDF formats.
- **🔔 Reminder Notifications** — Subtle push notifications to help keep up with daily goals.
