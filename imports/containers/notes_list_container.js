import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Count } from 'meteor/tmeasday:publish-counts'

import { Note } from '/imports/collections/notes'

import { SingleFieldSubmit }  from '/imports/components/forms/single_field_submit'
import { List }  from '/imports/components/lists/list'
import { LoadingWrapper }  from '/imports/components/utility/loading_wrapper'

export const NotesListContainer = createContainer(props => {

		const
			sub = Meteor.subscribe('notes.list')
		,
		  subReady = sub.ready()
		,
	    notes = subReady? Note.find({}, { sort: { updatedAt: -1} }).fetch() : []
	  ,

	    notesCount = subReady? Counts.get('note_count') : null
	  ,
		  handleCreate = title => {
		    Meteor.call('note.create', title, (err, result) => {
          if (err) {
            console.log('error: ' + err.reason)
          }
        })
		  }
		,
		  handleDelete = note => {
		    Meteor.call('note.delete', note._id, (err, result) => {
          if (err) {
            console.log('error: ' + err.reason)
          }
        })
		  }
		,
      addItemPlaceholder = notesCount === 0? "Ecrivez quelque chose pour créer une note" : "Nouvelle note..."
    , addItem = props.currentUser? <SingleFieldSubmit handleSubmit={handleCreate} placeholder={addItemPlaceholder} /> : null
    , deleteItem = props.currentUser? true : false

    , linkItem = props.currentUser? true : false

    , displayEmptyListMsg = () => {
        const
           msg =  "Enregistrez ou connectez-vous pour ajouter une note."
        ,  msgBlock = <li className="helper-full-width help-text">{msg}</li>
        ,  displayMsg = notesCount === 0 && props.currentUser === null

        return displayMsg? msgBlock : null
    }
    , list = <List collection={notes} addItem={addItem} linkRoute={"noteDetails"} deleteItem={deleteItem} linkItem={linkItem} handleDelete={handleDelete} itemCount={notesCount} displayEmptyListMsg={displayEmptyListMsg} />



	  return {
      component: list,
      subReady
	  }
  },
  LoadingWrapper
)
