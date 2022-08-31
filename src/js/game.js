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

export const longLunch = changeState("willToLive")(+1);
export const payDay = changeState("willToLive")(+2);
export const coffee = changeState("willToLive")(+1);
export const clientCall = changeState("willToLive")(-1);
export const dataEntry = changeState("willToLive")(-2);
export const report = changeState("willToLive")(-3);
export const turn = changeState("turn")(+1);

export const roll = () => {
  let rollNum = Math.trunc(Math.random() * 6) + 1;
  turn;
  switch (rollNum)
      {
        case 1:
          return longLunch;
        case 3:
          return payDay;
        case 5:
          return coffee;
        case 2:
          return clientCall;
        case 4:
          return dataEntry;
        case 6:
          return report;
    }
}
