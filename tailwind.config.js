/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Butler: 'var(--font-butler)',
                Wittgenstein: 'Wittgenstein, serif',
            },
        },
    },
    plugins: [],
};
