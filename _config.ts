import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import pagefind from "lume/plugins/pagefind.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import esbuild from "lume/plugins/esbuild.ts";
import basePath from "lume/plugins/base_path.ts";

const site = lume();

site
  .use(jsx())
  .use(mdx())
  .use(pagefind({
    binary: {
      extended: true, // Set true for Chinese and Japanese support.
    },
  }))
  .use(codeHighlight())
  .copy("styles.css")
  .use(esbuild())
  .use(basePath());

export default site;
