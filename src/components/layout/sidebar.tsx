import { component$ } from "@builder.io/qwik";

export default component$(() => (
  <>
    <div class="flex gap-10 p-6 md:flex-col md:gap-5 bg-neutral-800">
      <figure class="w-32">
        <img
          class="w-32 h-32 rounded-full"
          src="/images/avatar.jpeg"
          alt="Artur Fedotiev"
        />
      </figure>

      <div class="flex flex-col justify-center">
        <h1 class="name" title="Artur Fedotiev">
          Artur Fedotiev
        </h1>

        <p class="bg-gray-700 rounded-md">Web developer</p>
      </div>

      <button class="absolute top-0 right-0 md:hidden">
        <span>Show Contacts</span>
      </button>
    </div>

    <div class="hidden md:block">
      <div class="border w-5/6 m-auto mb-1.5"></div>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon
              name="mail-outline"
              role="img"
              class="md hydrated"
              aria-label="mail outline"
            ></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Email</p>

            <a href="mailto:richard@example.com" class="contact-link">
              richard@example.com
            </a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon
              name="phone-portrait-outline"
              role="img"
              class="md hydrated"
              aria-label="phone portrait outline"
            ></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Phone</p>

            <a href="tel:+12133522795" class="contact-link">
              +1 (213) 352-2795
            </a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon
              name="calendar-outline"
              role="img"
              class="md hydrated"
              aria-label="calendar outline"
            ></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Birthday</p>

            <time dateTime="1982-06-23">June 23, 1982</time>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon
              name="location-outline"
              role="img"
              class="md hydrated"
              aria-label="location outline"
            ></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Location</p>

            <address>Sacramento, California, USA</address>
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon
              name="logo-facebook"
              role="img"
              class="md hydrated"
              aria-label="logo facebook"
            ></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon
              name="logo-twitter"
              role="img"
              class="md hydrated"
              aria-label="logo twitter"
            ></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon
              name="logo-instagram"
              role="img"
              class="md hydrated"
              aria-label="logo instagram"
            ></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  </>
));
