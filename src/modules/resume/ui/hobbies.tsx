import { component$ } from "@builder.io/qwik";

interface HobbiesProps {
  readonly hobbies: string[];
}

export const Hobbies = component$(({ hobbies }: HobbiesProps) => (
  <section>
    <h1 class="section-header mb-5">Hobbies</h1>
    <div class="flex flex-wrap">
      {hobbies.map((hobby) => (
        <span class="tag mr-2 mb-2" key={hobby}>
          {hobby}
        </span>
      ))}
    </div>
  </section>
));
