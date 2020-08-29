import { ErrorGenerator } from '@bcdapps/common_backend';
import _ from 'lodash';
import * as yup from 'yup';
import { SubscriptionPlanErrorMessage } from '../message/error.message';
import {
  SubscriptionDuration,
  SubscriptionPlanDurationEnum,
  SubscriptionPlanUpdatePayload,
} from '../types/subscription_plan.types';

/**
 * Validator for Updating the Subscription Plan
 */
export const subscriptionPlanUpdateSchema = yup
  .object<SubscriptionPlanUpdatePayload>({
    name: yup
      .string()
      .trim()
      .min(
        3,
        ErrorGenerator.MiniLength<SubscriptionPlanUpdatePayload>('name', 3),
      )
      .max(
        50,
        ErrorGenerator.MaxLength<SubscriptionPlanUpdatePayload>('name', 50),
      ),
    code: yup
      .string()
      .trim()
      .min(
        3,
        ErrorGenerator.MiniLength<SubscriptionPlanUpdatePayload>('code', 3),
      )
      .max(
        50,
        ErrorGenerator.MaxLength<SubscriptionPlanUpdatePayload>('code', 50),
      ),
    description: yup
      .string()
      .trim()
      .min(
        3,
        ErrorGenerator.MiniLength<SubscriptionPlanUpdatePayload>(
          'description',
          3,
        ),
      )
      .max(
        50,
        ErrorGenerator.MaxLength<SubscriptionPlanUpdatePayload>(
          'description',
          50,
        ),
      ),
    price: yup.number().min(0),
    invoice_period: yup
      .number()
      .min(
        1,
        ErrorGenerator.MinValue<SubscriptionPlanUpdatePayload>(
          'invoice_period',
          1,
        ),
      )
      .max(
        31,
        ErrorGenerator.MaxValue<SubscriptionPlanUpdatePayload>(
          'invoice_period',
          31,
        ),
      ),
    invoice_duration: yup
      .mixed<SubscriptionDuration>()
      .oneOf(Object.values(SubscriptionPlanDurationEnum)),
    trail_period: yup
      .number()
      .min(
        1,
        ErrorGenerator.MiniLength<SubscriptionPlanUpdatePayload>(
          'trail_period',
          1,
        ),
      )
      .max(31),
    trail_duration: yup
      .mixed<SubscriptionDuration>()
      .oneOf(Object.values(SubscriptionPlanDurationEnum)),
  })
  .test(
    'invoice-period-duration',
    SubscriptionPlanErrorMessage.INVOICE_PERIOD_DURATION,
    // eslint-disable-next-line complexity
    (_value: SubscriptionPlanUpdatePayload | any) => {
      const value = _value as SubscriptionPlanUpdatePayload;

      if (!value) {
        return false;
      }
      if (!value.invoice_period) {
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
        return isError[value.invoice_duration as SubscriptionPlanDurationEnum];
      }
      return true;
    },
  )
  .test(
    'trail-period-duration',
    SubscriptionPlanErrorMessage.TRAIL_PERIOD_DURATION,
    // eslint-disable-next-line complexity
    (_value: SubscriptionPlanUpdatePayload | any) => {
      const value = _value as SubscriptionPlanUpdatePayload;
      if (!value.invoice_period) {
        return false;
      }
      /**
       * Validate the duration and period for the subscription plan
       * If Duration is DAY then period must be between 1 and 31
       * If Duration is MONTH then period must be between 1 and 12
       * If Duration is YEAR then period must be between 1 and 5
       * If Duration is WEEK then period must be between 1 and 4
       */
      if (!_.isNil(value.invoice_period) && !_.isNil(value.invoice_period)) {
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
        return isError[value.invoice_duration as SubscriptionPlanDurationEnum];
      }
      return true;
    },
  );
