import { useInView$ } from "../ui/hooks/use-in-view";

export const SLIDE_IN_CLASS_NAME = "animate-slide-in";

export const toggleClasses = (
  entry: IntersectionObserverEntry,
  classes: string[]
) =>
  entry.isIntersecting
    ? entry.target.classList.add(...classes)
    : entry.target.classList.remove(...classes);

export const useAppearanceAnimation = (classes?: string[]) => {
  const refsStore = useInView$((entry: IntersectionObserverEntry) =>
    toggleClasses(entry, [SLIDE_IN_CLASS_NAME, ...(classes || [])])
  );

  return refsStore;
};
