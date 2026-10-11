// Single source of truth for annually-changing tax numbers used by the calculators.
// Update this file once per year after the IRS COLA announcement (usually November)
// and every calculator picks up the new limits. The visible "last updated" line
// on each calculator derives from TAX_LIMITS.updated.
// Add the annual check to the monthly stats-page refresh pass.

export const TAX_LIMITS = {
  effectiveYear: 2026,
  updated: 'October 2026',
  // 401(k)/solo 401(k) employee deferral
  deferral: 24_500,
  // catch-up at 50+ (also 64+)
  catchup50: 8_000,
  // enhanced catch-up for ages 60-63
  catchup60to63: 11_250,
  // total defined-contribution cap (415(c)); SEP max is also this
  total415c: 72_000,
  // Social Security wage base (self-employment tax applies 12.4% under this)
  ssWageBase: 184_500,
  medicareRate: 0.029,
  seFactor: 0.9235,
};

export const TAX_SOURCES = [
  {
    name: 'IRS cost-of-living adjustments for benefits and contributions',
    url: 'https://www.irs.gov/newsroom/cola-increases-for-dollar-limitations-on-benefits-and-contributions',
  },
  {
    name: 'Social Security 2026 COLA fact sheet (wage base $184,500)',
    url: 'https://www.ssa.gov/news/press/factsheets/colafacts2026.pdf',
  },
];
