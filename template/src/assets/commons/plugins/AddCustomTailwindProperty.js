import plugin from 'tailwindcss/plugin';

const newPlugin = plugin(function ({ addVariant, e }) {
  addVariant('typed', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`typed${separator}${className}`)}:not(:focus):not(:placeholder-shown)`;
    });
  });
});

export default newPlugin;
