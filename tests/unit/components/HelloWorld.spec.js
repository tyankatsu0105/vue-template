import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

const msg = 'new message';
const wrapper = shallowMount(HelloWorld, {
  propsData: { msg }
});

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    expect(wrapper.text()).toMatch(msg);
  });
});

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot();
});
