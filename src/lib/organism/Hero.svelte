<section>
  <h1>Leiden sportzomer</h1>
  <img src="./assets/Mascotte.png" alt="Mascotte" width="150" height="150" />
  <p class="free">Gratis toegang!</p>
  <a href="/activiteiten">Naar agenda</a>
  <div class="entertainment-information">
    <div class="information">
      <p class="number">3</p>
      <p>Sporten</p>
    </div>
    <div class="information">
      <p class="number">15</p>
      <p>Activiteiten</p>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    height: 50vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #eeeeee;
    margin: 0.5em;
    padding: 1em;
    @media (min-width: 40rem) {
      height: 30vh;
      margin: 3em 3em;
    }
  }

  h1 {
    font-family: var(--title-font);
    text-transform: uppercase;
    font-size: 30px;
    @media (min-width: 40rem) {
      font-size: 50px;
    }
  }

  img {
    position: absolute;
    top: 6em;
    right: 0;
    align-self: flex-end;
    @media (min-width: 40rem) {
      top: unset;
      right: unset;
    }
  }

  p {
    font-family: var(--regular-font);
  }

  .free {
    background-color: var(--primary-color-1);
    color: var(--white);
    align-self: flex-start;
    flex-wrap: nowrap;
    padding: 0.2em 1.6em;
  }

  a {
    display: inline-block;
    align-self: flex-start;
    text-decoration: none;
    background-color: black;
    color: var(--white);
    font-family: var(--button-font);
    border-radius: 10px;
    padding: 0.55em 1.1em;
  }

  .entertainment-information {
    display: flex;
    gap: 1em;
    align-self: flex-end;
    @media (min-width: 40rem) {
      position: absolute;
      top: 12em;
    }
  }
  .information {
    background-color: var(--primary-color-2);
    color: var(--white);
    align-self: flex-end;
    padding: 1.5em;
  }

  .number {
    text-align: center;
    font-family: var(--button-font);
    font-size: 30px;
  }
</style>
