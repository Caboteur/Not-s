import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { LoginButtons } from '/imports/components/accounts/login_buttons'



const App = props => props.page(props)


export const AppContainer = createContainer(() => {

  return {
	  currentUser: Meteor.user(),
	  loginButtons: <LoginButtons align="right" />
  }
},
App)
