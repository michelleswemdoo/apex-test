import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppButton from '../AppButton.vue';

describe('AppButton', () => {
  it('renders the slot content', () => {
    const wrapper = mount(AppButton, {
      slots: {
        default: 'Click me',
      },
    });

    expect(wrapper.text()).toBe('Click me');
  });

  it('applies base classes', () => {
    const wrapper = mount(AppButton);
    expect(wrapper.classes()).toContain('px-3');
    expect(wrapper.classes()).toContain('py-1');
    expect(wrapper.classes()).toContain('rounded-lg');
    expect(wrapper.classes()).toContain('transition');
    expect(wrapper.classes()).toContain('ease-in-out');
    expect(wrapper.classes()).toContain('duration-150');
    expect(wrapper.classes()).toContain('text-md');
  });

  it('disables the button', () => {
    const wrapper = mount(AppButton, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.classes()).toContain('cursor-not-allowed');
    expect(wrapper.find('button').element.disabled).toBeTruthy();
  });

  it('checks hover class application when not disabled', () => {
    const wrapper = mount(AppButton, {
      props: {
        disabled: false,
      },
    });

    expect(wrapper.classes()).toContain('hover:bg-blue-200');
  });

  it('emits a click event when clicked and not disabled', async () => {
    const wrapper = mount(AppButton, {
      props: {
        disabled: false,
      },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('does not emit a click event when button is disabled', async () => {
    const wrapper = mount(AppButton, {
      props: {
        disabled: true,
      },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');
  });
});
