import React from 'react'

const FullName = () => {
    let profile = {
        name : 'iheb' ,
        lastName: 'mannai'
    }
    return (
        <div>
           <h2>{profile.name + ' ' + profile.lastName}</h2> 
        </div>
    )
}

export default FullName
