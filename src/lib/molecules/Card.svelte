<script>
  export let data;
  const { activiteiten } = data;

  import { Location } from "$lib/index.js";
</script>

{#each activiteiten as activiteit}
  <article>
    <img
      src="./assets/testfoto.png"
      alt="Voetballers"
      width="120"
      height="120"
    />
    <div class="article-text">
      <h3>{activiteit.titel}</h3>
      <p class="date">{activiteit.datum}</p>
      <p>{activiteit.tijd}</p>
      <Location />
      <p>{activiteit.locatie}</p>
    </div>
  </article>
{/each}

<style>
  article {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--accent-color-1);
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin: 1em 1em;
    padding: 1em;
    max-width: 500px;
  }

  .article-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;
  }

  article img {
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .date {
    background-color: var(--primary-color-1);
    color: var(--white);
    font-family: var(--button-font);
    /* font-size: 16px; */
    text-align: center;
    width: 70%;
    padding: 0.2em;
    border-radius: 6px;
  }
</style>
