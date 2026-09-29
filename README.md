# azure

An architectural editorial for luxury real estate in Dubai. Built with Next.js, React, TypeScript, and Tailwind CSS, with locally optimized architectural photography and a navy, cobalt, azure, and white palette.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To use another port: `npm run dev -- --port 3002`.

## Verify and build

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Experience

- Responsive split-screen hero with an architectural arch and layered photography.
- Floating, scroll-aware header; keyboard-accessible Explore menu and mobile navigation.
- Curated sample properties with location, type, price, and buy/rent/development filters.
- Property detail dialogs and a private-viewing preference form.
- Pinned desktop editorial introduction, restrained scroll reveals, and reduced-motion support.
- Signature residence, neighborhood discovery, service accordion, and client testimonial carousel.
- Gradient footer, newsletter-interest form, and back-to-top navigation.

## Demo data and forms

All listings, prices, testimonials, and office details are illustrative. Photos are architectural references and do not document the sample addresses. Social links lead to the respective platforms rather than verified agency accounts.

Viewing preferences and newsletter interest are saved only in the visitor's browser using local storage. No appointments are booked, messages sent, or newsletter subscriptions created. Connect these forms to your own backend before using them for real enquiries. No environment variables or database are required for this demo.

## Photography

Optimized WebP images are included in `public/azure`. Source photographs are from Unsplash:

- Villa: image ID `photo-1613977257363-707ba9348227`
- Interior: image ID `photo-1600210492486-724fe5c67fb0`
- Penthouse interior: image ID `photo-1600607687920-4e2a09cf159d`
- House: image ID `photo-1600596542815-ffad4c1539a9`
- Living space: image ID `photo-1600607687939-ce8a6c25118c`
- Residence: image ID `photo-1613490493576-7fde63acd811`
- Skyline: image ID `photo-1512453979798-5ea266f8880c`

The exact image URLs and optimization settings are in `scripts/prepare-azure-assets.mjs`. Run it with `node scripts/prepare-azure-assets.mjs` to regenerate the local assets. Cormorant Garamond and Manrope are loaded from Google Fonts with serif and sans-serif fallbacks.
