import { useInView } from "../ui/use-in-view";
import { $ } from "@builder.io/qwik";

export const SLIDE_IN_CLASS_NAME = "animate-slide-in";

export const handleIntersection = (classes: string[] = []) =>
  $((entry: IntersectionObserverEntry) => {
    entry.isIntersecting
      ? entry.target.classList.add(SLIDE_IN_CLASS_NAME, ...classes)
      : entry.target.classList.remove(SLIDE_IN_CLASS_NAME, ...classes);
  });

export const useAppearanceAnimation = (classes?: string[]) => {
  const { addRef, addRef$ } = useInView(handleIntersection(classes));

  return {
    addRef,
    addRef$,
  };
};
