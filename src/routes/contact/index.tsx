import { component$ } from "@builder.io/qwik";
export default component$(() => (
  <div class="p-4 overflow-y-auto w-80 bg-gray-800">
    <form action="mailto:artur.fedotiew@gmail.com" class="mb-6">
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email address"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="subject"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Let us know how we can help you"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="body"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="body"
          rows={4}
          name="body"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
      >
        Send message
      </button>
    </form>
    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
      <a href="#" class="hover:underline">
        artur.fedotiew@gmail.com
      </a>
    </p>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <a href="#" class="hover:underline">
        +48 883 595 607
      </a>
    </p>
  </div>
));
