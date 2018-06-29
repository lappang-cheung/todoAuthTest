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
                    className="list-group-item container list-padding"
                >
                    {this.props.item.description}

                    <button 
                        onClick={(e) => {
                            this.props.onDeleteInput(this.props.item)
                        }}
                        className="btn btn-outline-danger float-sm-right"
                    >
                    Remove
                    </button>
                </li>
            </span>
        )
    }
}

export default TaskView