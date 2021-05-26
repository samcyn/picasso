import React from 'react'
import { LabelProps } from 'recharts'

export type Props = {
  value?: LabelProps['value']
  viewBox?: { width?: number; x?: number; y?: number }
  getBarLabelColor?: (entry: { dataKey: string; index?: number }) => string
  shouldShow: (entry: { dataKey: string; index?: number }) => boolean
  dataKey: string
  index?: number
}

const BarChartLabel = ({
  value,
  viewBox,
  getBarLabelColor,
  shouldShow,
  ...restProps
}: Props) => {
  const width = viewBox?.width ?? 0
  const xPosition = viewBox?.x ?? 0
  const yPosition = viewBox?.y ?? 0

  const fillColor = getBarLabelColor?.(restProps)

  return shouldShow(restProps) ? (
    <text
      x={xPosition + width / 2}
      y={yPosition}
      fill={fillColor}
      // eslint-disable-next-line no-inline-styles/no-inline-styles
      style={{ fontSize: 11 }}
      textAnchor='middle'
      dy={-6}
    >
      {value}
    </text>
  ) : null
}

export default BarChartLabel
