import { QRL, useClientEffect$, useSignal, $ } from "@builder.io/qwik";

export type IntersectionHandler = (entry: IntersectionObserverEntry) => void;

export const useInView = (
  handler: QRL<IntersectionHandler>,
  options?: IntersectionObserverInit
) => {
  const refs = useSignal<Element[]>([]);

  useClientEffect$(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => entries.forEach(handler),
      options
    );

    refs.value.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      refs.value.forEach((el) => {
        observer.unobserve(el);
      });

      observer.disconnect();
    };
  });

  return {
    addRef: (el: Element) => refs.value.push(el),
    addRef$: $((el: Element) => refs.value.push(el)),
  };
};
