import HelloW from "../src/components/HelloW.vue";
import { mount } from "@vue/test-utils";
import { test, expect, describe, it } from "vitest";

test("renders a greeting with the given name", () => {
  const wrapper = mount(HelloW, {
    props: {
      name: "John Doe",
    },
  });

  expect(wrapper.text()).toContain("Hello, John Doe!");
});
