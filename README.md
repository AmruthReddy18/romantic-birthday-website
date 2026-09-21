# Birthday Love Experience

A personalized, interactive birthday surprise built with plain HTML, CSS, and JavaScript. It guides the recipient through a romantic eight-step experience with playful interactions, music, animations, a letter, and a memory gallery.

## Features

- Love meter with animated heart effects
- Interactive balloon popping
- Birthday cake with candle blowing through the microphone or candle tapping
- Memory matching game
- Interactive constellation of wishes
- Envelope reveal
- Floating lanterns with personalized reasons
- Typewriter-style birthday letter
- Hug button, restart button, and memories gallery
- Responsive design for desktop and mobile screens
- Reduced-motion support for users who prefer less animation

## Project Structure

```text
birthday-merged/
├── index.html
├── script.js
├── styles.css
├── images/
│   └── man.png
└── songs/
    ├── kammani-ee-premalekha-kanmani-anbodu-kaadhalanyeto-vellipoyindi-manasu-cover-son_KXBacnxe.mp3
    └── Until i Found You X Perfect ( New Mash Up )  Stephen Sanchez & Ed Sheeran.mp3
```

## Run Locally

This is a static website and does not require Node.js, npm, or a build process.

### Option 1: Open the file

Open `index.html` directly in a browser.

### Option 2: Use a local server

A local server is recommended because microphone access works more reliably from `localhost`:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

If Python is not installed, use any static file server or the Live Server extension in VS Code.

## Personalize It

Most of the content can be changed near the top of `script.js`:

- `LOVE_LETTER_TEXT`: the main birthday letter
- `LOVE_REASONS`: messages shown on the floating lanterns
- `BALLOON_MESSAGES`: messages revealed by each balloon
- `CANDLE_WISHES`: wishes revealed by the candles
- `NUMBER_OF_PHOTO_SLOTS`: number of gallery images

You can also edit the greeting, sign-off, headings, and button text directly in `index.html`.

### Add Gallery Photos

1. Add your photos to the `images/` folder.
2. Open `styles.css` and find the `.photo-slot` rules.
3. Replace the placeholder image URLs with your local image paths.
4. Set `NUMBER_OF_PHOTO_SLOTS` in `script.js` to match the number of photos.

### Change the Background Music

Update the `<source>` inside the `bgMusic` audio element in `index.html` to point to one of your audio files. Keep music files in `songs/` and make sure the filename matches exactly.

Only use music and images that you own or have permission to share. GitHub may reject very large files, so consider Git LFS or hosted media for large audio and image assets.

## Publish with GitHub Pages

1. Create a new repository on GitHub.
2. Upload or push the contents of this `birthday-merged` folder to the repository.
3. Open the repository's **Settings** tab.
4. Go to **Pages** under **Code and automation**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the branch containing `index.html` and the repository root as the folder.
7. Save the settings and wait for GitHub to publish the site.

Your site will be available at a URL similar to:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

## Browser Notes

- The microphone feature requires browser permission and generally works on `localhost` or an HTTPS GitHub Pages URL.
- If microphone access is unavailable or denied, the candles can still be extinguished by tapping them.
- Music playback may require the recipient to tap the music button because browsers restrict autoplay.

## License

This project is intended for personal use. Add your own license here if you plan to redistribute or reuse it publicly.
