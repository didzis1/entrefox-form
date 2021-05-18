import React from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'
import useStyles from '../../styles'

import Slider from '@material-ui/core/Slider'
import Box from '@material-ui/core/Box'

const Range = ({ question }) => {
	const dispatch = useDispatch()
	const rangeValue = useSelector(state => state.answers[question.ID])
	const classes = useStyles()

	const handleChange = (event, newValue) => {
		dispatch(updateAnswers(question.ID, newValue))
	}

	return (
		<Box my={4}>
			<Slider
				aria-labelledby="discrete-slider"
				valueLabelDisplay="auto"
				value={rangeValue ?? (question.choices.max / 2)}
				name={question.ID.toString()}
				marks={question.marks}
				min={question.choices.min}
				max={question.choices.max}
				step={question.step}
				onChange={handleChange}
				color='primary'
				className={classes.slider}
			/>
		</Box>
	)
}

Range.propTypes = {
	question: PropTypes.object
}

export default Range