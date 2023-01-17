import { component$ } from "@builder.io/qwik";
import { ProfileDetailsItem } from "./profile-detail";

import { Separator } from "~/modules/shared/ui/components/separator";

export const ProfileDetails = component$(({ show }: { show: boolean }) => (
  <div
    id="profile-details"
    class={`${
      show ? "max-h-96" : "max-h-0"
    } transition-max-h duration-700 overflow-hidden lg:max-h-full`}
  >
    <Separator />

    <ul class="grid grid-cols-1 gap-3 my-4 mx-auto sm:grid-cols-2 md:grid-cols-1">
      <li>
        <ProfileDetailsItem label="Email" src="/icons/email.png">
          <a
            href="mailto:artur.fedotiew@gmail.com"
            class="text-sm hover:text-secondary-500"
          >
            artur.fedotiew@gmail.com
          </a>
        </ProfileDetailsItem>
      </li>

      <li class="flex items-center gap-4 min-w-full">
        <ProfileDetailsItem label="Phone" src="/icons/phone.png">
          <a href="tel:+4883595607" class="text-sm hover:text-secondary-500">
            +48 (883) 595-607
          </a>
        </ProfileDetailsItem>
      </li>

      <li class="flex items-center gap-4 min-w-full">
        <ProfileDetailsItem label="Birthday" src="/icons/me.png">
          <time dateTime="1994-05-17" class="text-sm hover:text-secondary-500">
            May 17, 1994
          </time>
        </ProfileDetailsItem>
      </li>

      <li class="flex items-center gap-4 min-w-full">
        <ProfileDetailsItem label="Location" src="/icons/home.png">
          <address class="text-sm hover:text-secondary-500">
            Wroclaw, Poland
          </address>
        </ProfileDetailsItem>
      </li>
    </ul>
  </div>
));
