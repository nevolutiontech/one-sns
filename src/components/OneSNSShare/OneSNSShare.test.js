import React from 'react';
import { shallow } from 'enzyme';
import OneSNSShare from './index';

describe('<OneSNSShare />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<OneSNSShare />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
