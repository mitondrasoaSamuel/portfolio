# Portfolio — Samuel Frédéric

Portfolio personnel full-stack : présentation, projets, parcours et formulaire de contact.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Motion (Framer Motion) + Lenis
- i18next (FR / EN / ES)
- EmailJS (formulaire de contact)

## Prérequis

- Node.js 20+ (recommandé)
- Compte [EmailJS](https://www.emailjs.com/) pour le formulaire de contact

## Installation

```bash
npm install
```

## Configuration

1. Copiez le fichier d’exemple :

```bash
cp .env.example .env
```

2. Renseignez les variables dans `.env` (valeurs depuis le dashboard EmailJS) :

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | ID du service EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | ID du template |
| `VITE_EMAILJS_PUBLIC_KEY` | Clé publique (Account → API Keys) |

> Ne committez jamais le fichier `.env`. Seul `.env.example` (sans secrets) est versionné.

## Lancer en local

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Scripts utiles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement (port 3000) |
| `npm run build` | Build de production (`dist/`) |
| `npm run preview` | Prévisualiser le build localement |
| `npm run lint` | Vérification TypeScript |

## Déploiement (Vercel)

1. Connectez le dépôt à Vercel.
2. Ajoutez les mêmes variables `VITE_EMAILJS_*` dans **Settings → Environment Variables**.
3. Redéployez après toute modification des variables (elles sont injectées au build).
4. Dans EmailJS → **Account → Security → Allowed Origins**, ajoutez l’URL du site (ex. `https://votre-projet.vercel.app`).

Build : `npm run build` · Output : `dist`

## Structure (aperçu)

```txt
src/
├── components/   # layout, sections, ui
├── data/         # profile, projects, experiences
├── hooks/        # useTypewriter, etc.
└── i18n/         # traductions projets / expérience
```

Plus de détails : voir `ARCHITECTURE.md`.

## Licence

Projet personnel — tous droits réservés.
