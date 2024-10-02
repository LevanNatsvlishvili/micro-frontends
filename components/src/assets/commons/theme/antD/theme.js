import colors from '../tailwind/colors';

export const antdCustomTheme = {
  token: {
    colorPrimary: '#FBC322',
  },
  components: {
    Button: {
      controlHeightSM: 32,
      controlHeight: 40,
      controlHeightLG: 46,

      paddingInlineSM: 12,
      paddingInline: 16,
      paddingInlineLG: 24,

      fontSizeSM: 12,
      fontSize: 14,
      fontSizeLG: 14,

      onlyIconSize: 20,
      onlyIconSizeLG: 20,
      onlyIconSizeSM: 20,
      fontWeight: '500',
    },

    Input: {
      controlHeightSM: 32,
      controlHeight: 40,
      controlHeightLG: 46,

      paddingInlineSM: 16,
      paddingInline: 16,
      paddingInlineLG: 16,

      fontSizeSM: 12,
      fontSize: 14,
      fontSizeLG: 14,
    },
    Alert: {
      colorTextHeading: colors.dark[900],
      colorText: colors.dark[300],
      colorIcon: '#C7C8CA',

      colorSuccess: '#5DB975',
      colorSuccessBg: colors.green[40],
      colorSuccessBorder: colors.green[80],

      colorInfo: colors.dark[700],
      colorInfoBg: colors.dark[30],
      colorInfoBorder: colors.dark[60],

      colorWarning: colors.yellow[900],
      colorWarningBg: '#FFFBE6',
      colorWarningBorder: colors.yellow[80],

      colorError: '#FF4D4D',
      colorErrorBg: colors.red[40],
      colorErrorBorder: colors.red[200],

      fontSize: 14,
      lineHeight: '2rem',
      defaultPadding: '1rem 1.6rem',
      withDescriptionPadding: '0.9rem 1.6rem',
    },
    Checkbox: {
      colorBorder: colors.grey[900],
      colorPrimary: colors.yellow[900],
      colorBgContainerDisabled: colors.yellow[30],

      colorText: colors.dark[900],
      colorTextDisabled: colors.grey[900],

      borderRadiusSM: 2,
      fontSize: 14,
      lineHeight: '18px',
    },
    Radio: {
      buttonColor: colors.dark[900],
      colorBorder: colors.grey[800],
      colorPrimary: colors.yellow[900],

      dotColorDisabled: colors.grey[800],
      colorTextDisabled: colors.grey[900],
      dotSize: 8,
      fontSize: 14,
      lineHeight: '18px',
    },
    DatePicker: {
      colorTextPlaceholder: colors.dark[900],
      colorBorder: colors.dark[40],
      activeBorderColor: colors.dark[50],
      hoverBorderColor: colors.dark[50],
      cellHoverBg: colors.yellow[900],
      colorIcon: colors.grey[900],

      dotSize: 8,
      fontSize: 14,
      lineHeight: '18px',
      controlHeightSm: 20,
      controlHeight: 28,
      controlHeightLg: 32,
    },
    Switch: {
      colorPrimary: colors.yellow[900],
      opacityLoading: 0.4,
    },
    Select: {
      fontSize: 14,
      lineHeight: '18px',
      controlHeightSM: 32,
      controlHeight: 40,
      controlHeightLG: 46,
      colorBorder: colors.green[400],
      colorPrimary: colors.green[400],
      colorBgContainer: colors.green[400],
      clearBg: colors.green[400],
      optionActiveBg: colors.green[400],
    },
    Dropdown: {
      fontSize: 14,
      fontSizeIcon: 20,
      colorText: colors.dark[300],
      controlPaddingHorizontal: 20,
      paddingXXS: 0,
      paddingXS: 0,
      controlItemBgHover: colors.yellow[30],
    },
  },
};
