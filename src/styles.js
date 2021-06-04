import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	survey: {
		background: '#fff',
		borderRadius: '5px',
		paddingTop: '35px',
		paddingBottom: '25px',
		boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
	},
	form: {
		[theme.breakpoints.down('sm')]: {
			paddingLeft: '0px',
			paddingRight: '0px'
		}
	},
	card: {
		maxWidth: '345px',
		margin: '30px auto'
	},
	mainGrid: {
		maxWidth: '850px',
		margin: '5px auto'
	},
	textGrid: {
		margin: '0px auto 30px auto'
	},
	chartBar: {
		backgroundColor: '#cacaca',
		height: '30px',
		margin: '2px',
		borderRadius: '3px',
		border: '1px solid #bdbdbd'
	},
	animatedItem: {
		animation: `$chartBarEffect 2000ms ${theme.transitions.easing.easeInOut}`
	},
	'@keyframes chartBarEffect': {
		'0%': {
			opacity: '0%',
			transform: 'translateX(-5%)'
		},
		'100%': {
			opacity: '100%',
			transform: 'translateX(0)'
		}
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
	},
	gaugeGrid: {
		maxWidth: '350px',
		margin: 'auto'
	},
	gauge: {
		width: '100%',
		maxWidth: '250px',
		margin: 'auto'
	},
	gaugeBody: {
		width: '100%',
		height: '0px',
		paddingBottom: '50%',
		backgroundColor: '#e6ee9c',
		position: 'relative',
		borderTopLeftRadius: '100% 200%',
		borderTopRightRadius: '100% 200%',
		overflow: 'hidden'
	},
	gaugeFill: {
		position: 'absolute',
		top: '100%',
		left: '0px',
		width: 'inherit',
		height: '100%',
		backgroundColor: '#cddc39',
		transformOrigin: 'center top',
		transition: 'transform 1s ease-out'
	},
	gaugeCover: {
		width: '75%',
		height: '150%',
		backgroundColor: '#ffffff',
		borderRadius: '50%',
		position: 'absolute',
		top: '25%',
		left: '50%',
		transform: 'translateX(-50%)',
		// Gauge Text
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: '25%',
		boxSizing: 'border-box'
	},
	gaugeLabel: {
		maxWidth: '30px'
	},
	linkTag: {
		color: '#c0ca33'
	},
	stickyNote: {
		minWidth: '290px',
		maxWidth: '350px',
		height: '300px',
		backgroundColor: '#cddc39',
		margin: 'auto',
		transform: 'rotate(3deg)',
		boxShadow: '8px 8px 5px 1px rgba(0, 0, 0, 0.25)',
		transition: 'transform 0.15s linear',
		'&:hover': {
			boxShadow: '10px 10px 7px rgba(0,0,0,.2)',
			transform: 'scale(1.05)',
			position: 'relative'
		}
	},
	noteTape: {
		width: '130px',
		height: '30px',
		position: 'absolute',
		transform: 'rotate(-3deg)',
		top: '-15px',
		backgroundColor: '#ffeb3b',
		opacity: 0.7
	},
	logo: {
		width: '100%',
		maxWidth: '400px',
		height: 'auto',
		margin: 'auto'
	},
	scroll: {
		width: '100%',
		height: 'auto',
		margin: 'auto'
	},
	gridList: {
		width: '100%',
		height: 'auto'
	},
	resultLine: {
		margin: '30px auto',
		'& div': {
			backgroundColor: '#cacaca',
			width: '120px',
			paddingTop: '10px',
			paddingBottom: '10px'
		},
		'& div:first-child': {
			backgroundColor: '#cddc39',
			borderTopLeftRadius: '10px',
			borderTopRightRadius: '10px'
		},
		'& div:last-child': {
			borderBottomLeftRadius: '10px',
			borderBottomRightRadius: '10px'
		}
	}
}))

export default useStyles
