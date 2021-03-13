export const theme = {
  colors: {
    primary: '#3B82F6',
    danger: '#EF4444',
    success: '#10B981',
    warning: '#FCD34D',
    disabled: '#E5E7EB',
  },

  setFocus: (color) => {
    return `
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${color}
      }
    `;
  },
};
