export interface IPalette {
  main: string;
  contrastText: string;
}

export interface Theme {
  borderRadius: string;
  color: string;
  background: string;
  palette: {
    dark: IPalette;
    light: IPalette;
    primary: IPalette;
    secondary: IPalette;
    success: IPalette;
    info: IPalette;
    warning: IPalette;
    danger: IPalette;
  };
}
//https://loading.io/color/feature/
export const defaultTheme: Theme = {
  borderRadius: '4px',
  color: '#FFF',
  background: '#0E0C0F',
  palette: {
    dark: {
      main: '#0E0C0F',
      contrastText: '#ffffff',
    },
    light: {
      main: '#6a737b',
      contrastText: '#ffffff',
    },
    primary: {
      main: '#00a4e4',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8a7967',
      contrastText: '#ffffff',
    },
    success: {
      main: '#c1d82f',
      contrastText: '#ffffff',
    },
    info: {
      main: '#ffdd00',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#fbb034',
      contrastText: '#ffffff',
    },
    danger: {
      main: '#ff0000',
      contrastText: '#ffffff',
    },
  },
};

export const secondaryTheme: Theme = {
  borderRadius: '4px',
  color: '#FFF',
  background: '#0E0C0F',
  palette: {
    dark: {
      main: '#726a95',
      contrastText: '#ffffff',
    },
    light: {
      main: '#726a95',
      contrastText: '#ffffff',
    },
    primary: {
      main: '#726a95',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
    success: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
    info: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
    danger: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
  },
};
