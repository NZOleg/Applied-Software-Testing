import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

import TestModule from './TestModule';

describe('<TestModule />', () => {

	it('test case 1.1', () => {
		let props = {
			customerType: "normal",
			visits: 2,
			prediscountPrice: 30
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('0');
	});


	it('test case 1.2', () => {
		let props = {
			customerType: "normal",
			visits: 0,
			prediscountPrice: 0.01
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('0');
	});

	it('test case 1.3', () => {
		let props = {
			customerType: "normal",
			visits: 4,
			prediscountPrice: 49.99
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('0');
	});

	it('test case 2.1', () => {
		let props = {
			customerType: "normal",
			visits: 3,
			prediscountPrice: 80
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('10');
	});

	it('test case 2.2', () => {
		let props = {
			customerType: "normal",
			visits: 1,
			prediscountPrice: 50
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('10');
	});

	it('test case 3.1', () => {
		let props = {
			customerType: "preferred",
			visits: 2,
			prediscountPrice: 25
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('10');
	});

	it('test case 3.2', () => {
		let props = {
			customerType: "preferred",
			visits: 0,
			prediscountPrice: 35
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('10');
	});

	it('test case 3.3', () => {
		let props = {
			customerType: "preferred",
			visits: 3,
			prediscountPrice: 30
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('10');
	});

	it('test case 4.1', () => {
		let props = {
			customerType: "preferred",
			visits: 2,
			prediscountPrice: 75
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('15');
	});

	it('test case 5.1', () => {
		let props = {
			customerType: "preferred",
			visits: 5,
			prediscountPrice: 25
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('15');
	});

	it('test case 5.2', () => {
		let props = {
			customerType: "preferred",
			visits: 4,
			prediscountPrice: 35
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('15');
	});

	it('test case 6.1', () => {
		let props = {
			customerType: "preferred",
			visits: 5,
			prediscountPrice: 80
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('20');
	});

	it('test case 7.1', () => {
		let props = {
			customerType: "usual",
			visits: 1,
			prediscountPrice: 1000
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('error');
	});

	it('test case 7.2', () => {
		let props = {
			customerType: "normal",
			visits: -4,
			prediscountPrice: 45
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('error');
	});

	it('test case 7.3', () => {
		let props = {
			customerType: "preferred",
			visits: "many",
			prediscountPrice: 500
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('error');
	});

	it('test case 7.4', () => {
		let props = {
			customerType: "preferred",
			visits: 2,
			prediscountPrice: -60
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('error');
	});

	it('test case 7.5', () => {
		let props = {
			customerType: "preferred",
			visits: 3,
			prediscountPrice: "sixteen"
		};
		const wrapper = mount(<TestModule {...props} />);
		expect(wrapper.find('.discount').text()).toEqual('error');
	});

});