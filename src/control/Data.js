import './nav.css'
import { Link } from 'react-router-dom'
import photo from'../imag/1.webp'
import './data.css'
import './page.css'
import React, { useState, Fragment } from 'react'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'


const Data = props => {
  const usersData = [
		{ id: 1, name: 'sara', email: 'sara33@gmail.com',money:'44.679$' },
		{ id: 2, name: 'mariam', email: 'mariam9@gmail.com',money:'13.779$' },
		{ id: 3, name: 'batsy', email: 'batsy43@gmail.com',money:'55.783$' },
	]

	const initialFormState = { id: null, name: '', email: '', money:'' }

	
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)


	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, email: user.email,money:user.money })
	}
   
 return(
  <>
  <div className='nav'>
  <div className='profile'> 
  <img className='photo' src={photo} alt='profil'/>
  <span className='name'>lena</span>
  </div>
 <Link to='/home'>Home</Link>
 <Link to='/data'>Data</Link>

</div>

	<div className="container">
  <div >
				
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2 className='hhed'>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2 className='hhed'>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				
			</div>
		</div>

    </>

 )  
}
    


export default Data