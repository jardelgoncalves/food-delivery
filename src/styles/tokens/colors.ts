import type { Colors } from 'interfaces/colors';

export const colors: Colors = {
  brand: {
    primary: {
      main: 'hsla(360, 90%, 62%, 1)',
    },
    secondary: {
      main: 'hsla(205, 95%, 62%, 1)',
    },
    tertiary: {
      main: 'hsla(258, 85%, 47%, 1)',
    },
  },
  grayscale: {
    dark: {
      main: 'hsla(0, 0%, 18%, 1)',
    },
    greyDark: {
      main: 'hsla(0, 0%, 32%, 1)',
    },
    greyMedium: {
      main: 'hsla(0, 0%, 61%, 1)',
    },
    grey: {
      main: 'hsla(0, 0%, 79%, 1)',
    },
    greyLight: {
      main: 'hsla(229, 39%, 96%, 1)',
    },
    greyVeryLight: {
      main: 'hsla(240, 100%, 99%, 1)',
    },
    offWhite: {
      main: 'hsla(0, 0%, 100%, 1)',
    },
  },
  feedback: {
    success: {
      main: 'hsla(164, 95%, 43%, 1)',
    },
    warning: {
      main: 'hsla(43, 93%, 60%, 1)',
    },
    error: {
      main: 'hsla(346, 84%, 49%, 1)',
    },
  },
} as const;
