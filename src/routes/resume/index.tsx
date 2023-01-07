import { component$, Resource } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { Loading } from "~/modules/shared/ui/components/loading";

import { ResumeModel, getResume } from "~/modules/resume/domain";
import { ResumeFeature } from "~/modules/resume/feature";

export const onGet: RequestHandler<ResumeModel> = async () => getResume();

export default component$(() => {
  const resumeResource = useEndpoint<typeof onGet>();
  return (
    <div class="p-4 rounded-2xl bg-neutral-900 border border-neutral-700 text-charcoal-400  min-h-screen sm:p-5 antialiased">
      <div class="container mx-auto shadow ">
        <Resource
          value={resumeResource}
          onPending={() => <Loading />}
          onRejected={() => <div>Failed to load resume</div>}
          onResolved={(resume) => <ResumeFeature resume={resume} />}
        />
      </div>
    </div>
  );
});
