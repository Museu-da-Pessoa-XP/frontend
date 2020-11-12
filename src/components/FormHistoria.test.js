import React from 'react';
import { shallow } from 'enzyme';
import FormHistoria from './FormHistoria';

describe('FormHistoria', () => {
  let wrapper;

  beforeEach(() => {
    fetch.resetMocks();
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

  describe('when it sends a valid form', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify({}), { status: 200 });
      const mockedEvent = { preventDefault() { } }
      wrapper.find('#historia-form').simulate('submit', mockedEvent);
    });
    it('should show a success message', () => {
      expect(wrapper.find('#result-alert').props().message)
        .toBe('História enviada com sucesso!');
    })
  });

  describe('when it sends an invalid form', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify({}), { status: 400 });
      const mockedEvent = { preventDefault() { } }
      wrapper.find('#historia-form').simulate('submit', mockedEvent);
    });
    it('should show a failure message', () => {
      expect(wrapper.find('#result-alert').props().message)
        .toBe('Houve um erro ao enviar a história. :(');
    })
  });
});