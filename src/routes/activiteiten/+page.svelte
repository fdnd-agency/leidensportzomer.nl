<script>
  export let data;
  const { activiteiten } = data;
  import { Card } from "$lib/index.js";
</script>

<h1>Activiteiten</h1>

<Card {data} />
