import React from 'react'
import { Button, ApplicationUpdateNotification } from '@toptal/picasso'
import { useNotifications } from '@toptal/picasso/utils'

const ApplicationUpdateNotificationExample = () => {
  const { showCustom } = useNotifications()

  return (
    <Button
      data-testid='trigger'
      variant='secondary'
      onClick={() =>
        showCustom(
          <ApplicationUpdateNotification
            data-testid='application-update-notification'
            testIds={{
              updateLaterButton: 'update-later-button',
            }}
          />,
          {
            persist: true,
          }
        )
      }
    >
      Show App Update Notification
    </Button>
  )
}

const component = 'ApplicationUpdateNotification'

describe('ApplicationUpdateNotification', () => {
  it('renders notification when click on trigger', () => {
    cy.mount(<ApplicationUpdateNotificationExample />)

    cy.getByTestId('trigger').click()
    cy.get('body').happoScreenshot({
      component,
      variant: 'default/after-triggered',
    })
  })

  it('renders notification when click on trigger and close when click on notification button', () => {
    cy.mount(<ApplicationUpdateNotificationExample />)

    cy.getByTestId('trigger').click()
    cy.getByTestId('application-update-notification').should('be.visible')

    cy.getByTestId('update-later-button').click()

    cy.getByTestId('application-update-notification').should('not.be.visible')
  })
})
