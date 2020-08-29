/* eslint-disable max-len */
export const CreateSubscriptionPlanPayloadError =
  '[{"message":"name: must be at least 3 characters","field":"name"},{"message":"name: is required","field":"name"},{"message":"invoice_period:  must be less than or equal to 31","field":"invoice_period"},{"message":"Invoice Period: must be less than or equal to 31","field":"invoice_period"}]';
export const UpdateSubscriptionPayloadError =
  '[{"message":"name: must be at least 3 characters","field":"name"},{"message":"invoice_period:  must be less than or equal to 31","field":"invoice_period"},{"message":"Invoice Period: must be less than or equal to 31","field":"invoice_period"}]';
export const DeleteSubscriptionPlanError =
  '[{"message":"id:  must be greater than or equal to 3","field":"id"}]';
export const ValidateDayError =
  '[{"message":"invoice_period:  must be less than or equal to 31","field":"invoice_period"},{"message":"Invoice Period: must be less than or equal to 31","field":"invoice_period"}]';
export const ValidateWeekError =
  '[{"message":"Invoice Period: must be less than or equal to 4","field":"invoice_period"}]';
export const ValidateMonthError =
  '[{"message":"Invoice Period: must be less than or equal to 12","field":"invoice_period"}]';
export const ValidateYearError =
  '[{"message":"Invoice Period: must be less than or equal to 5","field":"invoice_period"}]';
export const FindSubscriptionPlanPayloadError =
  '[{"message":"id:  must be greater than or equal to 3","field":"id"}]';
export const FindAllSubscriptionPlanPayloadError =
  '[{"message":"id:  must be greater than or equal to 3","field":"id"},{"message":"id:  must be less than or equal to 1000","field":"limit"}]';
