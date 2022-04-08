// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import IndexPictures from './components/Photos/IndexPhotos'
import ShowPictures from './components/Photos/ShowPhoto'
import CreatePicture from './components/Photos/NewPhoto'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import CreateFave from './components/Faves/CreateFaves'

import IndexFaves from './components/Faves/IndexFaves'
import ShowFaves from './components/Faves/ShowFaves'
import IndexSightings from './components/Sightings/IndexSightings'
import ShowSighting from "./components/Sightings/ShowSighting"
import CreateSighting from "./components/Sightings/CreateSighting"
import IndexFun from "./components/Fun/IndexFun"

const App = () => {

	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])

	// console.log('user in app', user)
	// console.log('message alerts', msgAlerts)

	const clearUser = () => {
		// console.log('clear user ran')
		setUser(null)
	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
			)
		})
	}

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route
					path='/'
					element={<Home msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-out'
					element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>}
				/>
				<Route
					path='/change-password'
					element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				{/* Pictures: INDEX route */}
				<Route
					path='/pictures'
					element={
					<RequireAuth user={user}>
						<IndexPictures msgAlert={msgAlert} user={user} />
					</RequireAuth>
					}
				/>
				{/* Pictures: CREATE route */}
				<Route
					path='/newPicture'
					element={
					<RequireAuth user={user}>
						<CreatePicture msgAlert={msgAlert} user={user} />
					</RequireAuth>}
				/>
				{/* Pictures: SHOW route */}
				<Route
					path='/pictures/:id'
					element={
					<RequireAuth user={user}>
						<ShowPictures msgAlert={msgAlert} user={user} />
					</RequireAuth>}
				/>
				{/* Favorites: INDEX route */}
				<Route
					path='/favorites'
					element={
					<RequireAuth user={user}>
						<IndexFaves msgAlert={msgAlert} user={user} />
					</RequireAuth>}
				/>
				{/* Favorites: CREATE route */}
				<Route
					path='/addFave'
					element={
					<RequireAuth user={user}>	
						<CreateFave user={user} />
					</RequireAuth>}
				/>
		  		{/* Favorites: SHOW route */}
				<Route
					path='/favorites/:id'
					element={
					<RequireAuth user={user}>
						<ShowFaves msgAlert={msgAlert} user={user} />
					</RequireAuth>}
				/>
				{/* Sightings: CREATE route */}
				<Route
					path="/sightings/new"
					element={
						<RequireAuth user={user}>
							<CreateSighting msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				{/* Sightings: INDEX route */}
				<Route
					path="/sightings"
					element={<IndexSightings msgAlert={msgAlert} user={user} />}
				/>
				{/* Sightings: SHOW route */}
				<Route
					path="/sightings/:id"
					element={<ShowSighting msgAlert={msgAlert} user={user} />}
				/>
				{/* Fun Facts: INDEX route */}
				<Route
					path="/fun"
					element={<IndexFun msgAlert={msgAlert} user={user} />}
				/>
			</Routes>

			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
