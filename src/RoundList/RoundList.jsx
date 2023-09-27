import React from 'react'

export const RoundList = ({ list }) => {
    return (
        <>
            <h1>Rounds Express Entry</h1>
            <div className='round-list'>
                <div className='round-item head'>
                    <div className='round-number'>#</div>
                    <div className='round-date'>Date</div>
                    <div className='round-crs'>CRS score</div>
                    <div className='round-size'>Round size</div>
                    <div className='round-program'>Round type</div>
                </div>
                {list.map((item) => (
                    <div
                        className='round-item'
                        key={item.drawNumber}
                    >
                        <div className='round-number'>{item.drawNumber}</div>
                        <div className='round-date'>{item.drawDateFull}</div>
                        <div className='round-crs'>{item.drawCRS}</div>
                        <div className='round-size'>{item.drawSize}</div>
                        <div className='round-program'>{item.drawName}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default RoundList
