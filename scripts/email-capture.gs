// pastelloclub email capture - Google Apps Script Web App
//
// Setup:
// 1. Create a Google Sheet (suggested name: pastelloclub-emails).
// 2. Rename the first tab to "Subscribers" and add headers: Timestamp | Email | Source.
// 3. Extensions > Apps Script, replace all code with this file, Save.
// 4. Deploy > New deployment > Web app
//      Execute as: Me
//      Who has access: Anyone
// 5. Authorize, copy the /exec URL, and set it as NEWSLETTER_ENDPOINT
//    in src/pages/tools/trump-account-calculator.astro
//
// Duplicate emails are skipped. Validation is a pragmatic regex, not a guarantee.

function doPost(e) {
  const out = (ok) =>
    ContentService.createTextOutput(JSON.stringify({ ok }))
      .setMimeType(ContentService.MimeType.JSON);

  try {
    const { email, source } = JSON.parse(e.postData.contents);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email || '')) return out(false);

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Subscribers');
    const seen = sheet.getRange('B:B').getValues().flat();
    if (!seen.includes(email.toLowerCase())) {
      sheet.appendRow([new Date(), email.toLowerCase(), source || '']);
    }
    return out(true);
  } catch (err) {
    return out(false);
  }
}
