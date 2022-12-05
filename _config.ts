import lume from "lume/mod.ts";
import mdx from "lume/plugins/mdx.ts";

const site = lume();

site.use(mdx());

export default site;
