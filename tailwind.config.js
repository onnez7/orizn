/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf3ff',
          100: '#d7e5ff',
          200: '#b0caff',
          300: '#80a6ff',
          400: '#4f7dff',
          500: '#0c5bff',
          600: '#0a49d6',
          700: '#093aa6',
          800: '#072d7a',
          900: '#061e4d',
          950: '#051633',
        },
        night: {
          900: '#07162e',
          950: '#041022',
        },
      },
      fontFamily: {
        sora: ['Sora', 'ui-sans-serif', 'system-ui'],
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(12, 91, 255, 0.25)',
        card: '0 20px 50px rgba(3, 10, 25, 0.45)',
      },
      backgroundImage: {
        'grid-soft':
          'linear-gradient(0deg, rgba(10, 91, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 91, 255, 0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
