/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ocean: {
                    deep: "#003B44",
                    light: "#005A68",
                },
                tropical: {
                    teal: "#0F6E6E",
                    mint: "#26A69A",
                },
                sunset: {
                    coral: "#FF6B4A",
                    peach: "#FFAB91",
                },
                sand: {
                    beige: "#F5E6C8",
                    warm: "#E7D4B5",
                },
                forest: {
                    green: "#1F3D2B",
                    emerald: "#2E7D32",
                },
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'parallax': 'parallax 10s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
