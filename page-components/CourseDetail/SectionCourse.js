import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, IconButton, Link, Typography } from '@material-ui/core'
import {
	ArrowDropDown,
	PlayCircleFilled,
	Description,
} from '@material-ui/icons'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Box from '@material-ui/core/Box'
import { randomId } from '~/utils'
import Checkbox from '@material-ui/core/Checkbox'
import Accordion from '@material-ui/core/Accordion'
import { CourseContext } from '~/pages/my-course/[courseid]'

const useStyles = makeStyles((theme) => ({
	secWrap: {
		backgroundColor: '#F5F5F5',
		padding: '0.75rem 1rem',
		borderBottom: '1px solid #e1e1e1',
	},
	title: {
		fontSize: '1rem',
		fontWeight: 'bold',
	},
	meta: {
		fontSize: '0.875rem',
		color: '#b4b4b4',
	},
	titleVideo: {
		fontSize: '1rem',
	},
	listBody: {
		display: 'block',
		padding: 0,
	},
	metaIcon: {
		fontSize: '1rem',
	},
	itemContainer: {
		padding: '0.75rem',
		borderBottom: '1px solid #e1e1e1',
		'&.actived': {
			backgroundColor: 'rgba(31, 64, 105, 0.02)',
		},
	},
}))

const ListItem = ({ data, onClickLink, onCheckbox }) => {
	const classes = useStyles()
	const {
		id = 0,
		title = '',
		videoUrl = '',
		type = 1,
		timeLength = 0,
		completed = false,
	} = data
	const [checked, setChecked] = useState(completed)

	const _handleCheckbox = (event) => {
		setChecked(event.target.checked)
		//	onCheckbox(event.target.checked)
	}
	const _handleLinkClick = (event) => {
		onClickLink(data)
	}
	return (
		<CourseContext.Consumer>
			{(context) => (
				<Box
					display={`flex`}
					alignItems={`flex-start`}
					className={`${classes.itemContainer} ${
						context.activeItemId === id ? 'actived' : ''
					}`}
				>
					<Checkbox
						checked={checked}
						onChange={_handleCheckbox}
						color="primary"
						inputProps={{ 'aria-label': 'primary checkbox' }}
					/>
					<Box ml={1.5}>
						<Link onClick={() => context.onClickLinkVideo(data)}>
							<Typography className={classes.titleVideo}>{title}</Typography>
						</Link>
						<Box
							display={`flex`}
							alignItems={`center`}
							className={classes.meta}
							style={{ fontSize: '0.875rem' }}
						>
							{type === 1 ? (
								<>
									<PlayCircleFilled className={classes.metaIcon} />
									<Box ml={0.5}>Video</Box>
									<Divider
										mx={0.5}
										orientation={`vertical`}
										style={{ margin: '0 0.5rem', height: 15 }}
									/>
									<Box>3 giờ 15 phút</Box>
								</>
							) : (
								<>
									<Description className={classes.metaIcon} />
									<Box ml={0.5}>Bài viết</Box>
								</>
							)}
						</Box>
					</Box>
				</Box>
			)}
		</CourseContext.Consumer>
	)
}

const RenderListItem = ({ data }) => {
	return (
		<>
			{data.map((item, index) => (
				<ListItem
					key={`${item.id}`}
					data={{
						...item,
						title: `${index + 1}. ${item.title}`,
					}}
				/>
			))}
		</>
	)
}

const SectionGroup = ({ data: { groupName, meta, playlists } }) => {
	const classes = useStyles()
	return (
		<Accordion
			elevation={0}
			TransitionProps={{ unmountOnExit: true }}
			defaultExpanded={true}
		>
			<AccordionSummary
				expandIcon={<ArrowDropDown />}
				IconButtonProps={{
					size: 'medium',
					color: 'primary',
				}}
				className={classes.secWrap}
			>
				<Box className={classes.secHeader}>
					<Box>
						<Typography component={`h3`} className={classes.title}>
							{groupName}
						</Typography>
						<Typography component={`p`} className={classes.meta}>
							{meta}
						</Typography>
					</Box>
				</Box>
				<Box className={classes.secBody}></Box>
			</AccordionSummary>
			<AccordionDetails className={classes.listBody}>
				<RenderListItem data={playlists} />
			</AccordionDetails>
		</Accordion>
	)
}

export default SectionGroup
