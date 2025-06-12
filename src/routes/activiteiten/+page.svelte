<script>
  export let data;
  const { activiteiten } = data;
  import { Card } from "$lib/index.js";
</script>

<section>
  <h1>Activiteiten</h1>
  <Card {data} />
</section>

<style>
  h1 {
    font-size: 40px;
    padding: 0.7em;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
