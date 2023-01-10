import { component$, useStylesScoped$, $ } from "@builder.io/qwik";
import responsibilitiesStyles from "./responsibilities.styles.css?inline";
import { useAppearanceAnimation } from "../../../shared/animations/use-appearance.animation";

interface ResponsibilitiesProps {
  readonly data: string[];
}

export const Responsibilities = component$(
  ({ data }: ResponsibilitiesProps) => {
    useStylesScoped$(responsibilitiesStyles);

    const refsStore = useAppearanceAnimation();
    const addRef = (idx: number) =>
      $((el: Element) => refsStore.refs.splice(idx, 1, el));

    return (
      <ul class="list-disc list-outside">
        {data.map((item, i) => (
          <li
            ref={addRef(i)}
            class="ml-4 mt-2 animate-hidden-bottom"
            key={item}
            dangerouslySetInnerHTML={item}
          />
        ))}
      </ul>
    );
  }
);
