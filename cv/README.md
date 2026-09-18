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
  read — applicant-tracking systems parse it, not the layout. Two things here
  can break that, and both have:
  - Chrome writes the PDF's text in *paint* order, so an absolutely positioned
    bullet or badge moves every line of its list to the end of the page.
    Bullets are in-flow `::before` boxes for that reason.
  - The grey section labels sit in a column of their own, and an extractor
    groups neighbouring boxes: with the rows any closer than `5.4mm`, pdfminer
    reads "Education" and "Selected clients" as one block and puts both ahead
    of the content belonging to the first. Any more than about `6mm` and the
    page count goes to three. Check both when that gap moves.

  Two extractors disagree often enough to be worth running both — pypdf and
  pdfminer. The name is the case that bit: on a tight `line-height` pypdf read
  the two lines as `HannaShyliaieva`.
- **No fill behind text, and no light grey below 10pt.** Same reason. The
  label column is a column of layout, not of text: nothing flows from one side
  into the other, and each label is written before the content it names.
- **The look is Hanna's own**, lifted from the Pages version of this CV — the
  blue `#2F56C0`, the name set large over two lines, the grey labels, the rule
  down the side of the summary, the blue bands. Her label grey measured
  `#848484`; it is darker here, because this gets printed. The typeface is
  Satoshi rather than her Helvetica Neue, to match the site.
- **No photograph and no date of birth**, anywhere.
- **The site serves this file.** `npm run cv` copies the PDF into
  `public/documents/`, which is where the CV button on the site points; the
  copy is committed, because the deploy has no Chrome to rebuild it.
- **Dates match `src/data/about.ts`.** They are the same employment history;
  if one moves, move the other.
