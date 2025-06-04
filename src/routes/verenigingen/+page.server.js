export async function load() {
  const res = await fetch('https://fdnd-agency.directus.app/items/leidensportzomer_verenigingen');
  const data = await res.json();

  return {
    verenigingen: data.data
  };
}