/* eslint-disable complexity */
import { useState, useEffect, useCallback } from 'react'
import { Breakpoints } from '@material-ui/core/styles/createBreakpoints'
import useMediaQuery from '@material-ui/core/useMediaQuery'

type BreakpointKeys = 'small' | 'medium' | 'large' | 'extra-large'

type BreakpointsList = {
  [key: string]: number
}

class BreakpointProvider {
  breakpoints: Partial<Breakpoints> = {
    values: {
      xs: 0,
      sm: 0,
      md: 576,
      lg: 768,
      xl: 992
    }
  }

  mediaQueries: {
    [key: string]: string
  }

  constructor() {
    this.mediaQueries = {
      small: `(max-width: ${this.breakpoints.values!.md - 1}px)`,
      medium: `(min-width: ${this.breakpoints.values!.md}px)`,
      large: `(min-width: ${this.breakpoints.values!.lg}px)`,
      'extra-large': `(min-width: ${this.breakpoints.values!.xl}px)`
    }
  }

  disableMobileBreakpoints() {
    this.breakpoints.values!.xs = this.breakpoints.values!.md
    this.breakpoints.values!.sm = this.breakpoints.values!.md

    this.mediaQueries.small = ''
    this.mediaQueries.medium = ''
  }
}

export const PicassoBreakpoints = new BreakpointProvider()

export const breakpointsList: BreakpointsList = {
  small: PicassoBreakpoints.breakpoints.values!.sm,
  medium: PicassoBreakpoints.breakpoints.values!.md,
  large: PicassoBreakpoints.breakpoints.values!.lg,
  'extra-large': PicassoBreakpoints.breakpoints.values!.xl
}

export const screens = (...sizes: BreakpointKeys[]) => {
  const validSizes = sizes.filter(size => PicassoBreakpoints.mediaQueries[size])

  if (validSizes.length === 0) {
    return ''
  }

  const mediaQueries = validSizes
    .map(size => PicassoBreakpoints.mediaQueries[size])
    .join(', ')

  return `@media ${mediaQueries}`
}

const screenSizeToBreakpointKey = (size: number): BreakpointKeys => {
  /**
   * Gets a screen size nickname that corresponds to the given screen size.
   *
   * For the list of breakpoint names and pixel-values we use in designs, check
   * https://picasso.toptal.net/?path=/story/utils-folder--breakpoints
   *
   * @param {number} size Screen size
   */

  const { md, lg, xl } = PicassoBreakpoints.breakpoints.values!

  if (size >= xl) {
    return 'extra-large'
  }

  if (size >= lg) {
    return 'large'
  }

  if (size >= md) {
    return 'medium'
  }

  return 'small'
}

export const isScreenSize = (
  size: keyof BreakpointsList,
  currentSize?: number
): boolean => {
  const sizeToUse = currentSize || window.innerWidth
  const foundBreakpoint = screenSizeToBreakpointKey(sizeToUse)

  return size === foundBreakpoint
}

export const useScreenSize = () => {
  const [size, setSize] = useState(window.innerWidth)

  const updateSize = () => setSize(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return size
}

const useCurrentSize = () => {
  const isMedium = useMediaQuery(screens('medium'), {
    noSsr: true
  })

  const isLarge = useMediaQuery(screens('large'), {
    noSsr: true
  })

  const isExtraLarge = useMediaQuery(screens('extra-large'), {
    noSsr: true
  })

  if (isExtraLarge) {
    return 'extra-large'
  }

  if (isLarge) {
    return 'large'
  }

  if (isMedium) {
    return 'medium'
  }

  return 'small'
}

export const useBreakpoint = (sizes: BreakpointKeys[] | BreakpointKeys) => {
  const currentSize = useCurrentSize()

  return [].concat(sizes).includes(currentSize)
}

/**
 * Returns a function that picks a value from a {screenSize=>anyValue} object map.
 *
 * The function returned accepts 2 arguments:
 * 1. An object mapping values to screen size nicknames, e.g.
 *   {small: 'secondary', large: 'positive'}
 * 2. A default value to use if no keys match in the object
 *
 * The function returns a value from the first argument that corresponds to the current
 * screen size, or the default value, if no corresponding key found.
 *
 * The returned function is memoized per screen size name.
 *
 * @example <caption>Varying both `variant` prop and button text with using the hook</caption>
 * const screens = useScreens()
 * <Button
 *   variant={screens(
 *     {
 *       small: 'secondary',
 *       large: 'positive'
 *     },
 *     'primary'
 *   )}
 * >
 * {screens(
 *   {
 *     small: 'small (secondary)',
 *     large: 'large (positive)'
 *   },
 *   'default (primary)'
 * )}
 * </Button>
 */
export const useScreens = <T = unknown>() => {
  // Get current screen size in pixels, e.g. 800
  const currentSize = useScreenSize()

  // Convert the retrieved screen size in pixels (e.g. 800)
  // to its corresponding screen size name (e.g. 'large')
  const screenKey = screenSizeToBreakpointKey(currentSize)

  // For every screenKey value, memoize the instance of a function
  // that picks a property from an object by screen name,
  // and return this memoized version of the function.
  return useCallback(
    (
      valuesByScreen: Partial<Record<BreakpointKeys, T>>,
      defaultValue: T | undefined = undefined
    ) => {
      if (screenKey in valuesByScreen) {
        return valuesByScreen[screenKey]
      }

      return defaultValue
    },
    [screenKey]
  )
}

export default PicassoBreakpoints.breakpoints
