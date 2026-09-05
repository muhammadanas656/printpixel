# PrintPixel

A client-side Astro + Tailwind prototype for image DPI analysis and print-size planning.

## Run
npm install
npm run dev

## Notes
- Image dimensions are read locally in the browser.
- Print calculations are performed client-side.
- This prototype intentionally keeps engineering/SEO details out of the primary UI.
- DPI metadata detection is represented conservatively in this first prototype; a production build should add a dedicated EXIF/JFIF parser and HEIC handling.
