/* eslint-disable no-undef */
import answerReducer from './answersReducer'
import deepFreeze from 'deep-freeze'

describe('answerReducer', () => {
	test('returns new state with action UPDATE', () => {
		const state = []
		const action = {
			type: 'UPDATE',
			data: {
				page: 1,
				id: 1,
				value: 'Test value'
			}
		}

		deepFreeze(state)
		const newState = answerReducer(state, action)

		expect(newState).toHaveLength(1)
		expect(newState).toContainEqual({
			answers: [
				{
					id: 1,
					value: 'Test value'
				}
			],
			page: 1
		})
	})
})
