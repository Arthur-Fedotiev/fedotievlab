import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>
        I'm Arthur <span class="lightning">⚡️</span>
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Fetotiev Lab",
  meta: [
    {
      name: "description",
      content: "Fedotiev Lab description",
    },
  ],
};
