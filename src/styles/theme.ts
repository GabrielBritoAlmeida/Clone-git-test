export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },

  border: {
    radius: '0.4rem',
    xradius: '0.8rem',
    xxradius: '1.2rem'
  },

  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem'
    }
  },

  colors: {
    primary: '#0366d6',
    secondary: '#6a737d',
    black: '#24292e',
    background: '#fafbfc',
    backgroundFooter: '#565a5f',
    topic: '#f1f8ff'
  },

  spacings: {
    min: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.2rem',
    small: '1.6rem',
    medium: '2rem',
    large: '2.4rem',
    xlarge: '2.8rem',
    xxlarge: '3.2rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
