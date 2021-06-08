import Grid from '@material-ui/core/Grid'
//import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'
import useStyles from '../../styles'

// eslint-disable-next-line no-unused-vars
const ResultLine = ({ answer }) => {
	const classes = useStyles()
	const questionValues = [
		{
			text: 'Heikko',
			value: 'Heikolla tasolla'
		},
		{
			text: 'Kehitettävä',
			value: 'Kehitettävää on'
		},
		{
			text: 'Riittävä',
			value: 'Riittävällä tasolla'
		},
		{
			text: 'Hyvä',
			value: 'Hyvällä tasolla'
		},
		{
			text: 'Erinomainen',
			value: 'Erinomaisella tasolla'
		}
	]
	return (
		<Grid
			container
			direction='column'
			justify='center'
			alignItems='center'
			wrap='nowrap'
			className={classes.resultLine}>
			{questionValues.map((questionValue) => (
				<Grid item key={questionValues.value}>
					<Typography align='center'>
						{questionValue.text.toUpperCase()}
					</Typography>
				</Grid>
			))}
		</Grid>
	)
}

ResultLine.propTypes = {
	answer: PropTypes.string
}

export default ResultLine
