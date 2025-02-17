import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import type { StandardProps } from '@toptal/picasso-shared'

const SIZE = 64

type ScaleType = 1 | 2
export interface Props extends StandardProps {
  scale?: ScaleType
  base?: number
}
const SvgEmployeeWhite64 = forwardRef(function SvgEmployeeWhite64(
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
      viewBox='0 0 65 65'
      fill='none'
      className={className}
      style={svgStyle}
      ref={ref}
      data-testid={testId}
    >
      <g clipPath='url(#a)'>
        <path
          opacity={0.3}
          d='M32.02 32.318a6.768 6.768 0 1 0 0-13.536 6.768 6.768 0 0 0 0 13.536ZM32.02 32.318a13.666 13.666 0 0 0-13.666 13.666h27.331A13.667 13.667 0 0 0 32.02 32.318Z'
          fill='#231F20'
        />
        <path
          d='M32.02 32.818a7.269 7.269 0 1 1 7.268-7.269 7.277 7.277 0 0 1-7.268 7.269Zm0-13.537a6.268 6.268 0 1 0 6.268 6.268 6.276 6.276 0 0 0-6.268-6.268Z'
          fill='#fff'
        />
        <path
          d='M46.186 45.984h-1a13.166 13.166 0 0 0-26.332 0h-1a14.166 14.166 0 0 1 28.332 0Z'
          fill='#fff'
        />
        <path
          d='m40.477 64.38-4.127-6.716c-2.864.511-5.796.51-8.659-.004l-4.13 6.72-.366-.104c-3.497-1-6.798-2.59-9.76-4.7l-.31-.22 2.684-7.434a24.534 24.534 0 0 1-5.388-6.756l-7.844.963-.146-.351A31.974 31.974 0 0 1 .02 35.215L0 34.836l7.498-2.54a24.368 24.368 0 0 1 1.916-8.413l-5.65-5.54.183-.333a31.974 31.974 0 0 1 6.755-8.47l.284-.253 6.659 4.276a24.353 24.353 0 0 1 7.776-3.75l.808-7.867.373-.064a31.977 31.977 0 0 1 10.835 0l.375.064.806 7.86a24.348 24.348 0 0 1 7.788 3.749l6.647-4.268.284.252a31.954 31.954 0 0 1 6.755 8.471l.182.333-5.633 5.524a24.366 24.366 0 0 1 1.923 8.436l7.475 2.534-.02.378a31.967 31.967 0 0 1-2.41 10.563l-.147.35-7.823-.96a24.528 24.528 0 0 1-5.403 6.77l2.678 7.417-.31.22a31.944 31.944 0 0 1-9.761 4.701l-.366.105ZM14.325 58.98a30.963 30.963 0 0 0 8.783 4.23l4.093-6.66.34.066c2.96.574 6.002.575 8.962.004l.339-.065 4.09 6.654a30.941 30.941 0 0 0 8.784-4.23L47.06 51.63l.263-.225a23.515 23.515 0 0 0 5.591-7.005l.161-.307 7.752.951a30.962 30.962 0 0 0 2.17-9.504l-7.407-2.51-.012-.346a23.37 23.37 0 0 0-1.991-8.73l-.14-.317 5.582-5.474a30.948 30.948 0 0 0-6.077-7.622l-6.587 4.23-.277-.208a23.374 23.374 0 0 0-8.06-3.879l-.335-.088-.8-7.789a30.972 30.972 0 0 0-9.748 0l-.801 7.796-.335.088a23.376 23.376 0 0 0-8.048 3.88l-.277.207-6.6-4.237A30.941 30.941 0 0 0 5.01 18.16l5.598 5.49-.14.317a23.388 23.388 0 0 0-1.984 8.707l-.011.346-7.43 2.518c.217 3.262.949 6.47 2.169 9.504l7.772-.953.16.306a23.559 23.559 0 0 0 5.578 6.994l.262.224-2.659 7.365Z'
          fill='#fff'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path
            fill='#fff'
            transform='translate(0 .859)'
            d='M0 0h64.039v64H0z'
          />
        </clipPath>
      </defs>
    </svg>
  )
})

SvgEmployeeWhite64.displayName = 'SvgEmployeeWhite64'
export default SvgEmployeeWhite64
