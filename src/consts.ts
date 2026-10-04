// Google Apps Script web app backing the Google Sheet "pastelloclub-emails".
// See scripts/email-capture.gs. Swap for a newsletter provider endpoint later.
export const NEWSLETTER_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbyPtIkcxFMVdACHPXh8VWSGHhaAkNvJgYQYn6nYSa1YoCocFJnMyrOe5vLLmDtdixaM/exec';

export const SITE = {
  title: 'pastelloclub',
  tagline: 'Gear that lasts, money math that checks out - notes for parents.',
  description:
    'Long-term gear teardowns, money math for self-employed parents, and Trump Account guides - from a Bay Area dad who left big tech to run a solo business and raise two kids.',
  url: 'https://pastelloclub.com',
  author: 'Jason',
  email: 'hi@pastelloclub.com',
} as const;

export const AUTHOR = {
  name: 'Jason',
  bio: 'Product manager for a decade - Google, Facebook, Twitter, Discord - now five years into running a solo consulting LLC and raising two kids in the Bay Area.',
  url: '/about/',
} as const;
