import React from 'react'

const HomeAboutListComp = ({firstList , secondList}) => {
    const listStyle = {
        fontSize : '1.5rem'
    }
    return (
        <div className='row'>
            <div className="col-6">
                <ul className='ulList p-0' style={{
                    listStyle : 'none'
                }}>
                    {firstList.map((ele , indx) => (
                        <li key={indx} style={listStyle}>{ele}</li>
                    ))}
                </ul>
            </div>
            <div className="col-6">
                <ul className='ulList p-0' style={{
                    listStyle : 'none'
                }}>
                    {secondList.map((ele , indx) => (
                        <li key={indx} style={listStyle}>{ele}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomeAboutListComp