import React, { Component } from 'react'
import axios from 'axios'

class TaskApp extends Component {

	state = {
		item: '',
		itemList: []
	}

	refresh = () => {
		axios.get('/tasks')
			.then(res => {
				this.setState({
					itemList: res.data
				})
				console.log(res.data[0])
			})
		console.log(this.state.itemList)
	}

	componentDidMount(){
		this.refresh()
	}

	render() {
		return (
			<div>
				I am here for task
			</div>
		)
	}
}

export default TaskApp
