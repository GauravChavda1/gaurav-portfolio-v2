# Gaurav Chavda Portfolio

A single-page portfolio for Gaurav Chavda, a Flutter developer based in Ahmedabad. Includes an introduction, skills, projects, experience, achievements, résumé, and contact links.

## Stack

- Next.js 16.2.6 with the App Router
- React 19.2.4 and TypeScript 5
- Tailwind CSS 4
- Framer Motion for entrance animations
- Lucide and React Icons
- DM Sans and Syne, loaded through `next/font/google`
- Next.js Image for project logos

## Run locally

Use Node.js 20.9 or newer and npm. Run these commands from the project root:

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Stop the server with Ctrl+C.

Dependency installation requires internet access. The font loader also downloads font files during development or builds when they are not cached; deployed pages serve the fonts from the site itself.

The current application does not require custom environment variables, a database, or API credentials. Contact actions open email, LinkedIn, WhatsApp, and GitHub links; there is no form submission backend.

## Commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the versions recorded in the lockfile |
| `npm run dev` | Start the development server |
| `npm run lint` | Check source code with ESLint |
| `npx --no-install tsc --noEmit --incremental false` | Check TypeScript without generating output |
| `npm run build` | Create a production build |
| `npm start` | Serve an existing production build |

## Project structure

```text
app/
  page.tsx             Page sections and Person structured data
  layout.tsx           Font loading and SEO/social metadata
  globals.css          Theme, shared styles, reduced-motion rules
  robots.ts            Robots response
  sitemap.ts           Sitemap response
  components/
    Navbar.tsx         Desktop navigation and mobile dialog
    Hero.tsx           Introduction, social links, résumé link
    About.tsx          Biography and education
    Skills.tsx         Skill groups
    Projects.tsx       Project content and store links
    Experience.tsx     Employment timeline
    Achievements.tsx   Awards and achievements
    Contact.tsx        Contact details and availability
    Footer.tsx         Footer and social links
    GithubIcon.tsx     Shared icon
    LinkedInIcon.tsx   Shared icon
public/
  images/              Project logos
  gaurav_chavda_resume.pdf
  preview.png          Social sharing image
next.config.ts         Next.js configuration
package-lock.json      Locked dependency versions
```

## Update content

- Edit each section in its matching component. Project and skill information is stored in arrays within the components.
- Replace `public/gaurav_chavda_resume.pdf` to update the résumé. If renaming it, update the link in `Hero.tsx` too.
- Add project logos under `public/images/` and update the corresponding `logo` path in `Projects.tsx`. Logos display in 48 × 48 pixel frames.
- Keep contact and social details consistent in `Hero.tsx`, `Contact.tsx`, `Footer.tsx`, and the Person structured data in `page.tsx`.
- If changing the domain, update URLs in `layout.tsx`, `page.tsx`, `robots.ts`, and `sitemap.ts`.
- Replace `public/preview.png` to change the social sharing image, and keep the declared dimensions in `layout.tsx` consistent with the asset.

## Accessibility behavior

The mobile navigation uses a native dialog with labelled controls, Escape-to-close, keyboard focus containment, and background scroll locking. Project icon links remain visible on touch devices and appear on keyboard focus.

The `prefers-reduced-motion` rules in `globals.css` disable decorative CSS animations, transitions, hover scaling, and smooth scrolling. Elements marked `data-motion-reveal` remain visible without entrance movement. Apply this attribute to any new animated entrance elements.

## Production deployment

The current configuration uses a Next.js server, including its image optimization service. On a Node.js host, install dependencies, build, and start the application:

```sh
npm ci
npm run build
npm start
```

The server listens on port 3000 by default. To use another port:

```sh
npm start -- --port 3001
```

Configure the host to keep the process running and provide HTTPS and your domain. For a managed Next.js host, select the Next.js framework and use `npm run build` as the build command.

This project is not configured for a static export. Copying the project into a static-only host will not provide the current Next.js image optimization service.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/getting-started/deploying) for hosting details.

## Before publishing

Run lint, the TypeScript check, and a production build. Preview the result with `npm start`, then check mobile layouts, keyboard navigation, reduced-motion behavior, résumé access, and external links. A successful code check does not replace these browser checks.
