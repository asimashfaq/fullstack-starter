
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum SubscriptionDuration {
    DAY = "DAY",
    WEEK = "WEEK",
    MONTH = "MONTH",
    YEAR = "YEAR"
}

export class SubscriptionPlanFilter {
    id?: string;
}

export class SubscriptionPlanInput {
    name: string;
    code: string;
    description?: string;
    price: number;
    extra_fee?: number;
    invoice_period: number;
    invoice_duration: SubscriptionDuration;
    trail_period: number;
    trail_duration: SubscriptionDuration;
}

export class DeleteSubscriptionPlanResponse {
    modified?: number;
    edges?: SubscriptionPlan[];
}

export abstract class IMutation {
    abstract createSubscriptionPlan(payload: SubscriptionPlanInput): SubscriptionPlan | Promise<SubscriptionPlan>;

    abstract updateSubscriptionPlan(payload: SubscriptionPlanInput, where: SubscriptionPlanFilter): UpdateSubscriptionPlanResponse | Promise<UpdateSubscriptionPlanResponse>;

    abstract DeleteSubscriptionPlanResponse(where: SubscriptionPlanFilter): DeleteSubscriptionPlanResponse | Promise<DeleteSubscriptionPlanResponse>;
}

export class Pagination {
    total?: number;
    has_more?: boolean;
    limit?: number;
    skip?: number;
}

export abstract class IQuery {
    abstract find_all_subscription_plans(): SubscriptionPlanResponse | Promise<SubscriptionPlanResponse>;

    abstract find_one_subscription_plan(where?: SubscriptionPlanFilter): SubscriptionPlan | Promise<SubscriptionPlan>;
}

export class SubscriptionPlan {
    id?: string;
    name?: string;
    code?: string;
    slug?: string;
    description?: string;
    price?: number;
    extra_fee?: number;
    invoice_period?: number;
    invoice_duration?: SubscriptionDuration;
    trail_period?: number;
    trail_duration?: SubscriptionDuration;
}

export class SubscriptionPlanResponse {
    page_info?: Pagination;
    edges?: SubscriptionPlan[];
}

export class UpdateSubscriptionPlanResponse {
    modified?: number;
    edges?: SubscriptionPlan[];
}

export type date = any;
export type JSON = any;
export type JSONObject = any;
