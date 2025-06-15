<script>
  export let data;
  const { activiteiten } = data;

  import { Location } from "$lib/index.js";
</script>

{#each activiteiten as activiteit}
  <a href={`/activiteiten/${activiteit.slug}`} class="activiteit-link">
    <article>
      <img
        src="./assets/testfoto.png"
        alt="Voetballers"
        width="120"
        height="120"
      />
      <div class="article-text">
        <h3>{activiteit.titel}</h3>
        <p class="date">{activiteit.datum} {activiteit.tijd}</p>
        <div class="article-location">
          <Location />
          <p class="location">{activiteit.locatie}</p>
        </div>
      </div>
    </article>
  </a>
{/each}

<style>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: #eeeeee;
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin: 1em 1em;
    padding: 1em;
    width: 280px;
    @media (min-width: 27rem) {
      flex-direction: row;
      width: 500px;
    }
  }

  .article-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    @media (min-width: 27rem) {
      align-items: start;
      width: 500px;
    }
  }

  article img {
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .article-location {
    display: flex;
  }

  .location {
    /* padding-bottom: 0.5em; */
    padding-left: 0.5em;
  }

  .date {
    background-color: var(--primary-color-1);
    color: var(--white);
    font-family: var(--button-font);
    text-align: center;
    width: 70%;
    padding: 0.2em;
    border-radius: 6px;
  }

  .activiteit-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }
</style>
