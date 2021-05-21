import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import Slider from '@material-ui/core/Slider'
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles'

import { getAnswerByID } from '../../utils'
import { updateAnswers } from '../../reducers/answersReducer'

const CustomSlider = withStyles({
	root: {
		color: 'primary',
		height: 8
	},
	thumb: {
		height: 24,
		width: 24,
		backgroundColor: '#FFFFFF',
		border: '2px solid currentColor',
		marginTop: -8,
		marginLeft: -12,
		'&:focus, &:hover, &$active': {
			boxShadow: 'inherit'
		}
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)'
	},
	track: {
		height: 10,
		borderRadius: 4
	},
	rail: {
		height: 8,
		borderRadius: 4,
		backgroundColor: 'secondary'
	}
})(Slider)

const Range = ({ question }) => {
	const dispatch = useDispatch()
	const answers = useSelector((state) => state.answers)
	const currentPage = useSelector((state) => state.currentPage)

	return (
		<Box my={4}>
			<CustomSlider
				aria-labelledby='discrete-slider'
				valueLabelDisplay='auto'
				value={
					getAnswerByID(answers, question.page, question.ID) ??
					question.choices.max / 2
				}
				name={question.ID.toString()}
				marks={question.marks}
				min={question.choices.min}
				max={question.choices.max}
				step={question.step}
				// 'event' required!
				onChangeCommitted={(event, newValue) =>
					dispatch(updateAnswers(currentPage, question.ID, newValue))
				}
				color='primary'
			/>
		</Box>
	)
}

Range.propTypes = {
	question: PropTypes.object
}

export default Range
