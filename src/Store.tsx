import React from "react";

type StoreType = { message: string; check: () => void };

// createContext = create storage like redux "createStore"
// createContext(here is a default value structure)
// When proper Provider is not detected, returns this value.
const store = React.createContext<undefined | StoreType>(undefined);

export default store;
