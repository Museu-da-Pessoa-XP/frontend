import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should start with an empty title', () => {
    expect(wrapper.find('#title-input').props().value).toBe('');
  });

  it('should start with an empty description', () => {
    expect(wrapper.find('#description-input').props().value).toBe('');
  });

  it('should start with "text" as selected type', () => {
    expect(wrapper.find('#media-type-toggle').props().value).toBe('text');
  });

  it('should render text field when text type is selected', () => {
    wrapper.find('#media-type-toggle-text').simulate('click');
    expect(wrapper.exists('#media-text-input')).toBe(true);
  });

  it('should not render text field when another media type is selected', () => {
    wrapper.find('#media-type-toggle-audio').simulate('click');
    expect(wrapper.exists('#media-text-input')).toBe(false);
  });

  it('should render media upload when audio type is selected', () => {
    wrapper.find('#media-type-toggle-audio').simulate('click');
    expect(wrapper.exists('#media-file-upload')).toBe(true);
  });
});
