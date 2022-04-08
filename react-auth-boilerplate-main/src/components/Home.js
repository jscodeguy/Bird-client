

const Home = (props) => {
	// const { msgAlert, user } = props
	// console.log('props in home', props)


	const SearchBar = () => (
		<form action="/" method="get" className="search">
			<label htmlFor="header-search">
				<span className="visually-hidden">Search</span>
			</label>
			<input
				type="text"
				id="header-search"
				placeholder="Search"
				name="s" 
			/>
			<button type="submit">Search</button>
		</form>
	);

	return (
		<>

		<h2>BirdBrains</h2>
		<h3>A bird watching app for watchers who love birds</h3>
		<SearchBar />
		</>
	)
}

export default Home
