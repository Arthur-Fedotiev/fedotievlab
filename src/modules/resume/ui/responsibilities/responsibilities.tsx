import { component$, useStylesScoped$ } from "@builder.io/qwik";
import responsibilitiesStyles from "./responsibilities.styles.css?inline";
import { useAppearanceAnimation } from "../../../shared/animations/use-appearance.animation";

interface ResponsibilitiesProps {
  readonly data: string[];
}

export const Responsibilities = component$(
  ({ data }: ResponsibilitiesProps) => {
    useStylesScoped$(responsibilitiesStyles);
    const { addRef } = useAppearanceAnimation();

    return (
      <ul class="list-disc list-outside">
        {data.map((item) => (
          <li
            ref={addRef}
            class="ml-4 mt-2 animate-hidden-bottom"
            key={item}
            dangerouslySetInnerHTML={item}
          />
        ))}
      </ul>
    );
  }
);
