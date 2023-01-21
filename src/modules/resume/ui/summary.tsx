import { component$ } from "@builder.io/qwik";
import { Avatar } from "./avatar";

interface SummaryProps {
  readonly summary: string;
}

export const Summary = component$(({ summary }: SummaryProps) => (
  <section class="py-5 border-b border-neutral-700 lg:flex items-center ">
    <div class={`md:hidden my-5`}>
      <Avatar />
    </div>
    <p
      class="text-justify  tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg"
      dangerouslySetInnerHTML={summary}
    />
  </section>
));
