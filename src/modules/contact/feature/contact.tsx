import { component$, $ } from "@builder.io/qwik";
import { Twitter } from "../ui/icons/twitter";
import { ContactForm } from "../ui/contact-form/contact-form";
import { Github } from "../ui/icons/github";
import { Linkedin } from "../ui/icons/linkedin";
import { Telegram } from "../ui/icons/telegram";
import { Whatsapp } from "../ui/icons/whatsapp";
import { SocialLink } from "../ui/social-link";
import { SEND_EMAIL_ERROR, sendEmail } from "../domain/application/send-email";
export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/arthurfedotiev/",
    bgColor: "#0077b5",
    icon: <Linkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Arthur-Fedotiev",
    bgColor: "#333",
    icon: <Github />,
    label: "GitHub",
  },
  {
    href: "https://t.me/Arthur_Fedotiev",
    bgColor: "#0088cc",
    icon: <Telegram />,
    label: "Telegram",
  },
  {
    href: "https://wa.me/380676204555",
    bgColor: "#25d366",
    icon: <Whatsapp />,
    label: "WhatsApp",
  },
  {
    href: "https://twitter.com/messages/compose?recipient_id=1454998625961058314",
    bgColor: "#1da1f2",
    icon: <Twitter />,
    label: "Twitter",
  },
];

export const ContactFeature = component$(() => {
  const sendEmail$ = $(async (form: HTMLFormElement | string) =>
    sendEmail({
      form,
    }).catch(() => SEND_EMAIL_ERROR)
  );

  return (
    <>
      <div class="grow-0 shrink-0 basis-auto w-full px-3 lg:px-6 xl:mb-0">
        <ContactForm sendEmail$={sendEmail$} />
      </div>
      <div class="grow-0 shrink-0 basis-auto w-full mt-10 pt-4 ">
        <div class="flex justify-center items-center flex-wrap space-x-2">
          {SOCIAL_LINKS.map(({ href, bgColor, icon, label }) => (
            <SocialLink href={href} bgColor={bgColor} label={label}>
              {icon}
            </SocialLink>
          ))}
        </div>
      </div>
    </>
  );
});
