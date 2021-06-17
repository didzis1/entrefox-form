import React from 'react'
import { useFieldData } from '../../hooks/useFieldData'
import PropTypes from 'prop-types'

import ButtonHandler from '../ButtonHandler'

// Material UI
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded'

const MultiText = ({ question }) => {

	// Custom hook (hooks/useFieldData.js) to help with the MultiText component data saving
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
							<Box mb={1} mt={3}>
								<InputLabel>
									{innerField.text && innerField.text}
								</InputLabel>
							</Box>
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
								rows='4'
								variant='outlined'
								fullWidth
								InputProps={{
									multiline: true,
									rows: 4
								}}
								inputProps={{ maxLength: 300 }}
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
					<Box mx={1} my={1}>
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
						startIcon={<RemoveRoundedIcon />}
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
