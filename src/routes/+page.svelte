<script>
  export let data;

  const { verenigingen, activiteiten } = data;
</script>

<h1>Leiden sportzomer</h1>

<h2>Verenigingen</h2>
<ul>
  {#each verenigingen as vereniging}
    <li>{vereniging.naam}</li>
  {/each}
</ul>

<h2>Activiteiten</h2>
<ul>
  {#each activiteiten as activiteit}
    <article>
      <h3>{activiteit.titel}</h3>
      <p>{activiteit.locatie}</p>
      <p>{activiteit.datum}</p>
      <p>{activiteit.tijd}</p>
    </article>
  {/each}
</ul>
