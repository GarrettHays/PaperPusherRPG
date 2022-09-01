const storeState = () => {
  let currentState = { willToLive: 5, turn: 0 };
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    if (typeof value === "number") {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || 0) + value
      });
    } else {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || "") + value
      });
    }
  };
};

export const longLunch = changeState("willToLive")(+2);
export const payDay = changeState("willToLive")(+3);
export const coffee = changeState("willToLive")(+1);
export const clientCall = changeState("willToLive")(-1);
export const dataEntry = changeState("willToLive")(-2);
export const report = changeState("willToLive")(-3);
export const turn = changeState("turn")(+1);

export const roll = () => {
  const rollNum = Math.trunc(Math.random() * 6) + 1;
  stateControl(turn);
  switch (rollNum) {
    case 1:
      return stateControl(longLunch);
    case 3:
      return stateControl(payDay);
    case 5:
      return stateControl(coffee);
    case 2:
      return stateControl(clientCall);
    case 4:
      return stateControl(dataEntry);
    case 6:
      return stateControl(report);
  }
};
