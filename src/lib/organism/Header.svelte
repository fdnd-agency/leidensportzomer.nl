<script>
  let menuToggle;

  function closeMenu() {
    if (menuToggle) menuToggle.checked = false;
  }
</script>

<nav class="navbar">
  <p class="stacked">
    <span>leiden</span>
    <span>sport</span>
    <span>zomer</span>
  </p>

  <input type="checkbox" id="menu-toggle" class="menu-toggle" />
  <label for="menu-toggle" class="hamburger">☰</label>

  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/activiteiten">Activiteiten</a></li>
    <li><a href="/verenigingen">Verenigingen</a></li>
  </ul>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1em;
    flex-wrap: wrap;
  }

  .stacked span {
    display: block;
    text-transform: uppercase;
    font-weight: bolder;
    color: red;
  }

  .menu-toggle {
    display: none;
  }

  .hamburger {
    font-size: 2rem;
    cursor: pointer;
    margin: 1em 0;
    user-select: none;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    background: black;
    padding: 1em;
    border-radius: 15px;
    width: 100%;
    gap: 1rem;
    width: 100%;
  }

  .menu-toggle:checked + .hamburger + .nav-links {
    display: flex;
  }

  li {
    list-style: none;
  }

  li:hover a,
  li:active a {
    text-decoration: underline;
  }

  a {
    color: white;
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

    .nav-links {
      display: flex !important;
      flex-direction: row;
      justify-content: space-around;
      width: 75%;
      margin-left: 2em;
    }

    .menu-toggle {
      display: none;
    }
  }
</style>
