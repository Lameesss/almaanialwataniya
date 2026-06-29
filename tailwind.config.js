/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1360px',
      },
    },
    extend: {
      colors: {
        // Near-black, faintly plum-tinted neutral — primary text & solid UI.
        primary: {
          DEFAULT: '#161018',
          50:  '#f5f4f5',
          100: '#e8e6e9',
          200: '#cfcbd1',
          300: '#aaa3ad',
          400: '#7d7382',
          500: '#5a4f60',
          600: '#443a4a',
          700: '#322a37',
          800: '#221d26',
          900: '#161018',
          950: '#0d090f',
        },
        // Deep plum accent derived from the wordmark (#1e0e14 / #150e1d). Use sparingly.
        plum: {
          DEFAULT: '#6b2d4a',
          50:  '#f6eef3',
          100: '#ead7e2',
          200: '#d6b0c6',
          300: '#bd83a4',
          400: '#a05a82',
          500: '#843c64',
          600: '#6b2d4a',
          700: '#54243a',
          800: '#3d1a2a',
          900: '#2a121d',
          950: '#1a0b12',
        },
        // Repurpose the old `teal`/`mint` keys to neutral/plum so legacy classes don't break.
        teal: { DEFAULT: '#54243a', 600: '#54243a', 700: '#3d1a2a' },
        mint: { DEFAULT: '#a05a82', light: '#bd83a4', dark: '#843c64' },
        ink: {
          DEFAULT: '#161018',
          soft: '#3a313f',
          muted: '#6b6470',
        },
        success: { DEFAULT: '#16A34A', light: '#22C55E' },
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cairo: ['Cairo', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 2px 12px -2px rgba(22, 16, 24, 0.08)',
        card: '0 10px 40px -12px rgba(22, 16, 24, 0.12)',
        'card-hover': '0 24px 60px -18px rgba(107, 45, 74, 0.22)',
        glow: '0 0 0 1px rgba(107, 45, 74, 0.08), 0 18px 50px -20px rgba(107, 45, 74, 0.35)',
        nav: '0 6px 30px -10px rgba(22, 16, 24, 0.18)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #161018 0%, #2a121d 55%, #6b2d4a 120%)',
        'mesh-light':
          'radial-gradient(at 0% 0%, rgba(107,45,74,0.06) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(160,90,130,0.08) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(22,16,24,0.04) 0px, transparent 50%)',
        'grid-pattern':
          'linear-gradient(to right, rgba(22,16,24,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,16,24,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rtl': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'marquee-rtl': 'marquee-rtl 40s linear infinite',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
