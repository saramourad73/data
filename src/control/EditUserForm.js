import './page.css'
import './data.css'
import React, { useState } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <div className='frm'>
    <form className='fform'
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >  <div className='form-group'>

      <label className='lab'>Name</label>
      <input className='in' type="text" name="name" value={user.name} onChange={handleInputChange} />

      </div>

      <div className='form-group'>

      <label className='lab'>Email</label>
      <input className='in' type="text" name="email" value={user.email} onChange={handleInputChange} />

      </div>

      <div className='form-group'>

      <label className='lab'>Money</label>
      <input className='in' type="text" name="money" value={user.money} onChange={handleInputChange} />

      </div>

      <div className="bts">

      <button  className='cancle'>Update </button>
      <button onClick={() => props.setEditing(false)} className='cancle'> Cancel</button>
      </div>
    </form>
    </div>
  )
}

export default EditUserForm