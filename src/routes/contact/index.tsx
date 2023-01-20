import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { ContactFeature } from "~/modules/contact/feature/contact";

export default component$(() => <ContactFeature />);

export const head: DocumentHead = {
  title: "Contact",
};
