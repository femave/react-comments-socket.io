import React from 'react'

export default class Comment extends React.Component {

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