import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	survey: {
		background: '#fdffef',
		borderRadius: '15px',
		paddingTop: '30px',
		paddingBottom: '25px',
		margin:'30px auto',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '450px'
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: '650px'
		},
		boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
	},
	slider: {
		height: '10px !important'
	},
	progress: {
		backgroundColor: '#D8D8D8',
		borderRadius: '20px',
		position: 'relative',
		height: '30px',
		width: 'auto'
	},
	progressDone: {
		background: 'linear-gradient(45deg, #d1ff33, #c6ff00)',
		boxShadow: '0 3px 3px -5px #F2709C, 0 2px 5px #F2709C',
		borderRadius: '20px',
		color: '#000',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: 0,
		opacity: 1,
		transition: '1s ease 0.3s'
	}
}))

export default useStyles