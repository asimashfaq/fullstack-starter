import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ActionType } from 'typesafe-actions';
import { getSubscriptionPlansEpic } from './modules/subscription_plans/epics';
import SubscriptionPlanReducer, {
  SubscriptionPlansActionsWithPayload,
} from './modules/subscription_plans/reducer';
export const rootReducer = combineReducers({
  subscription_plans: SubscriptionPlanReducer,

  // router: connectRouter(history),
});
type ActionsWithPayloads = SubscriptionPlansActionsWithPayload;
type finalActions = ActionType<ActionsWithPayloads>;

export type RootState = ReturnType<typeof rootReducer>;
// Configure epics
const epics = combineEpics(getSubscriptionPlansEpic);
const epicMiddleware = createEpicMiddleware<
  finalActions, // input actions
  finalActions, // output actions
  RootState
>();

const Logger = createLogger();
// configure middlewares
const middleware = [
  ...getDefaultMiddleware(),
  Logger,
  // routerMiddleware(history),
  epicMiddleware,
];

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
epicMiddleware.run(epics);
export type AppDispatch = typeof store.dispatch;
