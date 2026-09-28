# Gamondeth Phrombutr Portfolio

Angular portfolio for <https://nutthgith.github.io>.

## Local development

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Production build

```bash
npm run build -- --configuration production --base-href /
```

The output is written to `dist/gamondeth-portfolio/browser`.

## Deploy with GitHub Pages

1. Upload this project to the `nutTHGitH.github.io` repository.
2. In GitHub, open **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` branch.
5. Open the **Actions** tab and wait for the deployment workflow to complete.

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes the site after every push to `main`.

## Add projects in the future

Portfolio content is data-driven. The showcase records are in `src/app/app.ts` inside the `showcases` array.

### Add a project to an existing showcase

1. Find the relevant showcase object by its `id`.
2. Update `delivered`, `impact`, `projects`, and `technologies` as needed.
3. Place new public-safe images in `public/assets/showcases` and reference them through `architecture` or `screens`.

### Add a new showcase

1. Copy one complete object in the `showcases` array.
2. Give it a unique `id` and the next `number`.
3. Replace its title, summary, role, scope, technologies, outcomes, and image paths.
4. Run `npm start` to review it locally.
5. Commit and push to `main`; GitHub Actions redeploys the website automatically.

No HTML redesign is required for either approach. The page template renders every object in the array and automatically adapts the layout.

## Public-content note

The portfolio generalizes employer, client, and internal system names. Review all new screenshots and text before publishing. Do not commit credentials, internal URLs, customer data, or confidential implementation details.
