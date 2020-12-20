module.exports = {
  darkMode: 'class',
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.ts',
      './node_modules/@nunt/**/**/*.js'
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        mute: 'var(--color-mute)',
        boundary: 'var(--color-boundary)',
        diff: 'var(--color-diff)',
        blank: 'var(--color-blank)',
        common: 'var(--color-common)',
        accent: 'var(--color-accent)'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%': {transform: 'translate(1px, 1px) rotate(0deg)'},
          '10%': {transform: 'translate(-1px, -2px) rotate(-1deg)'},
          '20%': {transform: 'translate(-2px, 0px) rotate(1deg)'},
          '30%': {transform: 'translate(3px, 2px) rotate(0deg)'},
          '40%': {transform: 'translate(1px, -1px) rotate(1deg)'},
          '50%': {transform: 'translate(-1px, 2px) rotate(-1deg)'},
          '60%': {transform: 'translate(-2px, 1px) rotate(0deg)'},
          '70%': {transform: 'translate(2px, 1px) rotate(-1deg)'},
          '80%': {transform: 'translate(-1px, -1px) rotate(1deg)'},
          '90%': {transform: 'translate(1px, 2px) rotate(0deg)'},
          '100%': {transform: 'translate(0, 0) rotate(0deg)'}
        }
      }
    }
  },
  corePlugins: {
    gradientColorStops: false,
  },
  variants: {},
  plugins: [],
}
