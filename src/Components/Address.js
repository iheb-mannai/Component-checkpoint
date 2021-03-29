import React from 'react'

const Address = () => {
    let Address = {
        cité : '38 nouvelle medina 3' ,
        ville : 'Ben arous' ,
        country : 'Tunisia'
        
    }
    return (
        <div>
           <p>{`${Address.cité}, ${Address.ville}, ${Address.country}`}</p>
        </div>
    )
}

export default Address
