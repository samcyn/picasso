import type { Theme } from '@material-ui/core/styles'
import { createStyles } from '@material-ui/core/styles'

import '../InputLabel/styles'
import '../InputBase/styles'
import '../Input/styles'
import '../Menu/styles'
import '../MenuItem/styles'
import '../Loader/styles'
import highlightAutofillStyles from '../InputBase/highlightStyles'

export default (theme: Theme) => {
  const { palette } = theme

  return createStyles({
    root: {
      position: 'relative',
      display: 'inline-flex',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    rootFull: {
      width: '100%',
    },
    rootShrink: {
      width: 'auto',
    },
    rootAuto: {},
    rootDisabled: {
      cursor: 'default',
    },
    select: {
      width: '100%',
      padding: '0.5rem',

      '&:focus': {
        backgroundColor: 'inherit',
      },
    },
    inputWrapper: {
      width: 'inherit',
      outline: 0,
    },
    outlinedInput: {
      backgroundColor: palette.common.white,
      paddingRight: '1.625rem',
    },
    searchOutlinedInput: {
      width: '100%',
    },
    searchInputGutters: {
      padding: '0.375rem 0.5rem 0.5rem 0.5rem',
    },
    nativeInput: {
      padding: 0,
    },
    placeholder: {
      color: palette.grey.main2,
    },
    ...highlightAutofillStyles(theme),
  })
}
