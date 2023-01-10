export const toggleClasses = (
  entry: IntersectionObserverEntry,
  classes: string[]
) =>
  entry.isIntersecting
    ? entry.target.classList.add(...classes)
    : entry.target.classList.remove(...classes);
