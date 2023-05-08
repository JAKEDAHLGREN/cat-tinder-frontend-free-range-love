import { useParams, NavLink, useNavigate } from "react-router-dom"
import { Button } from "reactstrap"

const CowShow = ({ cows, deleteCow }) => {
	const { id } = useParams()
	const navigate = useNavigate()
	let selectedCow = cows?.find((cow) => cow.id === +id)

	const handleSubmit = (selectedCow) => {
		deleteCow(selectedCow.id)
		navigate("/cowindex")
	}
	return (
		<main>
			{selectedCow && (
				<>
					<img alt="send mooods" src={selectedCow.image} />

					<h3>
						{selectedCow.name} likes {selectedCow.enjoys}. {selectedCow.name} is {selectedCow.color} in color, and belongs to the species {selectedCow.species}.
					</h3>
				</>
			)}
			<div>
				<NavLink to={`/cowedit/${id}`} className="nav-link">
					Edit Cow Profile
				</NavLink>
				<Button onClick={handleSubmit}>Delete Cow Profile</Button>
			</div>
		</main>
	)
}

export default CowShow
