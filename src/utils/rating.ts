export function crayons(rating: number): string {
  return '🖍️'.repeat(Math.floor(rating)) + (rating % 1 ? '✏️' : '');
}
