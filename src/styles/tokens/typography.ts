const fallback = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`;

export const typography = {
  family: {
    primary: `'Montserrat', ${fallback}`,
    secondary: `'Work Sans', ${fallback}`,
  },
  size: {
    base: '1rem', // 16px
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1.125rem', // 18px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
    '2xl': '2rem', // 32px
    '3xl': '2.125rem', // 34px
    '4xl': '2.5rem', // 40px
  },
} as const;
