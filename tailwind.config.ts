import type { Config } from 'tailwindcss'
import variables from './variables'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray_x_dark': variables.gray_x_dark,
        'gray_dark': variables.gray_dark,
        'gray_medium': variables.gray_medium,
        'gray_light': variables.gray_light,
        'gray_x_light': variables.gray_x_light,
        'gray_white': variables.gray_white,
        'brand_xx_dark': variables.brand_xx_dark,
        'brand_x_dark': variables.brand_x_dark,
        'brand_dark': variables.brand_dark,
        'brand_medium': variables.brand_medium,
        'brand_light': variables.brand_light,
        'brand_x_light': variables.brand_x_light,
      },
      fontSize: {
        'desktop_h1': variables.desktop_h1,
        'desktop_h2': variables.desktop_h2,
        'desktop_h3': variables.desktop_h3,
        'desktop_h4': variables.desktop_h4,
        'mobile_h1': variables.mobile_h1,
        'mobile_h2': variables.mobile_h2,
        'mobile_h3': variables.mobile_h3,
        'mobile_h4': variables.mobile_h4,
        'body_1': variables.body_1,
        'body_2': variables.body_2,
      },
      dimension: {
        'home-img': '1024px'
      }
    },
  },
  plugins: [],
}
export default config
