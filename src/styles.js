import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	survey: {
		background: '#fff',
		borderRadius: '5px',
		paddingTop: '30px',
		paddingBottom: '25px',
		margin: '30px auto',
		boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
	},
	form: {
		[theme.breakpoints.down('sm')]: {
			paddingLeft: 0,
			paddingRight: 0
		}
	},
	button: {
		backgroundColor: 'primary',
		color: '#000000',
		letterSpacing: 2,
		'&:hover': {
			color: '#FFFFFF'
		}
	},
	card: {
		maxWidth: 345,
		margin: '30px auto'
	}
}))

export default useStyles
