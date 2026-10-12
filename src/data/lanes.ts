// Lane (pillar) definitions shared by the homepage strip and the /[lane]/ pages.
export interface Lane {
  slug: 'money' | 'reviews' | 'notes';
  chipClass: string;
  chipLabel: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  type: 'money' | 'review' | 'post';
  variant: 'money' | 'general';
  tools: boolean;
}

export const LANES: Lane[] = [
  {
    slug: 'money',
    chipClass: 'chip chip-money',
    chipLabel: 'Money Notes',
    title: 'Money Notes for Self-Employed Parents',
    metaTitle: 'Money Notes for Self-Employed Parents',
    description:
      'Solo business math, kid accounts, and the Trump Account wave - real numbers from five years of running the family books alongside two kids.',
    intro:
      'Money math for parents who work for themselves: retirement plans with real contribution logs, benefits decisions with actual prices, the new Trump Account, and the calculators that run the numbers. Every post uses our real figures, rounded to comfort.',
    type: 'money',
    variant: 'money',
    tools: true,
  },
  {
    slug: 'reviews',
    chipClass: 'chip chip-review',
    chipLabel: 'Gear Reviews',
    title: 'Baby Gear Reviews, Years Later',
    metaTitle: 'Baby Gear Reviews, Years Later',
    description:
      'Long-term teardowns of baby gear we actually own - bought ourselves, used through two kids, rated on the Pastello Scale.',
    intro:
      'Gear reviewed after years of ownership, not a weekend with a loaner. Everything here was bought with our own money and survived two kids - strollers, monitors, wagons, and the toys that earned their shelf space. Rated on the Pastello Scale.',
    type: 'review',
    variant: 'general',
    tools: false,
  },
  {
    slug: 'notes',
    chipClass: 'chip chip-note',
    chipLabel: 'Everyday Notes',
    title: 'Everyday Notes',
    metaTitle: 'Everyday Notes',
    description:
      'Essays and lists from the unglamorous middle of parenting - two kids, a bernedoodle, and the Bay Area.',
    intro:
      'The unglamorous middle of parenting: names, nurseries, registries, and the days between the milestones. No life advice, just notes from two kids, a bernedoodle, and the Bay Area.',
    type: 'post',
    variant: 'general',
    tools: false,
  },
];
