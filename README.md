# Your website — quick start

## What's in here
- `index.html` — the home page (logo + Art/Poetry buttons, scrolling down to About)
- `art.html` — the art gallery page
- `poetry.html` — the poetry/blog page
- `css/style.css` — all the styling (colors, fonts, layout) in one place
- `js/script.js` — the one small script (auto-updates the footer year)
- `images/` — put your real photos and art here

## Editing text
Open any `.html` file in a plain text editor (even Notepad/TextEdit works, but
VS Code — free — is much nicer). Find the text you want to change between the
tags, and type over it. You don't need to touch anything inside `< >` brackets.

## Adding your photo / logo / art images
1. Drop your image files into the `images/` folder (e.g. `portrait.jpg`,
   `art-01.jpg`).
2. In the HTML, find the placeholder comment right above what you want to
   replace — it tells you the exact line to swap in, e.g.:
   `<img class="portrait-inner" src="images/portrait.jpg" alt="Suz">`

## Adding more art tiles or poems
Each gallery tile in `art.html` and each poem in `poetry.html` is one
self-contained block. Copy an existing block, paste it below, and edit the
text/image inside your copy.

## Publishing it for free
1. Create a free account at github.com
2. Create a new repository, upload this whole folder to it
3. In the repo's Settings → Pages, turn on GitHub Pages
4. In your GoDaddy DNS settings, point your domain at GitHub Pages following
   GitHub's custom domain instructions (Settings → Pages → "Add a custom
   domain" — it'll show you the exact records to add)

Ask me anytime if you get stuck on any of these steps.
