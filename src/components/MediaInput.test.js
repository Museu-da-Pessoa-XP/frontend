import React from 'react';
import { shallow } from 'enzyme';

import MediaInput from './MediaInput';

describe('MediaInput', () => {
    let wrapper;

    const selectType = (type) => {
        wrapper = shallow(<MediaInput type={type} media="" setMedia={() => { }} />);
    };

    describe('when text type is selected', () => {
        beforeEach(() => {
            selectType('text');
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
            selectType('audio');
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
            selectType('video');
        });

        it('should render file upload', () => {
            expect(wrapper.exists('#media-file-upload')).toBe(true);
        });

        it('should not render text field', () => {
            expect(wrapper.exists('#media-text-input')).toBe(false);
        });
    });
});