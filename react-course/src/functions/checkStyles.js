function checkStyles(prop) {
  if (prop) {
    return {
      label: {
        textDecoration: 'line-through',
        color: '#cbc1c1',
        textTransform: 'uppercase',
      },
    };
  }
  return {
    label: {
      textTransform: 'uppercase',
    },
  };
}

export { checkStyles };
