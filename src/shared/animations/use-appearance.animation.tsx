import { useSignal, useClientEffect$ } from "@builder.io/qwik";

export const SLIDE_IN_CLASS_NAME = "animate-slide-in";

export const handleIntersection =
  (classes: string[] = []) =>
  (entry: IntersectionObserverEntry) => {
    entry.isIntersecting
      ? entry.target.classList.add(SLIDE_IN_CLASS_NAME, ...classes)
      : entry.target.classList.remove(SLIDE_IN_CLASS_NAME, ...classes);
  };

export const useAppearanceAnimation = (classes?: string[]) => {
  const refs = useSignal<Element[]>([]);

  useClientEffect$(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) =>
        entries.forEach(handleIntersection(classes))
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
  };
};

export type IntersectionHandler = (entry: IntersectionObserverEntry) => void;
