import React from 'react';
import { shallow } from 'enzyme';
import OneSNSForm from './index';

describe('<OneSNSForm />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<OneSNSForm />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
