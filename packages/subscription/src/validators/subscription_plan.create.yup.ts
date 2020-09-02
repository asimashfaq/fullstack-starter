/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-invalid-this */
import { ErrorGenerator } from '@bcdapps/common-backend';
import _ from 'lodash';
import * as yup from 'yup';
import { SubscriptionPlanErrorMessage } from '../message/error.message';
import {
  SubscriptionDuration,
  SubscriptionInputPayload,
  SubscriptionPlanDurationEnum,
} from '../types/subscription_plan.types';

/**
 * Validator for Creating the Subscription Plan
 */
export const subscriptionPlanCreateSchema = yup
  .object({
    name: yup
      .string()
      .trim()
      .min(3, ErrorGenerator.MiniLength<SubscriptionInputPayload>('name', 3))
      .max(50, ErrorGenerator.MaxLength<SubscriptionInputPayload>('name', 50))
      .required(ErrorGenerator.Required<SubscriptionInputPayload>('name')),
    price: yup
      .number()
      .min(0)
      .required(ErrorGenerator.Required<SubscriptionInputPayload>('price')),
    invoice_period: yup
      .number()
      .min(
        1,
        ErrorGenerator.MinValue<SubscriptionInputPayload>('invoice_period', 1),
      )
      .max(
        31,
        ErrorGenerator.MaxValue<SubscriptionInputPayload>('invoice_period', 31),
      )
      .required(
        ErrorGenerator.Required<SubscriptionInputPayload>('invoice_period'),
      ),
    invoice_duration: yup
      .mixed<SubscriptionDuration>()
      .oneOf(Object.values(SubscriptionPlanDurationEnum))
      .required(
        ErrorGenerator.Required<SubscriptionInputPayload>('invoice_duration'),
      ),
    trail_period: yup
      .number()
      .min(
        1,
        ErrorGenerator.MiniLength<SubscriptionInputPayload>('trail_period', 1),
      )
      .max(31),
    trail_duration: yup
      .mixed<SubscriptionDuration>()
      .oneOf(Object.values(SubscriptionPlanDurationEnum)),
    code: yup
      .string()
      .trim()
      .min(3, ErrorGenerator.MiniLength<SubscriptionInputPayload>('code', 3))
      .max(50, ErrorGenerator.MaxLength<SubscriptionInputPayload>('code', 50)),
    description: yup
      .string()
      .trim()
      .min(
        3,
        ErrorGenerator.MiniLength<SubscriptionInputPayload>('description', 3),
      )
      .max(
        50,
        ErrorGenerator.MaxLength<SubscriptionInputPayload>('description', 50),
      ),
  })
  .test(
    'invoice-period-duration',
    SubscriptionPlanErrorMessage.INVOICE_PERIOD_DURATION,
    // eslint-disable-next-line complexity
    value => {
      if (!value) {
        return false;
      }
      /**
       * Validate the duration and period for the subscription plan
       * If Duration is DAY then period must be between 1 and 31
       * If Duration is MONTH then period must be between 1 and 12
       * If Duration is YEAR then period must be between 1 and 5
       * If Duration is WEEK then period must be between 1 and 4
       */
      if (!_.isNil(value.invoice_period) && !_.isNil(value.invoice_duration)) {
        const isError = {
          [SubscriptionPlanDurationEnum.DAY]:
            value.invoice_period <= 31
              ? true
              : new yup.ValidationError(
                  SubscriptionPlanErrorMessage.INVOICE_PERIOD_DURATION_DAY,
                  value.invoice_period,
                  'invoice_period',
                ),
          [SubscriptionPlanDurationEnum.WEEK]:
            value.invoice_period <= 4
              ? true
              : new yup.ValidationError(
                  SubscriptionPlanErrorMessage.INVOICE_PERIOD_DURATION_WEEK,
                  value.invoice_period,
                  'invoice_period',
                ),
          [SubscriptionPlanDurationEnum.MONTH]:
            value.invoice_period <= 12
              ? true
              : new yup.ValidationError(
                  SubscriptionPlanErrorMessage.INVOICE_PERIOD_DURATION_MONTH,
                  value.invoice_period,
                  'invoice_period',
                ),
          [SubscriptionPlanDurationEnum.YEAR]:
            value.invoice_period <= 5
              ? true
              : new yup.ValidationError(
                  SubscriptionPlanErrorMessage.INVOICE_PERIOD_DURATION_YEAR,
                  value.invoice_period,
                  'invoice_period',
                ),
        };
        return isError[value.invoice_duration];
      }
      return false;
    },
  )
  .test(
    'trail-period-duration',
    SubscriptionPlanErrorMessage.TRAIL_PERIOD_DURATION,
    // eslint-disable-next-line complexity
    value => {
      if (!value) {
        return false;
      }
      /**
       * Validate the duration and period for the subscription plan
       * If Duration is DAY then period must be between 1 and 31
       * If Duration is MONTH then period must be between 1 and 12
       * If Duration is YEAR then period must be between 1 and 5
       * If Duration is WEEK then period must be between 1 and 4
       */
      if (!_.isNil(value.trail_period) && !_.isNil(value.trail_duration)) {
        const isError = {
          [SubscriptionPlanDurationEnum.DAY]:
            value.invoice_period <= 31
              ? true
              : new yup.ValidationError(
                  SubscriptionPlanErrorMessage.INVOICE_PERIOD_DURATION_DAY,
                  value.invoice_period,
                  'invoice_period',
                ),
          [SubscriptionPlanDurationEnum.WEEK]:
            value.invoice_period <= 4
              ? true
              : new yup.ValidationError(
                  SubscriptionPlanErrorMessage.INVOICE_PERIOD_DURATION_WEEK,
                  value.invoice_period,
                  'invoice_period',
                ),
          [SubscriptionPlanDurationEnum.MONTH]:
            value.invoice_period <= 12
              ? true
              : new yup.ValidationError(
                  SubscriptionPlanErrorMessage.INVOICE_PERIOD_DURATION_MONTH,
                  value.invoice_period,
                  'invoice_period',
                ),
          [SubscriptionPlanDurationEnum.YEAR]:
            value.invoice_period <= 5
              ? true
              : new yup.ValidationError(
                  SubscriptionPlanErrorMessage.INVOICE_PERIOD_DURATION_YEAR,
                  value.invoice_period,
                  'invoice_period',
                ),
        };
        return isError[value.invoice_duration];
      }
      return true;
    },
  );
