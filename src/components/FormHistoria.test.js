import React from 'react';
import { shallow } from 'enzyme';
import FormHistoria from './FormHistoria';

describe('FormHistoria', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FormHistoria />);
  });

  describe('when it starts', () => {
    it('should have an empty title', () => {
      expect(wrapper.find('#title-input').props().value).toBe('');
    });

    it('should have an empty description', () => {
      expect(wrapper.find('#description-input').props().value).toBe('');
    });

    it('should have "text" as selected type', () => {
      expect(wrapper.find('#media-type-selector').props().type).toBe('text');
    });
  });
});