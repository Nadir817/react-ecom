import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

const persistor = persistStore(store);

export { store, persistor };
