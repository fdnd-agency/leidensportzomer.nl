<script>
  export let data;

  const { verenigingen, activiteiten } = data;
</script>

<h1>Leiden sportzomer</h1>

<section>
  <h2>Aankomende activiteiten</h2>
  <div class="article-carousel">
    {#each activiteiten as activiteit}
      <article>
        <img
          src="./assets/testfoto.png"
          alt="Voetballers"
          width="120"
          height="120"
        />
        <h3>{activiteit.titel}</h3>
        <p class="date">{activiteit.datum} {activiteit.tijd}</p>
        <!-- <p>{activiteit.tijd}</p> -->
      </article>
    {/each}
  </div>
</section>

<style>
  section {
    margin-top: 1em;
  }

  h2 {
    padding-left: 1em;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    gap: 1rem;
    background-color: #eeeeee;
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin: 1em 1em;
    padding: 1em;
    width: 230px;
    height: 300px;
  }

  .article-carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-snap-align: center;
    scroll-behavior: smooth;
    width: 100vw;
    @media (min-width: 27rem) {
      justify-content: center;
    }
  }

  .date {
    background-color: var(--primary-color-3);
    color: var(--white);
    font-family: var(--button-font);
    text-align: center;
    width: 70%;
    padding: 0.2em;
    border-radius: 6px;
  }
</style>
