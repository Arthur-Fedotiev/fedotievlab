import { PropFunction, component$ } from "@builder.io/qwik";

interface ProgressProps {
  readonly label: string;
  readonly percent: number;
  readonly ref$?: PropFunction<(el: Element | null) => void | number>;
}

export const noop = async () => void 0;

export const Progress = component$(
  ({ percent, label, ref$ = noop }: ProgressProps) => {
    return (
      <>
        <span class="pl-2 text-charcoal-200">{label}</span>
        <div class="shadow w-full bg-transparent rounded overflow-hidden mb-2">
          <div class="w-full h-6 bg-white rounded-full">
            <div
              ref={ref$}
              class="h-6 bg-primary-500 rounded-full transition-[width] duration-1000 ease-in-out motion-reduce:transition-none"
              data-percent={percent}
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </div>
      </>
    );
  }
);
