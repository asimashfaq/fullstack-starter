import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ActionType } from 'typesafe-actions';

// #TODO: Add your reducers here
export const rootReducer = combineReducers({});

// #TODO: Add your actions here
type finalActions = ActionType<any>;

export type RootState = ReturnType<typeof rootReducer>;
// #TODO: Add your epics here
const epics = combineEpics();
const epicMiddleware = createEpicMiddleware<
  finalActions, // input actions
  finalActions, // output actions
  RootState
>();

const Logger = createLogger();
const middleware = [...getDefaultMiddleware(), Logger, epicMiddleware];

function configureAppStore(initialState?: any) {
  // create store
  return configureStore({
    reducer: rootReducer,
    middleware: middleware,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  });
}

export const store = configureAppStore();
// #TODO: Remove comment after adding epics
//epicMiddleware.run(epics);
export type AppDispatch = typeof store.dispatch;
