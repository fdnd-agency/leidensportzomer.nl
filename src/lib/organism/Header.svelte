<script>
  let menuOpen = false;
</script>

<nav class="navbar">
  <p class="logo">
    <span>leiden</span>
    <span>sport</span>
    <span>zomer</span>
  </p>

  <input type="checkbox" id="menu-toggle" class="menu-toggle" hidden />
  <label for="menu-toggle" class="hamburger">☰</label>

  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/activiteiten">Activiteiten</a></li>
    <li><a href="/verenigingen">Verenigingen</a></li>
  </ul>
</nav>

<style>
  .logo span {
    font-family: var(--heading-font);
    display: block;
    text-transform: uppercase;
    font-weight: bolder;
    color: var(--primary-color-1);
    font-weight: 800;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.5em;
    flex-wrap: wrap;
    position: relative;
    margin: 1em;
  }

  .menu-toggle {
    display: none;
  }

  .hamburger {
    font-size: 2.5rem;
    cursor: pointer;
    margin: 0.5em 0;
    user-select: none;
  }

  ul {
    display: none;
    flex-direction: column;
    background: var(--primary-color-2);
    padding: 1em;
    border-radius: 15px;
    gap: 1rem;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .menu-toggle:checked + .hamburger + ul {
    display: flex;
  }

  li {
    list-style: none;
    border-bottom: 1px solid var(--white);
  }

  li:hover a,
  li:active a {
    text-decoration: underline;
  }

  a {
    color: var(--white);
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .navbar {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }

    .hamburger {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 75%;
      margin-left: 2em;
      position: unset;
    }
  }
</style>
