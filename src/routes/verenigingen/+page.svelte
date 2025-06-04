<script>
  export let data;
  const { verenigingen } = data;
</script>

<h1>Activiteiten</h1>

{#each verenigingen as vereniging}
  <article>
    <h3>{vereniging.naam}</h3>
    <p>{vereniging.adres}</p>
    <p>{vereniging.datum}</p>
    <p>{vereniging.tijd}</p>
  </article>
{/each}
