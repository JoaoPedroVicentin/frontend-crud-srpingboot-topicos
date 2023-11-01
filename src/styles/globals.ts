import { globalCss } from "./stiches.config";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {},

  body: {
    '-webkit-font-smoothing': 'antialiased',
  },

  h1: {
    fontSize: '2xl',
  },

  a: {
    color: 'inherit',
  },

  button: {
    cursor: 'pointer',
  },

  'button, input, textarea': {
    fontFamily: 'inherit',
  },
})