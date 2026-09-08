# Vision World — private hotel marketing MVP

Arabic-first, bilingual B2B hotel marketing prototype. Built with vanilla HTML, CSS and JavaScript; no build step or application dependencies. Run `npm run dev` locally, or `npm run dev -- --port 4173` for preview.

## Included

- Six fictional Makkah hotel scenarios with illustrative rates, distances and star categories.
- Search in Arabic and English, neighborhood/category/budget/amenity filters, sorting, favorites and hotel detail dialogs.
- Validated inquiry forms, browser-local draft persistence, review status and confirmed deletion.
- Pricing workspace: manually entered buying rate, resale rate, room/night quantities, gross profit, margin and markup; customer quote preview and clipboard copy omit procurement data.
- Self-hosted Arabic fonts and image assets, RTL/LTR layouts, mobile styles and accessible native dialogs.

## Privacy and scope

The deployment must remain owner-only in Sites. All screens, including the workspace, rely on this site-wide access gate. The workspace is not a separate authentication system or role-based admin implementation. No real procurement rates are included in the source or stored at runtime. Buying rates are entered manually in memory and cleared when leaving the workspace, switching to drafts, changing hotels or reloading. Only language, favorites and inquiry drafts use localStorage. Drafts are specific to the browser and device, and are not a shared CRM.

There is no network submission, email, analytics, hotel booking, payment flow or third-party form destination. Clipboard actions copy only the customer-facing quote and require an explicit click. All rates exclude taxes, fees and operating expenses; no live hotel inventory or commercial claim is represented. Replacing demo content with verified inventory and implementing server-side authorization and a database is required before any future customer-facing deployment.

## Verification

`node qa.cjs` uses Playwright (available in the authoring runtime) and fulfills local assets inside an isolated browser context, so no HTTP server or external requests are required. It validates filters, favorites, dialogs, date/capacity validation, local draft flow, calculations, quote privacy, languages, desktop/mobile layout and absence of outbound POST requests. Test contacts are synthetic `example.test` addresses and are cleared at the end.

## Image credits

Makkah hero: https://www.expedia.com/Things-To-Do-In-Makkah.d178043.Travel-Guide-Activities

Illustrative interiors: Unsplash images `photo-1611892440504-42a792e24d32`, `photo-1590490360182-c33d57733427`, `photo-1566665797739-1674de7a421a`, `photo-1618773928121-c32242e63f39`, `photo-1631049307264-da0ec9d70304`, `photo-1582719478250-c89cae4dc85b`. These photographs do not depict the fictional sample hotels. IBM Plex Sans Arabic is served locally from the Google Fonts distribution.
