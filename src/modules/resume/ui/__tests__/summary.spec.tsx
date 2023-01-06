import { createDOM } from "@builder.io/qwik/testing";
import { it, expect, describe } from "vitest";
import { Summary } from "../summary";

describe(Summary.name, () => {
  it("should render summary", async () => {
    const { screen, render } = await createDOM();
    const summaryStub = "It is a summary stub";

    await render(<Summary summary={summaryStub} />);

    expect(screen.querySelector("p")).toBeTruthy();
  });
});
