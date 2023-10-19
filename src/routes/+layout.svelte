<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import PageTransition from "./transition.svelte";

  import "../app.css";
  import "open-props/style";
  import "open-props/normalize";
  import "open-props/buttons";

  export let data;
</script>

<div class="layout">
  <Navbar />
  <main>
    <PageTransition url={data.url}>
      <slot />
    </PageTransition> 
  </main>

  <Footer />
</div>

<style>
  .layout {
    height: 100%;
    max-inline-size: 1440px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    margin-inline: auto;
    padding-inline: var(--size-7);
  }

  @media (min-width: 1440px) {
    .layout {
      /* padding-inline: 0; */
    }
  }
</style>
