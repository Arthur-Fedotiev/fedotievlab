import { PropFunction, component$, useStore, $ } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({ show: false });
  const toggle$ = $(() => {
    store.show = !store.show;
  });

  return (
    <>
      <div class="flex flex-row items-center bg-white border rounded-lg shadow-md md:flex-col md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          class="object-cover w-32 h-32 rounded-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="/images/avatar.jpeg"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Artur Fedotiev
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Software Engineer
            <span class="block"> at Dash Financial Technologies</span>
          </p>
        </div>
        <div class="block space-y-4 md:hidden md:space-y-0 md:space-x-4 ">
          <button
            class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick$={toggle$}
          >
            More info
          </button>

          <Modal show={store.show} onClose$={toggle$} />
        </div>
      </div>

      {/* <div class="flex gap-10 p-6 md:flex-col md:gap-5 bg-neutral-800">
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
    </div> */}
    </>
  );
});

export const Modal = component$(
  ({
    show,
    onClose$,
  }: {
    show: boolean;
    onClose$: PropFunction<() => void>;
  }) => (
    <div
      tabIndex={-1}
      class={`
    ${show ? "block" : "hidden"}
    fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
    >
      <div class="relative w-full h-full max-w-4xl md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              Large modal
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick$={async () => await onClose$()}
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-6 space-y-6">
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-toggle="large-modal"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              data-modal-toggle="large-modal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  )
);
