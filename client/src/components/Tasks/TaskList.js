import React from 'react'

import TaskView from './TaskView'

const TaskList = props => {

    const { itemList, onDeleteInput } = props

    return (
        <ul>
            {
                itemList.map((item,index) => 
                    <TaskView
                        key={index}
                        index={index}
                        item={item}
                        onDeleteInput={onDeleteInput}
                    />
                )
            }
        </ul>
    )
}

export default TaskList
