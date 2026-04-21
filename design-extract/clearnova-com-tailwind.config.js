/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        'neutral-50': '#000000',
        'neutral-100': '#ffffff',
        'neutral-200': '#595959',
        'neutral-300': '#161616',
        'neutral-400': '#474747',
        'neutral-500': '#e2e2e2',
        'neutral-600': '#f6f6f6',
        'neutral-700': '#826c6c',
        'neutral-800': '#767676',
        'neutral-900': '#c1c1c1',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        body: [
            'monospace',
            'sans-serif'
        ],
        heading: [
            'Montserrat',
            'sans-serif'
        ]
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: '18px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: 'normal',
                letterSpacing: '0.994px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '22': [
            '22px',
            {
                lineHeight: '27.5px'
            }
        ],
        '13.3333': [
            '13.3333px',
            {
                lineHeight: 'normal'
            }
        ]
    },
    spacing: {
        '0': '1px',
        '1': '16px',
        '2': '23px',
        '3': '40px',
        '4': '48px',
        '5': '56px',
        '6': '193px'
    },
    borderRadius: {
        xs: '2px',
        md: '7px',
        full: '48px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0.3) 0px 2px 6px 0px'
    },
    screens: {
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    },
    transitionDuration: {
        '150': '0.15s',
        '200': '0.2s',
        '300': '0.3s',
        '1000': '1s',
        '1500': '1.5s'
    },
    transitionTimingFunction: {
        default: 'ease'
    },
    container: {
        center: true,
        padding: '24px'
    },
    maxWidth: {
        container: '100%'
    }
},
  },
};
