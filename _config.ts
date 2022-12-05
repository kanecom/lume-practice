import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import pagefind from "lume/plugins/pagefind.ts";

const site = lume();

site.use(jsx());
site.use(mdx());
site.use(pagefind({
    binary: {
      extended: true, // Set true for Chinese and Japanese support.
    },
  }));

export default site;
