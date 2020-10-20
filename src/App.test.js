import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('when it starts', () => {
    it('should have an empty title', () => {
      expect(wrapper.find('#title-input').props().value).toBe('');
    });

    it('should have an empty description', () => {
      expect(wrapper.find('#description-input').props().value).toBe('');
    });

    it('should have "text" as selected type', () => {
      expect(wrapper.find('#media-type-toggle').props().value).toBe('text');
    });
  });

  describe('when text type is selected', () => {
    beforeEach(() => {
      wrapper.find('#media-type-toggle').props().onChange(null, 'text');
    });

    it('should render text field', () => {
      expect(wrapper.exists('#media-text-input')).toBe(true);
    });

    it('should not render file upload', () => {
      expect(wrapper.exists('#media-file-upload')).toBe(false);
    });
  });

  describe('when audio type is selected', () => {
    beforeEach(() => {
      wrapper.find('#media-type-toggle').props().onChange(null, 'audio');
    });

    it('should render file upload', () => {
      expect(wrapper.exists('#media-file-upload')).toBe(true);
    });

    it('should not render text field', () => {
      expect(wrapper.exists('#media-text-input')).toBe(false);
    });
  });

  describe('when video type is selected', () => {
    beforeEach(() => {
      wrapper.find('#media-type-toggle').props().onChange(null, 'video');
    });

    it('should render file upload', () => {
      expect(wrapper.exists('#media-file-upload')).toBe(true);
    });

    it('should not render text field', () => {
      expect(wrapper.exists('#media-text-input')).toBe(false);
    });
  });
});
