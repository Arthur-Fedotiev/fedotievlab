import { component$ } from "@builder.io/qwik";

interface DownloadBtnProps {
  readonly link: string;
}

export const DownloadBtn = component$(({ link }: DownloadBtnProps) => (
  <a href={link} download="Artur_Fedotiev_CV_SoftwareDeveloper.pdf">
    <span
      class={`inline-flex items-center bg-primary-300 hover:bg-secondary-500 text-gray-800 hover:text-white focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2 mr-2 my-4 focus:outline-none animate-bounce motion-reduce:transition-none`}
    >
      <svg
        class="fill-current w-4 h-4 mr-2 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      Download
    </span>
  </a>
));
