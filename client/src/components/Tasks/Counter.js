import React from 'react'

const Counter = props => {

    const { itemList } = props

    return(
        <p>You have a total of {itemList.length} task(s)</p>
    )
}

export default Counter