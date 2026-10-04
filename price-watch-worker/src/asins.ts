// Tracked products. Seeded from our own review posts (buyLink targets).
// Keep under 10 per batch; the poller chunks automatically beyond that.
export interface TrackedProduct {
  asin: string;
  slug: string;
  name: string;
  category: string;
  reviewSlug?: string;
}

export const PRODUCTS: TrackedProduct[] = [
  { asin: 'B0D8JVY9CD', slug: 'babyzen-yoyo3', name: 'Babyzen YOYO3 Stroller', category: 'strollers', reviewSlug: 'review-yoyo-stroller' },
  { asin: 'B08FF4GV5C', slug: 'infant-optics-dxr-8-pro', name: 'Infant Optics DXR-8 PRO Monitor', category: 'monitors', reviewSlug: 'review-infant-optics' },
  { asin: 'B0DCKC6V7K', slug: 'yoto-starter-bundle', name: 'Yoto Starter Bundle', category: 'toys', reviewSlug: 'review-yoto-mini' },
  { asin: 'B0CLWWPDML', slug: 'jeep-wrangler-stroller-wagon', name: 'Jeep Deluxe Wrangler Stroller Wagon', category: 'wagons', reviewSlug: 'review-jeep-wagon' },
  { asin: 'B00KN0LSUI', slug: 'radio-flyer-classic-walker', name: 'Radio Flyer Classic Walker Wagon', category: 'walkers', reviewSlug: 'review-radio-flyer-walker' },
  { asin: 'B0FFHNF9M6', slug: 'uppababy-mesa', name: 'UPPAbaby Mesa Infant Car Seat', category: 'car-seats', reviewSlug: 'review-uppababy-mesa' },
  { asin: 'B0FHM3LGY7', slug: 'uppababy-cruz', name: 'UPPAbaby Cruz Stroller', category: 'strollers', reviewSlug: 'review-uppababy-cruz' },
];
