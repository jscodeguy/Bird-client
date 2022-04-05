import IndexSightings from "./Sightings/IndexSightings"
import ShowSightings from "./Sightings/ShowSightings"
import ShowFaves from "./Faves/ShowFaves"
import IndexFaves from "./Faves/IndexFaves"
import IndexPhotos from "./Photos/IndexPhotos"
import ShowPhotos from "./Photos/ShowPhoto"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>

			<IndexSightings />
			<ShowSightings />
			<ShowFaves />
			<IndexFaves />
			<IndexPhotos />
			<ShowPhotos />
		</>
	)
}

export default Home
