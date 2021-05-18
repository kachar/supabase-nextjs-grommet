import { ThemeType } from 'grommet'

export const customTheme: ThemeType = {
  global: {
    focus: {
      outline: {
        size: '0',
      },
    },
    colors: {
      brand: '#0B3142',
      focus: '#0B3142',
      'accent-1': '#0B3142',
      'accent-2': '#E76F51',
      'accent-3': '#264653',
      'accent-4': '#F4A261',
      'neutral-1': '#606c38',
      'neutral-2': '#1d3557',
      'neutral-3': '#457b9d',
      'status-critical': '#e63946',
      'status-error': '#e63946',
      'status-warning': '#F4A261',
      'status-ok': '#2A9D8F',
    },
  },
  formField: {
    label: {
      size: 'xsmall',
      requiredIndicator: '*',
    },
    error: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      size: 'xsmall',
    },
    round: 'small',
    border: {
      side: 'all',
    },
  },
  rangeInput: {
    track: {
      color: 'brand',
    },
  },
}
export default customTheme
