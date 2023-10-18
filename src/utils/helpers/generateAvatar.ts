export const generateAvatar = (id: number) =>
  `https://robohash.org/${encodeURIComponent(id)}`;
