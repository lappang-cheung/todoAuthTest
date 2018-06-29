import React from 'react'

const TaskMain = props => {

    const { item, itemTitle, onChange, onChangeTitle,onAddInput } = props

    return (
        <div>
            <label>Title for Task</label>
            <input value={itemTitle} onChange={onChangeTitle} />
            <label>Description for Task</label>
            <input value={item} onChange={onChange} />
            <button onClick={onAddInput}>Add</button>
        </div>
    )
}

export default TaskMain