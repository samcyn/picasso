import React from 'react'
import type { SwitchProps } from '@toptal/picasso'
import { Switch as PicassoSwitch, Form as PicassoForm } from '@toptal/picasso'

import type { FieldProps } from '../Field'
import PicassoField from '../Field'

export type FormSwitchProps = Omit<SwitchProps, 'onChange'> & {
  onChange?: SwitchProps['onChange']
}
export type Props = FormSwitchProps & FieldProps<SwitchProps['value']>

export const Switch = (props: Props) => (
  <PicassoField<FormSwitchProps>
    {...props}
    type='checkbox'
    label={
      props.label ? (
        <PicassoForm.Label htmlFor={props.id} titleCase={props.titleCase}>
          {props.label}
        </PicassoForm.Label>
      ) : null
    }
  >
    {({
      // omitting highlight from inputProps
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      highlight,
      ...inputProps
    }: SwitchProps & { highlight?: 'autofill' }) => {
      return <PicassoSwitch {...inputProps} />
    }}
  </PicassoField>
)

Switch.defaultProps = {}

Switch.displayName = 'Switch'

export default Switch
