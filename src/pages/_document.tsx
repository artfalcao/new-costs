import { Html, Head, Main, NextScript } from "next/document";
import { StoreProvider } from "../redux/StoreProvider";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <StoreProvider>
          <NextScript />
        </StoreProvider>
      </body>
    </Html>
  );
}
