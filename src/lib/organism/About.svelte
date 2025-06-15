<section>
  <h2>Over Ons</h2>
  <div>
    <img
      src="./assets/Leidensportzomer.png"
      alt="Logo"
      width="250"
      height="250"
    />
    <p>
      Kinderen van 6 tot 12 jaar uit de regio Leiden kunnen gratis meedoen aan
      allerlei leuke sportactiviteiten. Heb je zin om mee te doen? Kom gezellig
      sporten en neem vooral je vrienden mee!
    </p>
  </div>
</section>

<style>
  section {
    padding-top: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div {
    width: 250px;
    /* max-width: 600px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    background-color: var(--primary-color-2);
    color: var(--white);
    border-radius: 15px;
    @media (min-width: 40rem) {
      flex-direction: row;
      width: 70%;
      margin: 4em;
    }
  }

  img {
    border-radius: 15px;
    @media (min-width: 40rem) {
      width: 700px;
    }
  }

  p {
    font-family: var(--regular-font);
    padding: 1em;
  }
</style>
