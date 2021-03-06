import React from 'react'

export const PageTitle = props => <h1 className="helper-full-width">{props.title}</h1>

PageTitle.propTypes = {
	title: React.PropTypes.string.isRequired
}
