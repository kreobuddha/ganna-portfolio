# CV

`cv.html` is the source. The PDF beside it is built from it, and is the file
that gets sent out — `Hanna_Shyliaieva_Senior_UX_UI_Designer.pdf`, spelled
exactly that way, because the name is the first thing a recruiter sees.

```bash
npm run cv
```

which is Chrome in headless mode:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --no-pdf-header-footer --print-to-pdf="cv/Hanna_Shyliaieva_Senior_UX_UI_Designer.pdf" \
  "file://$PWD/cv/cv.html"
```

Chrome is what builds it because it is the only renderer here that turns
`<a href>` into a real PDF link annotation. Run it from the repository root:
the page loads Satoshi from `../public/fonts`, the same four faces the site
uses, so the two stay in step.

## What the page is holding to

- **Two A4 pages.** Check the count after every edit; three pages is a
  different document.
- **Copy-out order.** The text has to come out of the PDF in the order it is
  read — applicant-tracking systems parse it, not the layout. Chrome writes
  the PDF's text in *paint* order, so an absolutely positioned bullet or badge
  moves every line of its list to the end of the page. Bullets here are
  in-flow `::before` boxes for that reason. Select all in a PDF viewer and
  paste it somewhere before sending.
- **No fill behind text, no light grey below 10pt, no columns.** Same reason.
- **No photograph and no date of birth**, anywhere.
- **Dates match `src/data/about.ts`.** They are the same employment history;
  if one moves, move the other.
