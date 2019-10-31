import { shallowMount } from "@vue/test-utils";
import Form from '../form';


const factory = () => {
  return shallowMount(Form, {
  });
};

describe("Form", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});