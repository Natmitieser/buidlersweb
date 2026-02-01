/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'buidlers-black': '#10100F',      // Chinese Black
                'buidlers-yellow': '#F1E65D',     // Corn / Main
                'buidlers-text': '#FFFEF0',       // Ivory
                'buidlers-dim': '#484736',        // Rifle Green / Dim borders
                'buidlers-gray': '#9D9A72',       // Artichoke / Secondary text
                'syntax-orange': '#F57A0C',
                'syntax-green': '#10B068',
                'syntax-blue': '#3A7CC1',
            },
            fontFamily: {
                mono: ['"Pixel Operator Mono"', '"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
}
