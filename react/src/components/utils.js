export const getDisplayName = component => {
  return component.displayName || component.name || 'Component';
};
