export async function load() {
  try {
    const [verenigingenRes, activiteitenRes] = await Promise.all([
      fetch('https://fdnd-agency.directus.app/items/leidensportzomer_verenigingen'),
      fetch('https://fdnd-agency.directus.app/items/leidensportzomer_activiteiten?limit=5')
    ]);

    if (!verenigingenRes.ok || !activiteitenRes.ok) throw new Error('Fout bij ophalen');

    const verenigingenData = await verenigingenRes.json();
    const activiteitenData = await activiteitenRes.json();

    return {
      verenigingen: verenigingenData.data,
      activiteiten: activiteitenData.data
    };
  } catch (err) {
    console.error(err);
    return {
      verenigingen: [],
      activiteiten: []
    };
  }
}





