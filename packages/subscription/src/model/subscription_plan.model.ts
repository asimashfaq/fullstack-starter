import { ISubscriptionPlan } from '../interfaces/subscription_plan.interface';
import { SubscriptionDuration } from '../types/subscription_plan.types';

/**
 * Subscription Plans Model
 * @CollectionName will be SubscriptionPlan
 *
 * @export
 * @class SubscriptionPlanModel
 * @implements {ISubscriptionPlan}
 */
export class SubscriptionPlans implements Partial<ISubscriptionPlan> {
  protected readonly collection_name = 'SubscriptionPlans';
  // Note: All the properties must be partial
  id?: string;
  name?: string;
  code?: string;
  slug?: string;
  description?: string;
  price?: number;
  extra_fee?: number;
  create_at?: Date;
  invoice_period?: number;
  invoice_duration?: SubscriptionDuration;
  trail_period?: number;
  trail_duration?: SubscriptionDuration;
  constructor(payload?: Partial<ISubscriptionPlan>) {
    Object.assign(this, payload);
  }
}
