import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ChipComponent from '../AppBadgeChip.vue';
import CircleChipIcon from '@/assets/icons/CircleChipIcon.vue';

describe('ChipComponent', () => {
  it('renders slot content', () => {
    const wrapper = mount(ChipComponent, {
      slots: {
        default: 'Sample text',
      },
    });
    expect(wrapper.text()).toContain('Sample text');
  });

  it('contains an icon', () => {
    const wrapper = mount(ChipComponent);
    expect(wrapper.findComponent(CircleChipIcon).exists()).toBe(true);
  });

  it('has correct classes', () => {
    const wrapper = mount(ChipComponent);
    const p = wrapper.find('p');
    expect(p.classes()).toContain('w-fit');
    expect(p.classes()).toContain('px-3');
    expect(p.classes()).toContain('py-1');
    expect(p.classes()).toContain('text-sm');
    expect(p.classes()).toContain('rounded-lg');
    expect(p.classes()).toContain('capitalize');
    expect(p.classes()).toContain('mb-2');
    expect(p.classes()).toContain('flex');
    expect(p.classes()).toContain('items-center');
  });
});
