import { FlowRouter } from 'meteor/kadira:flow-router'

import React from 'react'
import { mount } from 'react-mounter'


import { AppContainer } from '/imports/containers/app_container'
import { NoteDetailsContainer } from '/imports/containers/note_details_container'
import { Homepage } from '/imports/components/pages/homepage'


FlowRouter.route('/', {
  name: 'homepage',
  action() {

    mount(AppContainer, {


      page: props => <Homepage {...props} />
    })

  }
})

FlowRouter.route('/notes/:_id', {
  name: 'noteDetails',
  action(params) {
    mount(AppContainer, {
      page: props => <NoteDetailsContainer {...props} noteId={params._id} />
    })
  }
})
