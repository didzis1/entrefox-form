import answerReducer from './answersReducer'
import deepFreeze from 'deep-freeze'
import questions from '../data/questions.json'

describe('answerReducer', () => {
	test('returns new state with action UPDATE', () => {
		const state = questions.map((page) => {
			return {
				page: page.ID,
				answers: page.questions.map((question) => {
					return {
						id: question.ID,
						value: ''
					}
				})
			}
		})
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

		expect(newState).toContainEqual(
			{
				page: 1,
				answers: [
					{
						id: 1,
						value: ''
					}
				]
			},
			{
				page: 2,
				answers: [
					{
						id: 2,
						value: ''
					},
					{
						id: [3],
						value: ''
					},
					{
						id: [4],
						value: ''
					}
				]
			},
			{
				page: 3,
				answers: [
					{
						id: 5,
						value: ''
					},
					{
						id: 6,
						value: ''
					},
					{
						id: 7,
						value: ''
					},
					{
						id: 8,
						value: ''
					},
					{
						id: 9,
						value: ''
					},
					{
						id: 10,
						value: ''
					},
					{
						id: 11,
						value: ''
					}
				]
			},
			{
				page: 4,
				answers: [
					{
						id: 12,
						value: ''
					}
				]
			},
			{
				page: 5,
				answers: [
					{
						id: 18,
						value: ''
					}
				]
			}
		)
	})
})
