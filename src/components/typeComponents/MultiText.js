import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'
//import { getAnswerByID } from '../../utils'

import { TextField, Box, Button, Grid } from '@material-ui/core'

import useStyles from '../../styles'

const MultiText = ({ question }) => {
	const dispatch = useDispatch()
	const styles = useStyles()
	const currentPage = useSelector((state) => state.currentPage)

	const [fieldData, setFieldData] = useState([])
	const [fieldCounter, setFieldCounter] = useState(0)

	/*fieldData = {
		0: {
			0: 'value',
			1: 'value'
		},
		1: {
			0: 'value',
			1: 'value'
		}
	}

	/*fieldData = [
		{
			ID: 1,
			values: [
				{
					ID: 0,
					value: value
				},
				{
					ID: 1,
					value: value
				}
			]
		},
		{
			ID: 1,
			values: [
				{
					ID: 0,
					value: value
				},
				{
					ID: 1,
					value: value
				}
			]
		}
	]*/

	// Execute update to redux after user has stopped typing for 1 second. Reduces
	// the unnecesaary loops in the answersReducer
	useEffect(() => {
		if (currentPage === question.page) {
			//console.log(fieldData)
			const timeout = setTimeout(() => {
				dispatch(
					updateAnswers(
						currentPage,
						question.ID,
						validatedDispatchData()
					)
				)
			}, 0)
			return () => clearTimeout(timeout)
		}
	}, [fieldData])

	const validatedDispatchData = () => {
		const result = fieldData.filter(
			(field) =>
				field.values.length ===
				question.fields[parseInt(field.ID)].innerFields.length
		)
		//console.log(result)
		return result.length !== 0 ? result : ''
	}

	const removeField = (data, fieldID) => {
		/* eslint-disable no-unused-vars */
		let { [fieldID]: _, ...newData } = data
		/* eslint-enable no-unused-vars */
		return newData
	}

	const removeInnerField = (fieldID, innerFieldID) => {
		const result = fieldData.map((field) => {
			if (field.ID === fieldID) {
				return {
					...field,
					values: field.values.filter(
						(innerField) => innerField.ID !== innerFieldID
					),
				}
			}
			return field
		})

		return setFieldData(result)
	}

	const handleChange = (fieldID, innerFieldID, value) => {
		if (fieldData.find((field) => field.ID === fieldID)) {
			if (value === '') return removeInnerField(fieldID, innerFieldID)
		}

		// Field
		if (fieldData.some((fieldState) => fieldState.ID === fieldID)) {
			setFieldData(
				fieldData.map((fieldState) => {
					if (fieldState.ID === fieldID) {
						if (
							fieldState.values.some(
								(innerFieldState) =>
									innerFieldState.ID === innerFieldID
							)
						) {
							return {
								...fieldState,
								values: fieldState.values.map((innerField) => {
									if (innerField.ID === innerFieldID) {
										return {
											...innerField,
											value,
										}
									}
									return innerField
								}),
							}
						}
						return {
							...fieldState,
							values: fieldState.values.concat({
								ID: innerFieldID,
								value,
							}),
						}
					}
					return fieldState
				})
			)
		} else {
			return setFieldData([
				...fieldData,
				{
					ID: fieldID,
					values: [{ ID: innerFieldID, value }],
				},
			])
		}
	}

	const handleClick = (action) => {
		setFieldCounter(fieldCounter + action)

		// Removes item from the state if field was removed
		if (action < 0) {
			setFieldData(removeField(fieldData, fieldCounter))
		}
	}

	const getValue = (fieldID, innerFieldID) => {
		//console.log(fieldData)
		const fieldState = fieldData.find((field) => field.ID === fieldID)

		if (fieldState === undefined) return undefined
		if (fieldState.values === undefined) return undefined

		const innerField = fieldState.values.find(
			(innerField) => innerField.ID === innerFieldID
		)

		if (innerField === undefined) return undefined
		if (innerField.value === undefined) return undefined

		return innerField.value
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
								display: field.ID <= fieldCounter ? '' : 'none',
							}}>
							<TextField
								name={question.ID.toString()}
								value={getValue(field.ID, innerField.ID) ?? ''}
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
					onClick={() => handleClick(-1)}
					className={styles.button}
					style={{
						display: fieldCounter !== 0 ? '' : 'none',
					}}>
					Poista uusin tavoite
				</Button>
				<Button
					variant='contained'
					color='primary'
					onClick={() => handleClick(1)}
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
