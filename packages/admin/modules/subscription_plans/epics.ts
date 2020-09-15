import { Epic } from 'redux-observable';
import { from, Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { ActionType } from 'typesafe-actions';
import { container } from '../../api/ioc';
import { SubscriptionPlanProvider } from '../../api/subscription_plans';
import { RootState } from '../../store';
import {
  getSubscriptionPlans,
  getSubscriptionPlansFailure,
  getSubscriptionPlansSuccess,
} from './reducer';

type SourceActions =
  | typeof getSubscriptionPlans
  | typeof getSubscriptionPlansSuccess
  | typeof getSubscriptionPlansFailure;
type Action = ActionType<SourceActions>;
const subscriptionPlanService = container.get<SubscriptionPlanProvider>(
  'subscriptionPlanProvider'
);
export const getSubscriptionPlansEpic: Epic<Action, Action, RootState> = (
  action$
) =>
  action$.pipe(
    filter(getSubscriptionPlans.match),
    switchMap<Action, Observable<Action>>((action) =>
      from(subscriptionPlanService.findAll()).pipe(
        map((res) => getSubscriptionPlansSuccess(res)),
        catchError((error) => of(getSubscriptionPlansFailure(error)))
      )
    )
  );
