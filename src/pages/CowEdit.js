import { useState } from "react"
import { Label, FormGroup, Form, Row, Input, Button, Col } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const CowEdit = ({ cows, updateCow }) => {
	const { id } = useParams()
	const navigate = useNavigate()
	let currentCow = cows?.find((cow) => cow.id === +id)

	const [editCow, setEditCow] = useState({
		name: currentCow.name,
		age: currentCow.age,
		enjoys: currentCow.enjoys,
		color: currentCow.color,
		species: currentCow.species,
		image: currentCow.image,
	})

	const handleChange = (e) => {
		setEditCow({ ...editCow, [e.target.name]: e.target.value })
	}

	const handleSubmit = () => {
		updateCow(editCow, currentCow.id)
		navigate(`/cowshow/${id}`)
	}

	return (
		<>
			<Form className="cow-form">
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="cow-name">Name</Label>
							<Input
								id="cow-name"
								name="name"
								placeholder="Enter Cow's Name"
								type="text"
								onChange={handleChange}
								value={editCow.name}
							/>
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="cow-age">Age</Label>
							<Input
								id="cow-age"
								name="age"
								placeholder="Enter Cow's Age"
								type="text"
								onChange={handleChange}
								value={editCow.age}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Label for="cow-enjoys">Enjoys</Label>
					<Input
						id="cow-enjoys"
						name="enjoys"
						placeholder="What Does The Cow Enjoy?"
						type="text"
						onChange={handleChange}
						value={editCow.enjoys}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="cow-color">Color</Label>
					<Input
						id="cow-color"
						name="color"
						placeholder="Enter Cow Color"
						type="text"
						onChange={handleChange}
						value={editCow.color}
					/>
				</FormGroup>
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="cow-species">Species</Label>
							<Input
								id="cow-species"
								name="species"
								placeholder="What Species Does The Cow Identify As?"
								type="text"
								onChange={handleChange}
								value={editCow.species}
							/>
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label for="cow-image">Image</Label>
							<Input
								id="cow-image"
								name="image"
								placeholder="Enter Cow's Image URL"
								type="text"
								onChange={handleChange}
								value={editCow.image}
							/>
						</FormGroup>
					</Col>
				</Row>

				<Button onClick={handleSubmit} name="submit">
					Submit Updated Cow
				</Button>
			</Form>
		</>
	)
}
export default CowEdit
