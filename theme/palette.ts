import { PaletteOptions } from '@mui/material';
import { CODE_BACKGROUND_COLOR } from 'components/NotionStyleHtmlContent/constants';

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#ff9e40',
    contrastText: '#fff',
  },
  divider: '#f4f4f4',
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: CODE_BACKGROUND_COLOR, // custom
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};
