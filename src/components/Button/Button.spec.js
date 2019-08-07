import React from 'react';
import Button from './Button';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { checkProps } from '../../services/utils';


Enzyme.configure({ adapter: new Adapter() })

const setUpTest = (props = {}) => {
  let button = shallow(<Button {...props}>button</Button>);
  return button
}

describe('Button', () => {

  let component;
  beforeEach(() => {
    const test = () => {
      return 2 * 2;
    }
    const props = {
      color: 'primary',
      size: 'sm',
      type: 'submit',
      onClick: test,
      disabled: true,
      fullWidth: true
    }
    component = setUpTest(props);
  })
  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('is actually a button!', () => {
    expect(component.find('button')).toHaveLength(1);
  });

  it('should have children present', () => {
    component.setProps({children: '<div>title</div>'});
    expect(component.find('button').prop('children')).toBe('<div>title</div>');
  })

  it('should have the correct types for all props', () => {
    const expectedProps = {
      color: 'primary',
      size: 'sm',
      type: 'submit',
      onClick: test,
      disabled: true,
      fullWidth: true
    }
    const propsError = checkProps(Button, expectedProps)
    expect(propsError).toBeUndefined()
  });
 
})