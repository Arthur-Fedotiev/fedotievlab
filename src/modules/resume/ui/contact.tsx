import { component$ } from "@builder.io/qwik";

interface ContactProps {
  readonly field: keyof typeof FIELD_MAP;
  readonly value: string;
}

export const FIELD_MAP = {
  email: {
    icon: "/icons/mail.png",
    title: "email",
    href: (value: string) => `mailto:${value}`,
    label: (value: string) => value,
  },
  phone: {
    icon: "/icons/call.png",
    title: "phone",
    href: (value: string) => `tel:${value}`,
    label: (value: string) => value,
  },
  website: {
    icon: "/icons/website.png",
    title: "website",
    href: (value: string) => value,
    label: () => "Personal Website",
  },
  location: {
    icon: "/icons/location.png",
    title: "location",
    href: (value: string) => value,
    label: (value: string) => value,
  },
} as const;

export const Contact = component$(({ field, value }: ContactProps) => (
  <span class="flex my-3 text-primary-600 tracking-widest items-center">
    <img src={FIELD_MAP[field].icon} alt={field} class="w-8 h-8 mr-2" />
    <a
      href={FIELD_MAP[field].href(value)}
      target="_blank"
      class="ml-2 text-sm hover:text-secondary-500"
    >
      {FIELD_MAP[field].label(value)}
    </a>
  </span>
));
