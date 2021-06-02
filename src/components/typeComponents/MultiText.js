import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../contexts/FormContext'
//import { getAnswerByID } from '../../utils'

// Material UI
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import useStyles from '../../styles'

const MultiText = ({ question }) => {
	const styles = useStyles()

	const [fieldData, setFieldData] = useState({})
	const [fieldCounter, setFieldCounter] = useState(0)
	const { currentPage, handleInputChange } = useForm()

	/*fieldData = {
		0: {
			0: 'value',
			1: 'value'
		},
		1: {
			0: 'value',
			1: 'value'
		}
	}*/

	// Execute update to redux after user has stopped typing for 1 second. Reduces
	// the unnecesaary loops in the answersReducer
	useEffect(() => {
		if (currentPage === question.page) {
			const timeout = setTimeout(() => {
				handleInputChange(question.ID, validatedDispatchData())
			}, 0)
			return () => clearTimeout(timeout)
		}
	}, [fieldData])

	const validatedDispatchData = () => {
		let result = fieldData

		Object.keys(fieldData).forEach((field) => {
			if (
				Object.keys(fieldData[field]).length !==
				question.fields[parseInt(field)].innerFields.length
			)
				result = removeField(result, field)
		})

		return Object.keys(result).length !== 0 ? result : ''
	}

	const removeField = (data, fieldID) => {
		/* eslint-disable no-unused-vars */
		let { [fieldID]: _, ...newData } = data
		/* eslint-enable no-unused-vars */
		return newData
	}

	const removeInnerField = (fieldID, innerField) => {
		/* eslint-disable no-unused-vars */
		let { [fieldID]: parentValue, ...newData } = fieldData
		let { [innerField]: __, ...newInnerData } = parentValue
		/* eslint-enable no-unused-vars */

		if (Object.keys(newInnerData).length === 0) return setFieldData(newData)
		setFieldData({ ...newData, [fieldID]: newInnerData })
	}

	const handleChange = (fieldID, innerFieldID, value) => {
		if (fieldData[fieldID] !== undefined) {
			if (value === '') return removeInnerField(fieldID, innerFieldID)
		}

		setFieldData({
			...fieldData,
			[fieldID]: {
				...fieldData[fieldID],
				[innerFieldID]: value
			}
		})
	}

	const handleClick = (action) => {
		setFieldCounter(fieldCounter + action)

		// Removes item from the state if field was removed
		if (action < 0) {
			setFieldData(removeField(fieldData, fieldCounter))
		}
	}

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
								value={
									fieldData[field.ID]
										? fieldData[field.ID][innerField.ID] ??
										  ''
										: ''
								}
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
			<Grid container direction='row' justify='flex-end'>
				<Button
					variant='contained'
					color='primary'
					onClick={() => handleClick(-1)}
					className={styles.button}
					style={{
						display: fieldCounter !== 0 ? '' : 'none'
					}}>
					Poista uusin tavoite
				</Button>
				<Button
					variant='contained'
					color='primary'
					onClick={() => handleClick(1)}
					className={styles.button}
					style={{
						display: fieldCounter !== 2 ? '' : 'none'
					}}>
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
