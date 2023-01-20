import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { ContactFeature } from "~/modules/contact/feature/contact";

export default component$(() => <ContactFeature />);

export const head: DocumentHead = {
  title: "Contact",
  meta: [
    {
      name: "description",
      content: "Contact me page",
    },
    {
      name: "keywords",
      content: "contact, me, page",
    },
  ],
};
export declare interface DocumentMeta {
  content?: string;
  httpEquiv?: string;
  name?: string;
  property?: string;
  key?: string;
  itemprop?: string;
}
