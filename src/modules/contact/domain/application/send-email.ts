import { sendForm } from "../infrastructure/send-form";

export interface SendEmailParams {
  form: HTMLFormElement | string;
}

export const SEND_EMAIL_SUCCESS = "success" as const;
export const SEND_EMAIL_ERROR = "error" as const;

export const sendEmail = async ({
  form,
}: SendEmailParams): Promise<SendEmailResult> => {
  return sendForm(form)
    .then(() => SEND_EMAIL_SUCCESS)
    .catch((error) => {
      console.error(error);
      return SEND_EMAIL_ERROR;
    });
};

export type SendEmailResult = "success" | "error";
