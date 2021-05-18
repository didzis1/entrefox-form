import React from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'

const Range = ({ question }) => {
	const dispatch = useDispatch()
	//console.log(question)
	return (
		<div className="p-2 my-5 sm:p-3 md:p-5 flex flex-row justify-evenly content-center">
			{
				question.choices.map((choice) => (
					<div key={choice.ID} className="flex flex-col">
						<input
							type='radio'
							name={question.ID}
							value={choice.value}
							onChange={(event) => dispatch(updateAnswers(question.ID, event.target.value))}
							className="slider"
						/>
						<label className="place-self-center" htmlFor={choice.ID}>{choice.value}</label>
					</div>
				))
			}
		</div>
	)
}

Range.propTypes = {
	question: PropTypes.object
}

export default Range