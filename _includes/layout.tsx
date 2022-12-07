import { ComponentChildren } from "preact/jsx-runtime";

type PageProps = {
  title: string,
  children: ComponentChildren
}

export default (props: PageProps) => (
  <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
      <title>{props.title}</title>
      <link rel="stylesheet" href="/styles.css"></link>
    </head>
    <body>
    <div id="search"></div>
      {props.children}
    </body>
  </html>
);
