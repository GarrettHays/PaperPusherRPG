import {stateControl, longLunch, payDay, coffee, clientCall, dataEntry, report, roll } from "../src/js/game"

describe('game', () => {
  
  test('should return current state of the employee', () => {
    expect(stateControl()).toEqual({ willToLive: 5, turn: 0 });
  });

  test('should add 1 to willToLive, reaches 6', () => {
    const newState = stateControl(longLunch)
    expect(newState.willToLive).toEqual(6);
  });

  test('should add 2 to willToLive, reaches 8', () => {
    const newState = stateControl(payDay)
    expect(newState.willToLive).toEqual(8);
  });

  test('should add 1 to willToLive, reaches 9', () => {
    const newState = stateControl(coffee)
    expect(newState.willToLive).toEqual(9);
  });

  test('should minues 1 from willToLive, down to 8', () => {
    const newState = stateControl(clientCall)
    expect(newState.willToLive).toEqual(8);
  });

  test('should minues 2 from willToLive, down to 6', () => {
    const newState = stateControl(dataEntry)
    expect(newState.willToLive).toEqual(6);
  });

  test('should minues 3 from willToLive, down to 3', () => {
    const newState = stateControl(report)
    expect(newState.willToLive).toEqual(3);
  });

  test('turn increase 1 by roll', () => {
    const newState = roll();
    expect(newState.turn).toEqual(1);
  });

});