import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import type { StandardProps } from '@toptal/picasso-shared'

const SIZE = 64

type ScaleType = 1 | 2
export interface Props extends StandardProps {
  scale?: ScaleType
  base?: number
}
const SvgAgricultureBlue64 = forwardRef(function SvgAgricultureBlue64(
  props: Props,
  ref: Ref<SVGSVGElement>
) {
  const { className, style = {}, scale, base, 'data-testid': testId } = props
  const scaledSize = base || SIZE * Math.ceil(scale || 1)

  const svgStyle = {
    minWidth: `${scaledSize}px`,
    minHeight: `${scaledSize}px`,
    ...style,
  }

  return (
    <svg
      viewBox='0 0 64 64'
      fill='none'
      className={className}
      style={svgStyle}
      ref={ref}
      data-testid={testId}
    >
      <g clipPath='url(#a)'>
        <path
          opacity={0.15}
          d='M60.745 17.059A12.041 12.041 0 0 1 48.704 29.1 12.041 12.041 0 0 1 60.745 17.06ZM60.745 31.008a12.041 12.041 0 0 1-12.041 12.04 12.041 12.041 0 0 1 12.041-12.04ZM60.745 44.956a12.041 12.041 0 0 1-12.041 12.041 12.041 12.041 0 0 1 12.041-12.04ZM27.338 44.956a12.041 12.041 0 0 1-12.042 12.041 12.041 12.041 0 0 1 12.042-12.04ZM27.338 31.008a12.041 12.041 0 0 1-12.042 12.04 12.041 12.041 0 0 1 12.042-12.04ZM27.338 17.059A12.041 12.041 0 0 1 15.296 29.1 12.041 12.041 0 0 1 27.338 17.06Z'
          fill='#183A9E'
        />
        <path
          d='M49.204 29.6h-.5a12.555 12.555 0 0 1-12.541-12.54v-.5h.5a12.556 12.556 0 0 1 12.54 12.54v.5Zm-12.03-12.03A11.557 11.557 0 0 0 48.193 28.59a11.557 11.557 0 0 0-11.02-11.019Z'
          fill='#204ECF'
        />
        <path
          d='M48.704 29.6h-.5v-.5a12.556 12.556 0 0 1 12.541-12.54h.5v.5A12.556 12.556 0 0 1 48.704 29.6Zm11.53-12.03A11.557 11.557 0 0 0 49.215 28.59 11.557 11.557 0 0 0 60.234 17.57ZM49.204 43.549h-.5a12.556 12.556 0 0 1-12.541-12.542v-.5h.5a12.555 12.555 0 0 1 12.54 12.542v.5Zm-12.03-12.03a11.557 11.557 0 0 0 11.019 11.019 11.557 11.557 0 0 0-11.02-11.02Z'
          fill='#204ECF'
        />
        <path
          d='M48.704 43.549h-.5v-.5a12.556 12.556 0 0 1 12.541-12.542h.5v.5A12.555 12.555 0 0 1 48.704 43.55Zm11.53-12.03a11.557 11.557 0 0 0-11.019 11.019 11.557 11.557 0 0 0 11.019-11.02ZM49.204 57.498h-.5a12.556 12.556 0 0 1-12.541-12.542v-.5h.5a12.556 12.556 0 0 1 12.54 12.542v.5Zm-12.03-12.03a11.557 11.557 0 0 0 11.019 11.018 11.557 11.557 0 0 0-11.02-11.019Z'
          fill='#204ECF'
        />
        <path
          d='M48.704 57.498h-.5v-.5a12.556 12.556 0 0 1 12.541-12.542h.5v.5a12.555 12.555 0 0 1-12.541 12.542Zm11.53-12.03a11.557 11.557 0 0 0-11.019 11.018 11.557 11.557 0 0 0 11.019-11.019Z'
          fill='#204ECF'
        />
        <path
          d='M49.204 56.998h-1v6.709h1v-6.71ZM15.796 57.498h-.5A12.556 12.556 0 0 1 2.755 44.956v-.5h.5a12.555 12.555 0 0 1 12.541 12.542v.5Zm-12.03-12.03a11.557 11.557 0 0 0 11.02 11.018 11.557 11.557 0 0 0-11.02-11.019Z'
          fill='#204ECF'
        />
        <path
          d='M15.296 57.498h-.5v-.5a12.556 12.556 0 0 1 12.541-12.542h.5v.5a12.556 12.556 0 0 1-12.54 12.542Zm11.53-12.03a11.557 11.557 0 0 0-11.018 11.018 11.557 11.557 0 0 0 11.018-11.019ZM15.796 43.549h-.5A12.555 12.555 0 0 1 2.755 31.007v-.5h.5A12.556 12.556 0 0 1 15.796 43.05v.5Zm-12.03-12.03a11.557 11.557 0 0 0 11.02 11.019 11.557 11.557 0 0 0-11.02-11.02Z'
          fill='#204ECF'
        />
        <path
          d='M15.296 43.549h-.5v-.5a12.556 12.556 0 0 1 12.541-12.542h.5v.5a12.556 12.556 0 0 1-12.54 12.542Zm11.53-12.03a11.556 11.556 0 0 0-11.018 11.019 11.557 11.557 0 0 0 11.018-11.02ZM15.796 29.6h-.5A12.556 12.556 0 0 1 2.755 17.06v-.5h.5A12.555 12.555 0 0 1 15.796 29.1v.5ZM3.767 17.57a11.557 11.557 0 0 0 11.02 11.019A11.557 11.557 0 0 0 3.765 17.57Z'
          fill='#204ECF'
        />
        <path
          d='M15.296 29.6h-.5v-.5a12.555 12.555 0 0 1 12.541-12.54h.5v.5a12.555 12.555 0 0 1-12.54 12.54Zm11.53-12.03A11.557 11.557 0 0 0 15.808 28.59 11.557 11.557 0 0 0 26.826 17.57ZM15.296 18.443l-.353-.354a12.542 12.542 0 0 1 0-17.735L15.297 0l.353.354a12.556 12.556 0 0 1 0 17.735l-.354.354Zm0-17.013a11.542 11.542 0 0 0 0 15.583 11.558 11.558 0 0 0 0-15.583ZM48.704 18.443l-.354-.354a12.556 12.556 0 0 1 0-17.735L48.704 0l.353.354a12.542 12.542 0 0 1 0 17.735l-.353.354Zm0-17.013a11.558 11.558 0 0 0 0 15.583 11.542 11.542 0 0 0 0-15.583ZM15.796 56.998h-1v6.709h1v-6.71Z'
          fill='#204ECF'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h64v64.207H0z' />
        </clipPath>
      </defs>
    </svg>
  )
})

SvgAgricultureBlue64.displayName = 'SvgAgricultureBlue64'
export default SvgAgricultureBlue64
