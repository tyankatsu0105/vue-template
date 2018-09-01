import assert from 'assert';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg: msg
      }
    });

    // success
    // assert.equal(wrapper.props().msg, msg, `aaa`);
    // assert.equal(wrapper.props().msg, msg);

    // fail
    assert.equal(wrapper.props().msg, 'aaa', `aaa`);

    // fail Message hidden
    // assert.equal(wrapper.props().msg, 'aaa');
  });
});
