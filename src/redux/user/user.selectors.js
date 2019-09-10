import {createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser], //array of our input selector
    (user) => user.currentUser //Arg 2: function that gets return of our second input selector
);