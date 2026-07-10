### 2026-07-10
Formulaire contact basculé sur EmailJS côté client (`@emailjs/browser`) à la place de l'API Express/SMTP.

### 2026-07-10
Liens projets : `link`/`githubLink` à `#` masquent le CTA « Voir le projet » et les icônes associées via `isValidProjectLink()`.

### 2026-07-10
Cleanup maintenabilité : `profile.ts`, `SocialLinks`, `ProjectCard`, `useTypewriter` ; suppression Fragments/imports morts et hardcodes contact.

### 2026-07-10
README réécrit (install, EmailJS, Vercel) sans secrets ; placeholders dans `.env.example` et ARCHITECTURE.

### 2026-07-09
Refonte de la section Projets : cartes avec image, badge catégorie, titre en overlay, tags et footer — aligné sur la maquette fournie.

### 2026-07-09
Badge catégorie des cartes projets passé en vert emerald (fond léger + bordure) pour cohérence avec le thème du portfolio.

### 2026-07-09
Meilleure lisibilité des badges et titres sur images claires : fond sombre opaque, dégradés renforcés et ombres portées.

### 2026-07-09
Traductions FR/EN/ES des projets (headline, catégorie, description) via `src/i18n/projectItems.ts` et clés i18n `projects.items.*`.

### 2026-07-09
Traductions FR/EN/ES du parcours professionnel via `src/i18n/experienceItems.ts` et clés i18n `experience.items.*`.

### 2026-07-09
Formulaire contact dynamique : API Express + Nodemailer (SMTP Gmail), validation Zod, proxy Vite en dev.

### 2026-07-09
Ajout du favicon navigateur (`public/favicon.png`) à partir de `src/assets/images/logo_white.png`.

### 2026-07-09
Favicon mis à jour avec `src/assets/images/logo-sam.png` (fond noir, meilleur rendu dans l'onglet).

### 2026-07-09
ContactSection mobile : titre, email et formulaire sans débordement horizontal.

### 2026-07-09
SMTP basculé sur linkofserenity@gmail.com ; pool Nodemailer, retry et vérification au démarrage pour fiabiliser l'envoi contact.
