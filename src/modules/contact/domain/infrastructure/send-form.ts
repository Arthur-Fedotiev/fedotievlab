import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export const sendForm = async (
  form: HTMLFormElement | string
): Promise<EmailJSResponseStatus | undefined> => {
  return emailjs.sendForm(
    import.meta.env.VITE_GMAIL_SERVICE_KEY,
    import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
    form,
    import.meta.env.VITE_EMAIL_SERVICE_PUBLIC_KEY
  );
};
