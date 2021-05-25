import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	survey: {
		background: '#fff',
		borderRadius: '5px',
		paddingTop: '35px',
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
	},
	mainGrid: {
		maxWidth: 850,
		margin: '5px auto'
	},
	textGrid: {
		margin: '0px auto 30px auto'
	},
	chartBar: {
		backgroundColor: '#cacaca',
		height: '30px',
		margin: 2,
		borderRadius: '3px',
		border: '1px solid #bdbdbd'
	},
	labelBox: {
		width: '12px',
		height: '12px',
		borderRadius: '3px',
		margin: '3px'
	},
	limeBox: {
		background: '#cddc39',
		border: '2px solid #c0ca33'
	},
	yellowBox: {
		background: '#ffeb3b',
		border: '2px solid #fbc02d'
	}
}))

export default useStyles
