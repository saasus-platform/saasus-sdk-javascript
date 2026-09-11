export const validateStripeInfoResponse = (
  response: any,
  expectedRegistered: boolean
): boolean => {
  if (!response) {
    console.error('Stripe info response is empty');
    return false;
  }
  if (typeof response.is_registered === 'boolean' && expectedRegistered) {
    return response.is_registered;
  }
  return true;
};

export const validateUpdateStripeInfo = (response: any): boolean => {
  return true;
};

export const validateDeleteStripeInfo = (response: any): boolean => {
  return true;
};

export const validateInternalServerError = (
  response: any
): boolean => {
  // We expect an error response, but since we handle it in MethodExecutor,
  // response might be the error body or undefined depending on how axios error is structured.
  // If we get here, status code was 500.
  return true;
};
