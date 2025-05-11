export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    100: 'rgb(var(--color-gray-100) / <alpha-value>)',
                    200: 'rgb(var(--color-gray-200) / <alpha-value>)',
                    700: 'rgb(var(--color-gray-700) / <alpha-value>)',
                    800: 'rgb(var(--color-gray-800) / <alpha-value>)',
                    muted: 'rgb(var(--color-gray-muted) / <alpha-value>)',
                },
                'dark-green': 'rgb(var(--color-dark-green) / <alpha-value>)',
                'border-color': 'rgb(var(--color-border-color) / <alpha-value>)',
              },
            fontSize: {
                sm: ['var(--font-size-sm)', '1.5'],
                md: ['var(--font-size-md)', '1.5'],
                lg: ['var(--font-size-lg)', '1.5'],
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Noto Serif', 'serif'],
              },
        },
    },
    plugins: [],
};