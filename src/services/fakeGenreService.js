export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Family" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Friends" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Office" }
];

export function getGenres() {
  return genres.filter(g => g);
}
