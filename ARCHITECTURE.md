# Architecture — Portfolio Sam

## Stack

- **Frontend:** React + TypeScript + Vite
- **Contact email:** EmailJS (client-side, Gmail service)
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **i18n:** i18next + react-i18next (FR / EN / ES)

## Structure

```txt
server/               # Optional: Express static hosting in production
├── index.ts
├── contact.dto.ts    # Legacy SMTP route (unused by contact form)
└── mail.service.ts
src/
├── components/
│   ├── layout/       # Navbar, Footer, backgrounds, smooth scroll
│   ├── sections/     # Page sections + ProjectCard
│   └── ui/           # TiltCard, SocialLinks
├── data/
│   ├── profile.ts    # Name, email, phone, social URLs (single source)
│   ├── projects.ts   # Project catalog + isValidProjectLink()
│   └── experiences.ts
├── hooks/
│   └── useTypewriter.ts
├── i18n.ts
├── App.tsx
└── main.tsx
```

## Data flow

- **Profile:** `src/data/profile.ts` — contact info + social links used by Hero, Contact, Footer via `SocialLinks`.
- **Projects:** Static data in `src/data/projects.ts` (id, title, image, tech, links). Translatable copy in `src/i18n/projectItems.ts` merged into `src/i18n.ts`. Cards rendered by `ProjectCard`.
- **i18n:** UI strings in `src/i18n.ts`.
- **Contact:** `ContactSection` sends `{ name, email, message }` via `@emailjs/browser`. Config in `.env` as `VITE_EMAILJS_*` (see `.env.example`).

## Contact form (EmailJS)

- **SDK:** `@emailjs/browser` — called directly from the browser (no backend required for sending)
- **Env:** `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` in `.env`
- **Template variables:** `name`, `email`, `message` (must match EmailJS dashboard template)
- **Recipient:** configured in the EmailJS template (not in source)
- **Prod:** add deployed domain to EmailJS **Account → Security → Allowed Origins**
- **Dev:** `npm run dev` only (no API server needed for contact)

## Projects section

Each project card includes:

- Header image with category badge (emerald)
- Client name + headline overlaid on image
- Description, tech tags, optional footer with GitHub/Globe icons and CTA link
- **Links:** set `link` or `githubLink` to `"#"` (or omit) to hide that control; `isValidProjectLink()` in `projects.ts` drives visibility
- **Pagination:** `ProjectsSection` owns paging; `ProjectCard` owns card UI

## Conventions

- Dark theme (`#050505` background, glass-card components)
- Display font: Space Grotesk; body: Inter
- Accent colors: emerald (global + projects cards)
- **Performance:** contact form card uses opaque background (no `backdrop-blur` inside tilt); `TiltCard lightweight` + rAF-throttled mouse handlers
- Profile/contact/social data lives in `data/profile.ts` — do not hardcode in sections
