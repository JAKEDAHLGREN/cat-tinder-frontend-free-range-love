import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom" 

const CowShow = ({ cows }) => {
	const { id } = useParams()
	let selectedCow = cows.find((cow) => cow.id === +id)

	return (
		<main>
			{selectedCow && (
				<>
					<img alt="send mooods" src={selectedCow.image} />
					<h3>
						{selectedCow.name} likes {selectedCow.enjoys}. They are
						{selectedCow.color} in color, and identify as a {selectedCow.species} cow.
					</h3>
				</>
			)}
			<NavLink to={`/cowedit/${id}`} className="nav-link">
				Edit Cow Profile
			</NavLink>
		</main>
	)
}

export default CowShow
