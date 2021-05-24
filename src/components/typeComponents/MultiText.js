import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'
import { getAnswerByID } from '../../utils'

import { TextField, Box, Button, Grid } from '@material-ui/core'

import useStyles from '../../styles'

const MultiText = ({ question }) => {
	console.log(question)
	//const [optionalFields, setOptionalFields] = useState([])
	const dispatch = useDispatch()
	const styles = useStyles()
	const answers = useSelector((state) => state.answers)
	const currentPage = useSelector((state) => state.currentPage)

	return (
		<>
			{question.fields.map((field) => {
				return (
					<Box key={field.ID} my={2}>
						<TextField
							name={field.ID && field.ID.toString()}
							value={
								getAnswerByID(
									answers,
									question.page,
									field.ID
								) ?? ''
							}
							onChange={(event) =>
								dispatch(
									updateAnswers(
										currentPage,
										event.target.name,
										event.target.value
									)
								)
							}
							multiline
							rows='4'
							variant='outlined'
							fullWidth
							label={field.text && field.text}
							InputLabelProps={{
								style: {
									fontSize: '1.1rem'
								}
							}}
						/>
					</Box>
				)
			})}
			<Grid container direction='row' justify='flex-end'>
				<Button
					variant='contained'
					color='primary'
					className={styles.button}>
					Lisää uusi tavoite
				</Button>
			</Grid>
		</>
	)
}

MultiText.propTypes = {
	question: PropTypes.object
}

export default MultiText
