import {
  QRL,
  useClientEffect$,
  implicit$FirstArg,
  useStore,
} from "@builder.io/qwik";
export type IntersectionHandler = (entry: IntersectionObserverEntry) => void;

export const useInViewQrl = (
  handler$: QRL<IntersectionHandler>,
  options?: IntersectionObserverInit
) => {
  const refsStore: { refs: (Element | null)[] } = useStore(() => ({
    refs: [],
  }));

  useClientEffect$(({ track }) => {
    track(() => refsStore.refs);

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => entries.forEach(handler$),
      options
    );

    refsStore.refs.forEach((el) => el && observer.observe(el));

    return () => {
      observer.disconnect();
    };
  });

  return refsStore;
};

export const useInView$ = implicit$FirstArg(useInViewQrl);
