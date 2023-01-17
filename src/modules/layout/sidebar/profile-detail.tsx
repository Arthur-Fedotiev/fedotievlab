import { component$, Slot } from "@builder.io/qwik";

export const ProfileDetailsItem = component$(
  ({ label, src }: { label: string; src: string }) => (
    <div class="flex pl-2 items-center gap-4 min-w-full text-sm">
      <img src={src} aria-hidden class="w-10 h-10"></img>

      <div class="contact-info">
        <p class="text-gray-400">{label}</p>

        <Slot />
      </div>
    </div>
  )
);
