import { Resource, component$ } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import db from "~/shared/db";

export const onGet: RequestHandler<any[]> = async () => {
  const educationDocs = await db.collection("education").get();
  const educationEntries = educationDocs.docs.map((entry) => {
    const { from, to } = entry.data();

    return {
      ...entry.data(),
      id: entry.id,
      from: from && from.toDate().toDateString(),
      to: to && to.toDate().toDateString(),
    };
  });

  console.log(educationEntries);

  return educationEntries;
};

export default component$(() => {
  const educationResource = useEndpoint<typeof onGet>();

  return (
    <div>
      <h1>
        I'm Arthur <span class="lightning">⚡️</span>
      </h1>
      <h2>Education</h2>
      <Resource
        value={educationResource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(educations) => (
          <>
            {educations.map((education) => (
              <div key={education.id}>
                <h3>{education.name}</h3>
              </div>
            ))}
          </>
        )}
      />
    </div>
  );
});
