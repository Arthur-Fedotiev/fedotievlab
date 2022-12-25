import { component$, Slot } from "@builder.io/qwik";

export const ProfileDetailsItem = component$(({ label }: { label: string }) => (
  <div class="flex items-center gap-4 min-w-full text-sm">
    <div class="w-8 h-8 shadow-md text-yellow-500 rounded-md">
      <Slot name="icon" />
    </div>

    <div class="contact-info">
      <p class="text-gray-400">{label}</p>

      <Slot />
    </div>
  </div>
));
