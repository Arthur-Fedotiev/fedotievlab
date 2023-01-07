import { component$ } from "@builder.io/qwik";
import { ProfileDetailsItem } from "./profile-detail";
import { Separator } from "../../shared/ui/separator";
import { MailIcon } from "~/modules/shared/ui/icons/mail-icon";

export const ProfileDetails = component$(({ show }: { show: boolean }) => (
  <div
    id="profile-details"
    class={`${
      show ? "max-h-96" : "max-h-0"
    } transition-max-h duration-700 overflow-hidden md:max-h-full`}
  >
    <Separator />

    <ul class="grid grid-cols-1 gap-3 my-4 mx-auto sm:grid-cols-2 md:grid-cols-1">
      <li>
        <ProfileDetailsItem label="Email">
          <MailIcon q:slot="icon" width={36} height={36} />
          <a href="mailto:artur.fedotiew@gmail.com">artur.fedotiew@gmail.com</a>
        </ProfileDetailsItem>
      </li>

      <li class="flex items-center gap-4 min-w-full">
        <ProfileDetailsItem label="Phone">
          <MailIcon q:slot="icon" width={36} height={36} />
          <a href="tel:+4883595607" class="contact-link">
            +48 (883) 595-607
          </a>
        </ProfileDetailsItem>
      </li>

      <li class="flex items-center gap-4 min-w-full">
        <ProfileDetailsItem label="Birthday">
          <MailIcon q:slot="icon" width={36} height={36} />
          <time dateTime="1994-05-17">May 17, 1994</time>
        </ProfileDetailsItem>
      </li>

      <li class="flex items-center gap-4 min-w-full">
        <ProfileDetailsItem label="Location">
          <MailIcon q:slot="icon" width={36} height={36} />
          <address>Wroclaw, Poland</address>
        </ProfileDetailsItem>
      </li>
    </ul>

    <Separator />
    <ul class="flex justify-center mt-4 gap-4">
      <li class="social-item">
        <a href="#">
          <MailIcon width={36} height={36} />
        </a>
      </li>

      <li class="social-item">
        <a href="#">
          <MailIcon width={36} height={36} />
        </a>
      </li>

      <li class="social-item">
        <a href="#">
          <MailIcon width={36} height={36} />
        </a>
      </li>
    </ul>
  </div>
));
