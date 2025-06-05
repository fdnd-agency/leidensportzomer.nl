<nav>
  <p class="stacked">
    <span>leiden</span>
    <span>sport</span>
    <span>zomer</span>
  </p>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/activiteiten">Activiteiten</a></li>
    <li><a href="/verenigingen">Verenigingen</a></li>
    <!-- <li><a href="/over">Over Ons</a></li> -->
  </ul>
</nav>

<style>
  nav {
    /* width: 80%; */
    display: flex;
    justify-content: center;
  }

  .stacked span {
    display: block;
    text-transform: uppercase;
    font-weight: bolder;
    color: red;
  }
  ul {
    display: flex;
    justify-content: space-around;
    background-color: black;
    margin-left: 2em;
    width: 75%;
    padding: 1em;
    border-radius: 15px;
  }

  li {
    list-style: none;
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
</style>
