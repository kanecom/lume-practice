import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import pagefind from "lume/plugins/pagefind.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import esbuild from "lume/plugins/esbuild.ts";

const site = lume();

site.use(jsx());
site.use(mdx());
site.use(pagefind({
  binary: {
    extended: true, // Set true for Chinese and Japanese support.
  },
}));
site.use(codeHighlight());
site.copy("styles.css");
site.use(esbuild());

export default site;
