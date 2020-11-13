import React from 'react';
import { shallow } from 'enzyme';

import InputMedia from './InputMedia';

describe('InputMedia', () => {
    let wrapper;

    const selectType = (type) => {
        wrapper = shallow(<InputMedia type={type} media="" setMedia={() => { }} />);
    };

    describe('when text type is selected', () => {
        beforeEach(() => {
            selectType('text');
        });

        it('should render text field', () => {
            expect(wrapper.exists('#input-media_input-media-text')).toBe(true);
        });

        it('should not render file upload', () => {
            expect(wrapper.exists('#input-media_upload-media-file')).toBe(false);
        });
    });

    describe('when audio type is selected', () => {
        beforeEach(() => {
            selectType('audio');
        });

        it('should render file upload', () => {
            expect(wrapper.exists('#input-media_upload-media-file')).toBe(true);
        });

        it('should not render text field', () => {
            expect(wrapper.exists('#input-media_input-media-text')).toBe(false);
        });
    });

    describe('when video type is selected', () => {
        beforeEach(() => {
            selectType('video');
        });

        it('should render file upload', () => {
            expect(wrapper.exists('#input-media_upload-media-file')).toBe(true);
        });

        it('should not render text field', () => {
            expect(wrapper.exists('#input-media_input-media-text')).toBe(false);
        });
    });
});