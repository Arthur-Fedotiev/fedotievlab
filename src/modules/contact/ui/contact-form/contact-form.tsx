import {
  PropFunction,
  Signal,
  component$,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./contact-form.css?inline";
import { $ } from "@builder.io/qwik";

export const growerGuard = (
  grower: Signal<Element | undefined>
): grower is Signal<HTMLElement> => !!grower;

export const SEND_EMAIL_STATE = {
  SUCCESS: "success",
  ERROR: "error",
  PENDING: "pending",
} as const;

type Status = typeof SEND_EMAIL_STATE[keyof typeof SEND_EMAIL_STATE];

interface ContactFormProps {
  sendEmail$: PropFunction<
    (value: HTMLFormElement | string) => Promise<"success" | "error">
  >;
}
export const ContactForm = component$(
  ({ sendEmail$: sendEmail }: ContactFormProps) => {
    useStylesScoped$(styles);

    const sendEmailState = useSignal<Status | null>(null);

    const onInput$ = $((event: Event) => {
      const textarea = event.target as HTMLTextAreaElement;
      (textarea.parentNode as HTMLDivElement).dataset.replicatedValue =
        textarea.value;
    });

    const formRef = useSignal<HTMLFormElement>();

    const sendEmail$ = $(async () => {
      sendEmailState.value = SEND_EMAIL_STATE.PENDING;

      sendEmailState.value = await sendEmail(formRef.value!);

      setTimeout(() => {
        sendEmailState.value = null;
      }, 5000);
    });

    return (
      <>
        <form ref={formRef} preventdefault:submit onSubmit$={sendEmail$}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            class="contact-input"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            class="contact-input"
          />
          <div class="grow-wrap">
            <textarea
              class="contact-input"
              name="message"
              required
              rows={3}
              placeholder="Message"
              wrap="off"
              onInput$={onInput$}
            ></textarea>
          </div>

          <button
            type="submit"
            class="
          w-full
          px-6
          py-2.5
          bg-yellow-500
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-secondary-700 hover:shadow-lg
          focus:bg-secondary-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-secondary-800 active:shadow-lg
          disabled:opacity-50
          disabled:bg-secondary-500
          transition
          duration-150
          ease-in-out"
            disabled={sendEmailState.value === SEND_EMAIL_STATE.PENDING}
          >
            {sendEmailState.value === SEND_EMAIL_STATE.PENDING ? (
              <>
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Sending...
              </>
            ) : (
              "Send"
            )}
          </button>
        </form>
        <div
          class={`fixed -bottom-20 left-1/2 w-[90vw] sm:w-[75vw] md:w-[50vw] xl:w-[40vw] animate-hidden-bottom ${
            sendEmailState.value !== null &&
            sendEmailState.value !== SEND_EMAIL_STATE.PENDING
              ? "animate-slide-in"
              : ""
          }`}
        >
          <div class="relative -left-1/2 top-4">
            {sendEmailState.value === SEND_EMAIL_STATE.ERROR && (
              <div
                class={`flex p-4 mb-4 text-sm border rounded-lg text-red-400 border-red-800`}
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">Something wrong happened.</span>
                  Please try again or contact me through other channels.
                </div>
              </div>
            )}
            {sendEmailState.value === SEND_EMAIL_STATE.SUCCESS && (
              <div
                class="flex p-4 mb-4 text-sm  border rounded-lg  dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">Success!</span> Your message has
                  been sent.
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
);
