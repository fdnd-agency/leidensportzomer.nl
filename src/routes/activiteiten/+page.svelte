<script>
  export let data;
  const { activiteiten } = data;
</script>

<h1>Activiteiten</h1>

{#each activiteiten as activiteit}
  <article>
    <h3>{activiteit.titel}</h3>
    <p>{activiteit.locatie}</p>
    <p>{activiteit.datum}</p>
    <p>{activiteit.tijd}</p>
  </article>
{/each}
