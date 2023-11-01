import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss, theme } = createStitches({
  theme: {
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    colors: {
      white100: '#FFFFFF',
      white200: '#F5f5f5',

      black: '#000000',
      green: '#005652',
      blue: '#007EB4',

      gray100: '#0c1618',
      gray200: '#A6A6A6',
    },
  },
})