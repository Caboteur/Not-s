import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'
import { NotesListContainer }  from '/imports/containers/notes_list_container'

export const Homepage = props => {

	const pageTitle = <PageTitle  className="PageTitle" title={"Not's your Idea"} />


  return <div id="app-container">
           <AppHeader middleCol={pageTitle} rightCol={props.loginButtons} />
           <div id="main-content">
             <NotesListContainer {...props} />
           </div>
         </div>
}
