<script>
  import * as config from "$lib";
  import { formatDate } from "$lib/utils";
  export let data;
</script>

<!-- for seo -->
<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section>
  <ul>
    <li class="posts grid gap-8">
      {#each data.posts as post}
        <li class="post">
          <a href={post.slug} class="title">{post.title}</a>
          <p class="date">{formatDate(post.date)}</p>
          <p class="description">{post.description}</p>
        </li>
      {/each}
    </li>
  </ul>
</section>

<style>
  .post {
    max-inline-size: var(--size-content-3);
  }

  .post:not(:last-child) {
    border-bottom: 1px solid var(--border);
    padding-bottom: var(--size-7);
  }

  .title {
    font-size: var(--font-size-fluid-3);
    text-transform: capitalize;
  }

  .date {
    color: var(--text-2);
  }

  .description {
    margin-top: var(--size-3);
  }
</style>
