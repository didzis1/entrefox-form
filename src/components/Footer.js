import React from 'react'
//import PropTypes from 'prop-types'

// Import logos
import turkuamk_logo from '../images/footer/turkuamk_logo.png'
import hy_logo from '../images/footer/hy_logo.png'
import tyoterveyslaitos_logo from '../images/footer/tyoterveyslaitos_logo.png'
import esr_logo from '../images/footer/esr_logo.png'
import vipuvoimaa_logo from '../images/footer/vipuvoimaa_logo.png'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import useStyles from '../styles'

const Footer = () => {
	const classes = useStyles()
	return (
		<Box mt={4}>
			<Grid container direction='column' className={classes.mainGrid}>
				<Grid
					container
					item
					direction='row'
					justify='space-evenly'
					alignItems='center'>
					<Grid item xs={8} sm={5} md={4}>
						<Box my={2} px={2}>
							<img
								src={turkuamk_logo}
								className={classes.gridList}
							/>
						</Box>
					</Grid>
					<Grid item xs={8} sm={5} md={4}>
						<Box my={2} px={2}>
							<img src={hy_logo} className={classes.gridList} />
						</Box>
					</Grid>
					<Grid item xs={8} sm={5} md={4}>
						<Box my={2} px={2}>
							<img
								src={tyoterveyslaitos_logo}
								className={classes.gridList}
							/>
						</Box>
					</Grid>
				</Grid>
				<Grid
					container
					item
					direction='row'
					justify='space-evenly'
					alignItems='center'>
					<Grid item xs={6} sm={4} md={3}>
						<Box>
							<img src={esr_logo} className={classes.gridList} />
						</Box>
					</Grid>
					<Grid item xs={8} sm={4} md={3}>
						<Box>
							<img
								src={vipuvoimaa_logo}
								className={classes.gridList}
							/>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	)
}

//Footer.propTypes = {}

export default Footer
