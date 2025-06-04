export async function load() {
  const res = await fetch('https://fdnd-agency.directus.app/items/leidensportzomer_activiteiten');
  const data = await res.json();

  return {
    activiteiten: data.data
  };
}