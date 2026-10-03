// Google Apps Script web app backing the Google Sheet "pastelloclub-emails".
// See scripts/email-capture.gs. Swap for a newsletter provider endpoint later.
export const NEWSLETTER_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbyPtIkcxFMVdACHPXh8VWSGHhaAkNvJgYQYn6nYSa1YoCocFJnMyrOe5vLLmDtdixaM/exec';

export const SITE = {
  title: 'pastelloclub',
  tagline: 'Honest notes on gear, money, and the everyday - for parents, in soft colors.',
  description:
    'Honest gear teardowns, money notes for working parents, and quiet field notes on the everyday - from a family of two kids, one dog, and one small business.',
  url: 'https://pastelloclub.com',
  author: 'pastelloclub',
  email: 'hi@pastelloclub.com',
} as const;
