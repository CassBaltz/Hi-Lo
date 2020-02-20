// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'react';
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Modal from "react-modal";
import toJson from "enzyme-to-json";

Modal.setAppElement = () => { };

configure({ adapter: new Adapter() });

global.classReducer = classes => {
  return Object.keys(classes).reduce((acc, key) => {
    acc[key] = key;
    return acc;
  }, {});
};

global.shallow = shallow;
global.mount = mount;
global.toJson = toJson;