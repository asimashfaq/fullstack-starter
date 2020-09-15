import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISubscriptionPlan } from './types';

type SubscriptionPlansState = ISubscriptionPlan;

const initState: SubscriptionPlansState = {
  id: '',
  name: '',
  slug: '',
  code: '',
  price: 0,
};

const subscriptionPlansSlice = createSlice({
  name: 'subscriptionPlans',
  initialState: initState as SubscriptionPlansState,
  reducers: {
    getSubscriptionPlans: (
      state
      //action?: PayloadAction<ISubscriptionPlan>,
    ) => {
      console.log(`Load Subscription Plan`);
      // Empty
    },
    getSubscriptionPlansSuccess: (
      state,
      action: PayloadAction<ISubscriptionPlan[] | any>
    ) => {
      console.log(`Received Subscription Plan`, action);
      const plans = action.payload as ISubscriptionPlan[];
      return {
        ...state,
        plans,
      };
    },
    getSubscriptionPlansFailure: (state, action: PayloadAction<Error>) => {
      console.log(`Receive error from Subscription Plan`, action);
      // Empty
    },
  },
});

export const {
  getSubscriptionPlans,
  getSubscriptionPlansSuccess,
  getSubscriptionPlansFailure,
} = subscriptionPlansSlice.actions;

export type SubscriptionPlansActionsWithPayload =
  | typeof getSubscriptionPlans
  | typeof getSubscriptionPlansSuccess
  | typeof getSubscriptionPlansFailure;

export default subscriptionPlansSlice.reducer;
