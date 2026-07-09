# Spelling Practice

A simple mobile-friendly spelling practice app for kids. Supports **English** and **Mandarin (中文)** words, with text-to-speech.

Everything lives in a single file: **`index.html`**. No build step, no internet needed once opened.

## How it works

- **Practice page** (default): a grid of boxes, one per word. Each box has two buttons:
  - **🔊 Read** — reads the word aloud (English or Mandarin voice).
  - **👁️ Reveal** — shows the word so your child can check the spelling. Tap again to hide.
- **⚙️ Admin page** (top-right button): add spelling words, pick the language for each, preview or delete them.

Words are saved automatically in the browser (`localStorage`), so they stay after closing.

## Getting it on your son's phone

Pick whichever is easiest:

1. **Copy the file** – send `index.html` to the phone (AirDrop / email / cloud) and open it in the phone's browser.
2. **Add to Home Screen** – once open in the browser, use "Add to Home Screen" so it opens like an app.
3. **Preview from this computer** – run a tiny local server and open the shown address on the phone (same Wi-Fi):

   ```
   node _serve.js
   ```
   Then browse to `http://<this-computer-ip>:5599/` on the phone.

## Notes

- Mandarin reading needs a Chinese voice installed on the device. iOS and most Android phones include one; if not, add a Chinese language pack in the phone's settings.
- `_serve.js` is only a helper for previewing on the same network — it is not needed to use the app.
