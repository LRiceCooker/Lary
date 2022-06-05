export default interface ThemeContextType {
  color: {
    PRIMARY?: string;
    SECONDARY?: string;
    SUCCESS?: string;
    DANGER?: string;
    WARNING?: string;
    INFO?: string;
    LIGHT?: string;
    DARK?: string;
    WHITE?: string;
    MUTED?: string;
  };

  layout: {
    FLEX: {
      '1'?: number;
      '2'?: number;
      '3'?: number;
      '4'?: number;
      '5'?: number;
      '6'?: number;
      '7'?: number;
      '8'?: number;
    };
    FLEX_BASIS: {
      '1'?: string | number;
      '2'?: string | number;
      '3'?: string | number;
      '4'?: string | number;
      '5'?: string | number;
      '6'?: string | number;
      '7'?: string | number;
      '8'?: string | number;
    };
  };

  position: {
    '1'?: string | number;
    '2'?: string | number;
    '3'?: string | number;
    '4'?: string | number;
    '5'?: string | number;
    '6'?: string | number;
    '7'?: string | number;
    '8'?: string | number;
  };
  shape: {
    BORDER_RADIUS?: {
      '1'?: number;
      '2'?: number;
      '3'?: number;
      '4'?: number;
      '5'?: number;
      '6'?: number;
      '7'?: number;
      '8'?: number;
    };
    BORDER_WIDTH?: {
      '1'?: number;
      '2'?: number;
      '3'?: number;
      '4'?: number;
      '5'?: number;
      '6'?: number;
      '7'?: number;
      '8'?: number;
    };
    PADDING?: {
      '1'?: number | string;
      '2'?: number | string;
      '3'?: number | string;
      '4'?: number | string;
      '5'?: number | string;
      '6'?: number | string;
      '7'?: number | string;
      '8'?: number | string;
    };
  };
  spacing: {
    '1'?: string | number;
    '2'?: string | number;
    '3'?: string | number;
    '4'?: string | number;
    '5'?: string | number;
    '6'?: string | number;
    '7'?: string | number;
    '8'?: string | number;
  };
  typography: {
    xs?: string | number;
    sm?: string | number;
    base?: string | number;
    lg?: string | number;
    xl?: string | number;
    '2xl'?: string | number;
    '3xl'?: string | number;
    '4xl'?: string | number;
  };
}
