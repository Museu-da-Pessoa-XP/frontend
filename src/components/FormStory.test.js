import React from 'react';
import { shallow } from 'enzyme';
import FormStory from './FormStory';

describe('FormStory', () => {
  let wrapper;

  beforeEach(() => {
    fetch.resetMocks();
    wrapper = shallow(<FormStory />);
  });

  describe('when it starts', () => {});

  describe('when it sends a valid form', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify({}), { status: 200 });
      for (let i = 0; i < 5; i += 1) {
        wrapper.find('#form-historia_button-next').props().onClick();
      }
      wrapper.find('#form-historia_button-submit').props().onClick();
    });
    it('should show a success message', () => {
      expect(wrapper.find('#form-historia_alert-result').props().message).toBe(
        'História enviada com sucesso!'
      );
    });
  });

  describe('when it sends an invalid form', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify({}), { status: 400 });
      for (let i = 0; i < 5; i += 1) {
        wrapper.find('#form-historia_button-next').props().onClick();
      }
      wrapper.find('#form-historia_button-submit').props().onClick();
    });
    it('should show a failure message', () => {
      expect(wrapper.find('#form-historia_alert-result').props().message).toBe(
        'Houve um erro ao enviar a história. :('
      );
    });
  });
});
