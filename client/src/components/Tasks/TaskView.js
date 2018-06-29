import React, { Component } from 'react'

class TaskView extends Component {

    // Create state for strike through
    state = {
        active: false
    }

    // Strike through when task is completed
    onStrikeThrough = () => {
        this.setState({ active: !this.state.active })
    }

    render() {
        return (
            <span>
                <li
                    key={this.props.index}
                    className={this.state.active ? 'active' : 'noActive'}
                    onClick={this.onStrikeThrough}
                >
                    {this.props.item.description}
                </li>
                <button onClick={(e) => {
                    this.props.onDeleteInput(this.props.item)
                }}
                >
                    Remove
                </button>
            </span>
        )
    }
}

export default TaskView