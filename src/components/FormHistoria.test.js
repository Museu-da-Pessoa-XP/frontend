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
      expect(wrapper.find('#form-historia_input-title').props().value).toBe('');
    });

    it('should have an empty description', () => {
      expect(wrapper.find('#form-historia_input-description').props().value).toBe('');
    });

    it('should have "text" as selected type', () => {
      expect(wrapper.find('#form-historia_selector-media-type').props().type).toBe('text');
    });
  });

  describe('when it sends a valid form', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify({}), { status: 200 });
      const mockedEvent = { preventDefault() { } }
      wrapper.find('#form-historia').simulate('submit', mockedEvent);
    });
    it('should show a success message', () => {
      expect(wrapper.find('#form-historia_alert-result').props().message)
        .toBe('História enviada com sucesso!');
    })
  });

  describe('when it sends an invalid form', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify({}), { status: 400 });
      const mockedEvent = { preventDefault() { } }
      wrapper.find('#form-historia').simulate('submit', mockedEvent);
    });
    it('should show a failure message', () => {
      expect(wrapper.find('#form-historia_alert-result').props().message)
        .toBe('Houve um erro ao enviar a história. :(');
    })
  });
});