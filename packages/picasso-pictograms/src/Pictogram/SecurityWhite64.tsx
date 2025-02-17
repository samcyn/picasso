import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import type { StandardProps } from '@toptal/picasso-shared'

const SIZE = 64

type ScaleType = 1 | 2
export interface Props extends StandardProps {
  scale?: ScaleType
  base?: number
}
const SvgSecurityWhite64 = forwardRef(function SvgSecurityWhite64(
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
          opacity={0.3}
          d='m42.24 36.968 3.736.459a15.138 15.138 0 0 0 1.139-4.99l-3.57-1.21a11.492 11.492 0 0 0-.976-4.278l2.691-2.638a15.136 15.136 0 0 0-3.19-4.002l-3.175 2.04a11.503 11.503 0 0 0-3.95-1.902l-.386-3.754a15.145 15.145 0 0 0-5.118 0l-.386 3.757a11.504 11.504 0 0 0-3.944 1.902l-3.18-2.043a15.138 15.138 0 0 0-3.19 4.002l2.698 2.646a11.494 11.494 0 0 0-.973 4.267l-3.58 1.213a15.138 15.138 0 0 0 1.138 4.99l3.747-.46a11.592 11.592 0 0 0 2.732 3.427l-1.282 3.55c1.4.996 2.96 1.747 4.611 2.22l1.973-3.21c1.45.283 2.94.283 4.39.002l1.973 3.208a15.135 15.135 0 0 0 4.61-2.22L39.5 40.401a11.59 11.59 0 0 0 2.74-3.433Z'
          fill='#231F20'
        />
        <path
          d='m32 64.084-15.202-7.217A17.672 17.672 0 0 1 6.75 40.975V2.843h13.813c2.239 0 4.462-.38 6.573-1.126L32 0l4.864 1.717a19.698 19.698 0 0 0 6.574 1.126H57.25v38.132a17.672 17.672 0 0 1-10.048 15.892L32 64.084ZM7.75 3.843v37.132a16.668 16.668 0 0 0 9.477 14.989L32 62.977l14.773-7.013a16.668 16.668 0 0 0 9.477-14.99V3.844H43.438A20.703 20.703 0 0 1 36.53 2.66l-4.53-1.6-4.532 1.6a20.702 20.702 0 0 1-6.906 1.183H7.75Z'
          fill='#fff'
        />
        <path
          d='m35.941 46.75-1.993-3.242c-1.29.21-2.605.21-3.895-.001l-1.994 3.242-.365-.104a15.608 15.608 0 0 1-4.763-2.293l-.309-.22 1.295-3.587a12.027 12.027 0 0 1-2.423-3.04l-3.786.464-.145-.35a15.576 15.576 0 0 1-1.177-5.154l-.02-.379 3.617-1.227c.08-1.3.37-2.578.863-3.784l-2.727-2.673.183-.333a15.596 15.596 0 0 1 3.296-4.132l.283-.253 3.214 2.063a11.944 11.944 0 0 1 3.498-1.687l.39-3.796.374-.064c1.75-.3 3.537-.3 5.287 0l.374.064.389 3.793c1.252.367 2.436.937 3.504 1.686l3.208-2.06.283.254a15.596 15.596 0 0 1 3.296 4.132l.183.333-2.718 2.665a11.95 11.95 0 0 1 .865 3.796l3.607 1.223-.021.379a15.576 15.576 0 0 1-1.176 5.154l-.146.35-3.775-.463a12.01 12.01 0 0 1-2.431 3.046l1.292 3.58-.31.22a15.605 15.605 0 0 1-4.762 2.293l-.365.104Zm-1.5-4.35 1.952 3.175a14.597 14.597 0 0 0 3.785-1.823l-1.266-3.506.263-.225a11.035 11.035 0 0 0 2.622-3.285l.16-.306 3.698.454c.508-1.313.823-2.693.935-4.096l-3.534-1.198-.011-.346a10.978 10.978 0 0 0-.933-4.093l-.14-.317 2.663-2.611a14.595 14.595 0 0 0-2.62-3.285l-3.141 2.018-.278-.207a10.972 10.972 0 0 0-3.778-1.818l-.335-.088-.382-3.716a14.563 14.563 0 0 0-4.201 0l-.383 3.719-.334.088a10.968 10.968 0 0 0-3.773 1.819l-.278.206-3.148-2.021a14.598 14.598 0 0 0-2.62 3.285l2.672 2.619-.14.317a10.96 10.96 0 0 0-.93 4.081l-.011.346-3.545 1.202c.113 1.403.427 2.783.935 4.096l3.709-.455.16.306a11.034 11.034 0 0 0 2.614 3.28l.262.224-1.268 3.514c1.168.786 2.443 1.4 3.786 1.822l1.953-3.177.339.066c1.388.269 2.814.27 4.202.001l.339-.065Z'
          fill='#fff'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h64v64.084H0z' />
        </clipPath>
      </defs>
    </svg>
  )
})

SvgSecurityWhite64.displayName = 'SvgSecurityWhite64'
export default SvgSecurityWhite64
