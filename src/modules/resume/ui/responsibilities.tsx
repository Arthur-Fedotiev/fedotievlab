import { component$ } from "@builder.io/qwik";

interface ResponsibilitiesProps {
  readonly data: string[];
}

export const Responsibilities = component$(
  ({ data }: ResponsibilitiesProps) => (
    <ul class="list-disc list-outside">
      {data.map((item) => (
        <li class="ml-4 mt-2" key={item} dangerouslySetInnerHTML={item} />
      ))}
    </ul>
  )
);
