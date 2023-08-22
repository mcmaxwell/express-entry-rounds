import React from 'react'

export const RoundList = (roundsList) => {
    const rounds = roundsList.list
    console.log(typeof rounds)
    return (
        <>
            <h1>Rounds Express Entry</h1>
            <div className='round-list'>
                {rounds.map((item) => (
                    <div
                        className='round-item'
                        key={item.drawNumber}
                    >
                        <div className='round-number'>{item.drawNumber}</div>
                        <div className='round-date'>{item.drawDateFull}</div>
                        <div className='round-crs'>{item.drawCRS}</div>
                        <div className='round-program'>{item.drawName}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default RoundList
