import { Slot, component$ } from "@builder.io/qwik";

export const SocialLink = component$(
  ({
    href,
    bgColor,
    label,
  }: {
    href: string;
    bgColor: string;
    label: string;
  }) => (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      class="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
      style={`background-color: ${bgColor};`}
    >
      <Slot></Slot>
    </a>
  )
);
