import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { NavLink } from "react-router-dom"

const CowIndex = ({ cows }) => {
	return (
		<main>
			{cows?.map((cow, index) => {
				return (
						<Card className='card'
							style={{
								width: "18rem",
							}}
							
							key={index}
							>
							<img src={cow.image} alt="Sample" />
							<CardBody>
								<CardTitle tag="h5">{cow.name}</CardTitle>
								<CardSubtitle>{cow.age}</CardSubtitle>
								<NavLink to={`/cowshow/${cow.id}`}>MOOOOORE info</NavLink>
							</CardBody>
						</Card>
				)
			})}
		</main>
	)
}

export default CowIndex
