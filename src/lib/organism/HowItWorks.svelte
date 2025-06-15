<section>
  <h2>Doe jij deze zomer mee?</h2>
  <div>
    <p>
      Kinderen van 6 tot 12 jaar uit de regio Leiden kunnen gratis meedoen aan
      allerlei leuke sportactiviteiten. Heb je zin om mee te doen? Kom gezellig
      sporten en neem vooral je vrienden mee!
    </p>
    <a href="/activiteiten">Bekijk activiteiten</a>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5em 2em;
  }
  div {
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    background-color: var(--primary-color-2);
    color: var(--white);
    border-radius: 15px;
    @media (min-width: 40rem) {
      width: 70%;
      margin: 4em;
    }
  }

  p {
    font-family: var(--regular-font);
    padding: 1em;
  }

  a {
    align-self: center;
    text-decoration: none;
    background-color: var(--white);
    color: var(--primary-color-2);
    font-family: var(--button-font);
    border-radius: 10px;
    padding: 0.55em 1.1em;
  }

  h2 {
    padding-bottom: 0.7em;
  }
</style>
