import { component$ } from "@builder.io/qwik";

export const Heading = component$(({ text }: { text: string }) => {
  return <h1>{text}</h1>;
});
