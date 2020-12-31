module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'boost-primary': '#FF8800',
        'boost-primary-light': '#FFB980',
        'boost-primary-dark': '#955D3B',
        'boost-primary-30': '#FFDCB2',
        'boost-primary-15': '#FFEDD9',
        'boost-secondary': '#1F344C',
        'boost-secondary-light': '#828995',
        'boost-secondary-dark': '#151D28',
        'boost-secondary-70': '#667285',
        'boost-secondary-50': '#9099A8',
        'boost-secondary-30': '#BCC2CB',
        'boost-secondary-20': '#D2D8DE',
        'boost-secondary-15': '#DEE2E7',
        'boost-secondary-10': '#E9EDF1',
        'boost-secondary-05': '#F5F8FA',
        'boost-secondary-fade-10': 'rgba(92, 113, 138, 0.1)',
        'boost-secondary-fade-05': 'rgba(92, 113, 138, 0.05)',
        'boost-success': '#5EB575',
        'boost-success-dark': '#47995c',
        'boost-success-light': '#81c593',
        'boost-danger': '#C23D3D',
        'boost-danger-dark': '#9b3131',
        'boost-danger-light': '#ce6464',
        'boost-warning': '#FFC017',
        'boost-warning-dark': '#e3a500',
        'boost-warning-light': '#ffce4a',
        'boost-gray': '#BCC2CB',
        'boost-gray-light': '#DEE2E7',
        'boost-gray-light2': '#F5F8FA',
        'boost-gray-dark': '#1F344C',
        'boost-gray-dark2': '#151D28',
        'boost-gray-30': 'rgba(188, 194, 203, 0.3)',
        'boost-gray-10': 'rgba(144, 153, 168, 0.1)',
        'boost-blue': '#69ACCB',
        'boost-blue-dark': '#4397be',
        'boost-blue-light': '#8fc1d8',
        'boost-white': '#FFFFFF',
        'boost-white-30': 'rgba(255, 255, 255, 0.3)',
        'boost-white-70': 'rgba(255, 255, 255, 0.7)',
        'lm-green': '#5EB575',
        'color-black': '#000000',
        'color-slate-gray': '#757F8F',
        'color-blue-gray': '#7997C9',
        'color-electric-indigo': '#6519FA',
        'color-midnight-blue': '#1D196E',
        'color-mint': '#70B08B',
        'color-yellow-green': '#A8CA45',
        'color-selective-yellow': '#EDBE30',
        'color-copper': '#A7783B',
        'color-orange-red': '#DE5E1C',
        'color-carmine': '#80231C',
        'color-red': '#F70303',
        'color-fandango': '#9E4487',
        'color-fandango-dark': '#7a3569',
        'color-fandango-light': '#b95ca1',
        'color-fandango-25': 'rgba(158, 68, 135, 0.25)',
        'color-magenta': '#DC438F',
        'color-magenta-dark': '#c72575',
        'color-magenta-light': '#e46ea9',
      },
      fontSize: {
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        30: '30px',
        36: '36px',
      },
    },
  },
  variants: {
    margin: ['responsive', 'hover'],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
