import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { escapeSvelte, mdsvex } from "mdsvex";
import shiki from "shiki";

import remarkUnwrapImages from "remark-unwrap-images";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".md"],
  layout: {
    _: "./src/mdsvex.svelte",
  },
  highlight: {
    highlighter: async (code, lang = "text") => {
      const highlighter = await shiki.getHighlighter({
        theme: "poimandres",
      });
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
      return `{@html \`${html}\`}`;
    },
  },
  remarkPlugins: [remarkUnwrapImages, [remarkToc, {
    tight: true
  }]],
  rehypePlugins: [rehypeSlug],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
  // The mdsvex is a preprocessor that converts mdx into components and at the long run turns it to html
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
};

export default config;
