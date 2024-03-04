import './page.css'
import './data.css'

import React, { useState } from 'react'

const AddUserForm = props => {
  const initialFormState = { id: null, name: '', email: '',money:'' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <div className='frm'>
    <form className='fform'
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.email || !user.money) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
    <div className='form-group'>
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
      <div>
      <button className='btn'>Add</button>
      </div>
    </form>
    </div>
  )
}

export default AddUserForm
