import { describe, expect, it } from "vitest";
import { Avatar } from "../avatar";
import { createDOM } from "@builder.io/qwik/testing";

describe(Avatar.name, () => {
  it("should render avatar with proper image and SEO", async () => {
    const { screen, render } = await createDOM();
    await render(<Avatar />);

    expect(screen.querySelector("img")).toBeTruthy();
  });
});
