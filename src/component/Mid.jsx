import React from 'react'
import './Mid.css'

var content2 = ['kamu','adalah','anak',
                'gembala','selalu','riang',
                'serta','gembira'];

const Mid = () => {
    return (
        <div className="mid">{content2.map((content2)=> {
            return(
            <p> {content2}</p>
        )})}
        </div>
    )
}

export default Mid
