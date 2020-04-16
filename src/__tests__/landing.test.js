
import React from 'react'
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";
import Landing from "../components/Landing"

afterEach(rtl.cleanup);

describe('<App />', () => {
    // it('should render', () => {
    //   rtl.render(<App />)
    // })
    // describe('<Landing />', () => {
    //   it('should render', () => {
    //     rtl.render(<Landing />)
    //   })
    //   it('should welcome user', () => {
    //     const wrapper = rtl.render(<Landing />)
    //     expect(wrapper.getByText(/Discover/i))
    //   })      
    // })

    function sum(a, b) {
        return a + b;
    }

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
})

