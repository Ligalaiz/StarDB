const getImage = (target: string, id: string): string =>
  `https://starwars-visualguide.com/assets/img/${target}/${id}.jpg`;

export { getImage };
