import { component$ } from "@builder.io/qwik";

interface ProgressProps {
  readonly label: string;
  readonly percent: number;
}

export const Progress = component$(({ percent, label }: ProgressProps) => (
  <>
    <span class="pl-2 text-charcoal-200">{label}</span>
    <div class="shadow w-full bg-transparent rounded overflow-hidden mb-2">
      <div class="w-full h-6 bg-white rounded-full">
        <div
          class="h-6 bg-primary-500 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  </>
));
