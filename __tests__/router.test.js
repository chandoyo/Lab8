/**
 * @jest-environment jsdom
 */

import {pushToHistory} from '../scripts/router.js';

// use describe to group tests together
describe('testing pushToHistory', () => {

    // test is to run an individual test
    // You should have at least one test block for every branch logic (conditional) you have in the function. Name your tests according to each branch.
    //test if the length of the history stack and the current state object is correct

    test('test settings', () => {
        pushToHistory('settings',0);
        // expect(history.state).toStrictEqual({ page: 'settings' });  // this line & line below do same thing 
        expect(history.state.page).toBe('settings');
        expect(history.length).toBe(2); // because it will be the 2nd page we visit. the original page we were on would be 1st
      });

    test('test entries', () => {
        pushToHistory('entry',1);
        expect(history.state.page).toBe('entry1');
        expect(history.length).toBe(3); 

        pushToHistory('entry', 10);
        expect(history.state.page).toBe('entry10');
        expect(history.length).toBe(4); 
    });

    test('test default case, undefined', () => {
        pushToHistory('undefined case!!',1);
        // state left empty, gives undefined
        expect(history.state.page).toBe(undefined);
        expect(history.length).toBe(5); 

      });



});