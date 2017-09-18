import React from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

import CommentStore from '../stores/CommentStore'
import CommentActions from '../actions/CommentActions'
import CommentBox from '../components/CommentBox'

@ReactMixin.decorate(Reflux.connect(CommentStore, 'comments'))
export default class Sign extends React.Component {

	constructor(){
		super()
	}

	componentDidMount(){
		CommentActions.fetchComments()
	}

	render(){
		return(
				<div class='sign'>
				<CommentBox/>
				</div>
				)
	}
}