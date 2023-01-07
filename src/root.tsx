import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./modules/core/router-head/router-head";

import globalStyles from "./global.css?inline";
import appearanceStyles from "~/modules/shared/animations/use-appearance.styles.css?inline";

export const styles = globalStyles + appearanceStyles;

export default component$(() => {
  useStyles$(styles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          href="/fonts/poppins.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        ></link>
        <link
          rel="preload"
          href="/fonts/titan-one.ttf"
          as="font"
          crossOrigin="anonymous"
          type="font/ttf"
        ></link>
        <RouterHead />
      </head>
      <body lang="en" class="text-white bg-zinc-900">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
