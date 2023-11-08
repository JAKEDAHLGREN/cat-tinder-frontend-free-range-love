import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { NavLink } from "react-router-dom"

const CowIndex = ({ cows }) => {

	return (
		<main className="cards-container">
			{cows?.map((cow, index) => {

				return (
						<Card className='card'
							style={{
								width: "18rem",
							}}
							key={index}
							>
							<img className='card-image' src={cow.image} alt="Sample" style={{ width: "18rem", height:"20rem"}} />
							<CardBody>
								<CardTitle tag="name-tag">
									{cow.name}
								</CardTitle>
								<CardSubtitle>
									{cow.age}
								</CardSubtitle>
								<NavLink className="link-color"to={`/cowshow/${cow.id}`}>
									🐮 MOOOOORE Info 🐮
								</NavLink>
							</CardBody>
						</Card>
				)
			})}
		</main>
	)
}

export default CowIndex
