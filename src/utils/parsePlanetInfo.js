const BASE_URL = 'http://swapi.dev/api/planets/';

export const parsePlanetInfo = (planetObject) => ({
  ...planetObject,
  residents: planetObject.residents.length,
  films: planetObject.films.length,
});

export const parsePlanetsData = (planets) => (
  planets.map((item) => {
    const { url } = item;
    const id = parseInt(url.replace(BASE_URL, ''), 10);
    return {
      ...item,
      residents: item.residents.length,
      films: item.films.length,
      id,
    };
  })
);
