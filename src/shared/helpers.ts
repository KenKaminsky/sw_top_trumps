export const camelCaseToSentenceCase = (camelCaseString: string) => {
  const result = camelCaseString.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};
