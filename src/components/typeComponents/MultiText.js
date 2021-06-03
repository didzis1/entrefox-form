import React from 'react'
import { useFieldData } from '../../hooks/useFieldData'
//import { useFieldData } from './useFieldData'
import PropTypes from 'prop-types'
//import { getAnswerByID } from '../../utils'

import { TextField, Box, Button, Grid } from '@material-ui/core'

import useStyles from '../../styles'

const MultiText = ({ question }) => {
	const styles = useStyles()
	const { fieldCounter, addField, removeField, getValue, handleChange } =
		useFieldData(question)

	return (
		<>
			{question.fields.map((field) => {
				return field.innerFields.map((innerField) => {
					return (
						<Box
							key={innerField.ID}
							my={2}
							style={{
								display: field.ID <= fieldCounter ? '' : 'none',
							}}>
							<TextField
								name={question.ID.toString()}
								value={getValue(field.ID, innerField.ID)}
								onChange={(event) =>
									handleChange(
										field.ID,
										innerField.ID,
										event.target.value
									)
								}
								multiline
								rows='4'
								variant='outlined'
								fullWidth
								label={innerField.text && innerField.text}
								InputLabelProps={{
									style: {
										fontSize: '1.1rem',
									},
								}}
							/>
						</Box>
					)
				})
			})}
			<Grid container direction='row' justify='flex-end'>
				<Button
					variant='contained'
					color='primary'
					onClick={() => removeField()}
					className={styles.button}
					style={{
						display: fieldCounter !== 0 ? '' : 'none',
					}}>
					Poista uusin tavoite
				</Button>
				<Button
					variant='contained'
					color='primary'
					onClick={() => addField()}
					className={styles.button}
					style={{
						display: fieldCounter !== 2 ? '' : 'none',
					}}>
					Lisää uusi tavoite
				</Button>
			</Grid>
		</>
	)
}

MultiText.propTypes = {
	question: PropTypes.object,
}

export default MultiText
