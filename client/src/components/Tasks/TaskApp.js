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
			})
	}

	componentDidMount(){
		this.refresh()
	}

	onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
	}
	
	/*
        1. Grabs the id from removeItem parameter
        2. Axios calls the route to delete the from database
        3. Checks for errors and display if there is one
    */
   	onDeleteInput = (removeItem) => {
		axios.delete(`/tasks/${removeItem._id}`)
			.then(res => {
				console.log('Comment Deleted');
				this.refresh();
			})
			.catch(err => {
				console.log(err);
			})
	}

	/*
		1. Axios call to the backend route to add input
		2. Called the refresh method to load the data
		3. Set the state of the item to clear the input
	*/
	onAddInput = () => {
		// Create the task item with axios route
		axios.post('/tasks/', {
			text: this.state.item
		})
		.then(
			res => console.log(res)
		)
		.catch(err => console.log(err));
		// Refresh the view
		this.refresh();
		// Clear the input
		this.setState({
			item: ''
		});
	}

	// Note: text is used instead of descrption cause of route!!!

	render() {
		return (
			<div>
				I am here for task
			</div>
		)
	}
}

export default TaskApp
