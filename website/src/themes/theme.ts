export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    green: string;
    grey: string;
    navy: string;
    dark: string;
    white: string;
    lightgreen: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    accent: "#ffc107",
    background: "#f8f9fa",
    text: "#343a40",
    green: "#46D200",
    grey: "#474A55",
    navy: "#11142D",
    dark: "#212121",
    white: "#fff",
    lightgreen: "#F0F7EC",
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Helvetica, sans-serif",
  },
};
