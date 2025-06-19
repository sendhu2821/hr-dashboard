export function getRating(id: number): number {
  return (id % 5) + 1;
}
