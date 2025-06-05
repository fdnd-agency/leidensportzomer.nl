<script>
  export let data;

  const { verenigingen, activiteiten } = data;
</script>

<h1>Leiden sportzomer</h1>

<h2>Activiteiten</h2>
{#each activiteiten as activiteit}
  <article>
    <h3>{activiteit.titel}</h3>
    <p>{activiteit.locatie}</p>
    <p>{activiteit.datum}</p>
    <p>{activiteit.tijd}</p>
  </article>
{/each}
