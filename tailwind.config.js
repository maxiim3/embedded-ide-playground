import defaultTheme from 'tailwindcss/defaultTheme';
import DaisyUITheme from "./lib/themes";
// import { colors as customColors } from './lib/colors';
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    // Purge unused styles for better performance
    purge: {
        content: [
            './pages/**/*.{ts,tsx}',
            './components/**/*.{ts,tsx}',
            './app/**/*.{ts,tsx}',
            './src/**/*.{ts,tsx}',
        ],
        options: {
            safelist: [], // 👈 add this for any classes you DON'T want to purge
        },
    },
    darkMode: ['class'],
    // 👇 Future-proofing and modern browser compatibility
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    plugins: [
        require('tailwindcss-animate'),
        require('tailwindcss-text-balance'),
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                // ...customColors,
                ...defaultTheme.colors,
            },
            aspectRatio: {
                portrait: '9/16',
                ...defaultTheme.aspectRatio,
            },
            screens: {
                xs: '475px',
                ...defaultTheme.screens,
            },
            width: {
                128: '32rem',
                144: '36rem',
                ...defaultTheme.width,
            },
            height: {
                128: '32rem',
                144: '36rem',
                ...defaultTheme.height,
            },
            spacing: {
                128: '32rem',
                144: '36rem',
                ...defaultTheme.spacing,
            },
            fontSize: {
                'xl-fluid': ['clamp(12px, 8.57vw, 96px)'],
                'lg-fluid': ['clamp(8px, 4.2vw, 32px)'],
                'md-fluid': ['clamp(8px, 3.5vw, 24px)'],
                'sm-fluid': ['clamp(8px, 3.5vw, 16px)'],
                '2xs': [
                    '0.5rem',
                    {
                        lineHeight: '0.8rem',
                    },
                ],
                '3xs': [
                    '0.3rem',
                    {
                        lineHeight: '0.75rem',
                    },
                ],
                ...defaultTheme.fontSize,
            },
            // 👇 Custom animation definitions
            animation: {
                // ... other custom animations
            },
            // 👇 Custom keyframes
            keyframes: {
                // ... other custom keyframes
            },
            fontFamily: {
                ...defaultTheme.fontFamily,
            },
        },
    },
    daisyui: {
        themes: [
            {
                // customTheme: DaisyUITheme.from({})
            },
        ],
        darkTheme: false,
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI customColors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not Tailwind colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
};
