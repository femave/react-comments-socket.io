import React from 'react'
import {Link} from 'react-router'

export default class Home extends React.Component {

	constructor(){
		super()
	}

	render(){
		return(
				<div class='home'>
					<h1>React</h1>
					<Link to='sign'>Sign now</Link>
				</div>
				)
	}
}