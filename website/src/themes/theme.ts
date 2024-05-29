export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
  }
  
  export const theme: Theme = {
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
      accent: '#ffc107',
      background: '#f8f9fa',
      text: '#343a40',
    },
    fonts: {
      body: 'Arial, sans-serif',
      heading: 'Helvetica, sans-serif',
    },
  };
  