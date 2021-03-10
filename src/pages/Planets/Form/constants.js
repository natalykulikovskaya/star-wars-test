export const INPUTS = [
  { name: 'name', label: 'Name' },
  { name: 'rotation_period', label: 'Rotation period', type: 'number' },
  { name: 'orbital_period', label: 'Orbital period', type: 'number' },
  { name: 'diameter', label: 'Diameter', type: 'number' },
  { name: 'climate', label: 'Climate' },
  { name: 'gravity', label: 'Gravity' },
  { name: 'surface_water', label: 'Surface water', type: 'number' },
];

export const SELECT = {
  name: 'terrain',
  label: 'Terrain',
  variants: [
    {
      key: 'ocean',
      label: 'Ocean',
    },
    {
      key: 'desert',
      label: 'Desert',
    },
    {
      key: 'grasslands',
      label: 'Grasslands',
    },
    {
      key: 'mountains',
      label: 'Mountains',
    },
    {
      key: 'swamps',
      label: 'Swamps',
    },
    {
      key: 'valleys',
      label: 'Valleys',
    },
    {
      key: 'jungle',
      label: 'Jungle',
    },
    {
      key: 'forests',
      label: 'Forests',
    },
    {
      key: 'rainforests',
      label: 'Rainforests',
    },
    {
      key: 'tundra',
      label: 'Tundra',
    },
    {
      key: 'lakes',
      label: 'Lakes',
    },
  ],
};
