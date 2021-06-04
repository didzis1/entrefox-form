import React from 'react'
import { useFieldData } from '../../hooks/useFieldData'
import PropTypes from 'prop-types'
//import { getAnswerByID } from '../../utils'

// Material UI

import ButtonHandler from '../ButtonHandler'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'

const MultiText = ({ question }) => {
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
								display: field.ID <= fieldCounter ? '' : 'none'
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
										fontSize: '1.1rem'
									}
								}}
							/>
						</Box>
					)
				})
			})}
			<Grid
				container
				direction='row'
				justify='center'
				alignItems='center'>
				{fieldCounter !== 2 ? (
					<Box mr={2}>
						<ButtonHandler
							variant='contained'
							colors={{ bg: '#cddc39', bgHover: '#c0ca33' }}
							handlePagination={() => addField()}
							startIcon={<AddRoundedIcon />}
							text='Lisää uusi tavoite'
						/>
					</Box>
				) : null}
				{fieldCounter !== 0 ? (
					<ButtonHandler
						variant='contained'
						colors={{ bg: '#ffc400', bgHover: '#b28900' }}
						handlePagination={() => removeField()}
						startIcon={<DeleteRoundedIcon />}
						text='Poista uusin tavoite'
					/>
				) : null}
			</Grid>
		</>
	)
}

MultiText.propTypes = {
	question: PropTypes.object
}

export default MultiText
