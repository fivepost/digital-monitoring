/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'work': ['Work Sans', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif'],
            },
            colors: {
                primary: '#2D2E41',
                secondary: '#3B3C55',
                stroke: '#555676',
                content: '#948EC6',
                warning: '#FBBF24',
                danger: '#FF3333',
                success: '#79F3AF',
                link: '#3D8DFF',
                bg: '#1F2133',
                // Light Mode colors
                'light-bg': '#fff'
            }, transactionTimingFunction: {
                DEFAULT: 'ease-in-out',
            },
            transitionDuration: {
                DEFAULT: '200ms',
            },
            keyframes: {
                fade: {
                    from: {opacity: 0},
                    to: {opacity: 1},
                },
                scaleIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'scale(0.9)',
                    },
                    '50%': {
                        opacity: 0.3,
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'scale(1)',
                    },
                },
            },
            animation: {
                fade: 'fade .5s ease-in-out',
                scaleIn: 'scaleIn .35s ease-in-out',
            },
        },
    },
    plugins: [],
}
