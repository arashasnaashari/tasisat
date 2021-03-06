import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="container overflow-x-hidden p-0 my-0 bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
