import React from 'react'
import { Container, Typography } from '@toptal/picasso'
import { FormNonCompound, Input, SubmitButton } from '@toptal/picasso-forms'

const ParseInputExample = () => (
  <FormNonCompound
    onSubmit={values => window.alert(JSON.stringify(values, undefined, 2))}
  >
    <Container bottom='small'>
      <Typography size='medium'>
        I want to trim my first name from the empty spaces:
      </Typography>
    </Container>
    <Container flex alignItems='flex-end'>
      <Input
        name='parseInput-firstName'
        label='First name'
        placeholder='e.g. Bruce'
        parse={(value: string) => value.trim()}
        limit={24}
      />

      <Container left='small'>
        <SubmitButton>Submit</SubmitButton>
      </Container>
    </Container>
  </FormNonCompound>
)

export default ParseInputExample
