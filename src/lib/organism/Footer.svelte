<footer>
  <img
    src="./assets/Leidensportzomer.png"
    alt="Logo"
    width="250"
    height="200"
  />
  <ul>
    <li class="title">Algemeen</li>
    <li><a href="/">Home</a></li>
    <li><a href="/activiteiten">Activiteiten</a></li>
    <li><a href="/verenigingen">Verenigingen</a></li>
  </ul>
  <ul>
    <li class="title">Sportverenigingen</li>
    <li>KZ Danaïden</li>
    <li>ZVL-1886</li>
    <li>Jotaprosports</li>
  </ul>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    background-color: var(--primary-color-1);
    color: var(--white);
    @media (min-width: 40rem) {
      flex-direction: row;
      justify-content: space-evenly;
      height: 30vh;
    }
  }

  ul {
    padding-top: 1em;
    align-content: center;
  }

  li {
    list-style: none;
    line-height: 1.4;
    font-family: var(--regular-font);
    font-size: 16px;
  }

  a {
    color: var(--white);
  }

  .title {
    font-weight: bold;
    padding-bottom: 0.3em;
  }
</style>
