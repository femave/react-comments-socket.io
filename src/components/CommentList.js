import React from 'react'

import Comment from './Comment'

export default class CommentList extends React.Component {

	constructor(){
		super();
	}

	render(){
		return (
			<div class='comment'>
				<h2>Author Name</h2>
				<p>Comment</p>
			</div>
			)
	}

}