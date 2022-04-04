import IndexSightings from "./Sightings/IndexSightings"
import ShowSightings from "./Sightings/ShowSightings"
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			<IndexSightings />
			<ShowSightings />
		</>
	)
}

export default Home
