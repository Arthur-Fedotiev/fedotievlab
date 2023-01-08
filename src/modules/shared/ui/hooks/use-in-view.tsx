import {
  QRL,
  useClientEffect$,
  useSignal,
  $,
  implicit$FirstArg,
} from "@builder.io/qwik";

export type IntersectionHandler = (entry: IntersectionObserverEntry) => void;
export interface UseInViewResult {
  addRef: (el: Element) => number;
  addRef$: QRL<(el: Element) => number>;
}

export const useInViewQrl = (
  handler$: QRL<IntersectionHandler>,
  options?: IntersectionObserverInit
): UseInViewResult => {
  const refs = useSignal<Element[]>([]);

  useClientEffect$(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => entries.forEach(handler$),
      options
    );

    refs.value.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  return {
    addRef: (el: Element) => refs.value.push(el),
    addRef$: $((el: Element) => refs.value.push(el)),
  };
};

export const useInView$ = implicit$FirstArg(useInViewQrl);
