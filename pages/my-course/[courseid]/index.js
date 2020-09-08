import React, { useReducer, useEffect, createContext } from 'react'
import { useRouter } from 'next/router'
import { getLayout } from '~/components/Layout'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Typography, Chip, Box } from '@material-ui/core'
import { Menu, LocalLibrary } from '@material-ui/icons'
import { colors } from '~/config'
import SectionGroup from '~/page-components/CourseDetail/SectionCourse'
import { randomId } from '~/utils'
import { useWindowSize } from '~/hooks/useWindowSize'
import ReactPlayer from 'react-player/youtube'
const videoPlaylistsDemo = [
	{
		sectionId: randomId(),
		sectionName: 'Section 1: Install package',
		playlists: [
			{
				id: randomId(),
				title:
					'How to play e-learning web application Referring to window size in React Material-UI makeStyles',
				videoUrl: 'https://www.youtube.com/embed/FDa5r8AvGig',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/watch?v=FjHGZj2IjBk',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/watch?v=RYcaG64JkqM',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/watch?v=g8NVwN0_mks',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application ',
				videoUrl: 'https://www.youtube.com/watch?v=aG51brxM1kk',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title:
					'How to play e-learning web application Referring to window size in React Material-UI makeStyles',
				videoUrl: 'https://www.youtube.com/watch?v=Cp8D1bqIt3A',
				type: 2, // 1 Video || 2 Post
				timeLength: 30,
			},
		],
	},
	{
		sectionId: randomId(),
		sectionName: 'Section 2: First App with NexJS',
		playlists: [
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/embed/FDa5r8AvGig',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/watch?v=FjHGZj2IjBk',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/embed/FDa5r8AvGig',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/watch?v=FjHGZj2IjBk',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/embed/FDa5r8AvGig',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/watch?v=FjHGZj2IjBk',
				type: 2, // 1 Video || 2 Post
				timeLength: 30,
			},
		],
	},
	{
		sectionId: randomId(),
		sectionName: 'Section 3: How to build project with create-new-app ?',
		playlists: [
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/embed/FDa5r8AvGig',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/watch?v=FjHGZj2IjBk',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/embed/FDa5r8AvGig',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/watch?v=FjHGZj2IjBk',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/embed/FDa5r8AvGig',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/watch?v=FjHGZj2IjBk',
				type: 2, // 1 Video || 2 Post
				timeLength: 30,
			},
		],
	},
	{
		sectionId: randomId(),
		sectionName: 'Section 4: Complete deploy app on Heroku !',
		playlists: [
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/embed/FDa5r8AvGig',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/watch?v=FjHGZj2IjBk',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/embed/FDa5r8AvGig',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/watch?v=FjHGZj2IjBk',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/embed/FDa5r8AvGig',
				type: 1, // 1 Video || 2 Post
				timeLength: 30,
			},
			{
				id: randomId(),
				title: 'How to play e-learning web application',
				videoUrl: 'https://www.youtube.com/watch?v=FjHGZj2IjBk',
				type: 2, // 1 Video || 2 Post
				timeLength: 30,
			},
		],
	},
]

const initialState = {
	isLoading: true,
	videoPlaylists: [],
	activeVideo: null,
}

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
		color: '#000',
	},
	progressBar: {
		height: '4px',
		borderRightTopRadius: 4,
		borderRightBottomRadius: 4,
		backgroundColor: colors.secondary,
		width: 0,
		position: 'absolute',
		bottom: '-2px',
		left: 0,
	},
	summaryBar: {
		position: 'relative',
		paddingLeft: '1rem',
		width: 400,
		flexShrink: 0,
	},
	videoPlayback: {
		height: '100%',
		overflow: 'hidden',
	},
	sidebarWrap: {
		width: 400,
		overflowX: 'hidden',
		overflowY: 'auto',
		backgroundColor: '#fff',
		boxShadow: 'rgba(0,0,0, .075)',
		'& .MuiAccordion-root.Mui-expanded:first-child': {
			marginBottom: 0,
		},
		'& .MuiAccordion-root.Mui-expanded': {
			margin: 0,
		},
		'& .MuiAccordionSummary-content.Mui-expanded, & .MuiAccordionSummary-content': {
			margin: 0,
		},
	},
	videoWrap: {
		position: 'relative',
	},
}))

const reducer = (prevState, { type, payload }) => {
	switch (type) {
		case 'SET_VIDEO_SOURCE': {
			return {
				...prevState,
				videoPlaylists: payload, // arr
			}
		}
		case 'SET_LOADING': {
			return {
				...prevState,
				isLoading: payload, // bool
			}
		}
		case 'SET_ACTIVE_VIDEO': {
			return {
				...prevState,
				activeVideo: payload,
			}
		}
		default:
			return prevState
	}
}

const Playlists = ({ videoPlaylists }) => {
	return (
		<>
			{[...videoPlaylists].map((section) => (
				<SectionGroup
					key={`${section.sectionId}`}
					data={{
						groupName: section?.sectionName ?? '',
						meta: '145 Video | 15 hour 30 min',
						playlists: section.playlists,
					}}
				/>
			))}
		</>
	)
}

export const CourseContext = createContext({})

const CourseDetail = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const router = useRouter()
	const { courseid } = router.query
	const classes = useStyles()
	const { width, height } = useWindowSize()
	const setLoading = (value) => {
		dispatch({ type: 'SET_LOADNG', payload: value })
	}

	const setActiveVideo = (video) => {
		dispatch({ type: 'SET_ACTIVE_VIDEO', payload: video })
	}

	const _toggleSidenav = () => {
		alert('toggled')
	}

	const _handleClickPlaylist = (video) => {
		setActiveVideo(video)
	}

	useEffect(() => {
		dispatch({ type: 'SET_VIDEO_SOURCE', payload: videoPlaylistsDemo })
		setTimeout(() => setLoading(false), 2000)
	}, [])

	useEffect(() => {
		if (!!!state.videoPlaylists || !!!state.videoPlaylists[0]?.playlists[0])
			return
		setActiveVideo(state.videoPlaylists[0].playlists[0])
	}, [state.videoPlaylists])

	return (
		<CourseContext.Provider
			value={{
				onClickLinkVideo: _handleClickPlaylist,
				activeItemId: state?.activeVideo?.id,
			}}
		>
			<Box display={`flex`} style={{ backgroundColor: '#fff' }}>
				<Box
					display={`flex`}
					justifyContent={`space-between`}
					alignItems={`center`}
					border={1}
					style={{ borderColor: '#e1e1e1', borderRight: 0 }}
					className={classes.summaryBar}
				>
					<Box>
						<Box
							display={`inline-block`}
							pr={2}
							style={{ verticalAlign: 'middle' }}
						>
							<Typography
								style={{ fontWeight: 600, fontSize: '1.15rem' }}
								color={`primary`}
							>
								25 / 45
							</Typography>
						</Box>
						<Typography
							component={`span`}
							style={{ color: '#b4b4b4', verticalAlign: 'middle' }}
						>
							Đã hoàn thành
						</Typography>
					</Box>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="sidenav"
						onClick={_toggleSidenav}
					>
						<Menu />
					</IconButton>
					<Box
						component={`span`}
						className={classes.progressBar}
						style={{ width: '50%' }}
					/>
				</Box>
				<Box
					pl={2}
					border={1}
					style={{ borderColor: '#e1e1e1' }}
					flexGrow={1}
					display={`flex`}
					alignItems={`center`}
				>
					<Box mr={2}>
						<Chip
							label="Course"
							color="secondary"
							size="small"
							icon={<LocalLibrary />}
						/>
					</Box>
					<Typography
						variant={`h5`}
						component="h1"
						color={`primary`}
						noWrap={true}
					>
						Learning Next JS With Mona Media
					</Typography>
				</Box>
			</Box>
			<Box display={`flex`}>
				<Box className={classes.sidebarWrap} height={height - 164}>
					<Playlists videoPlaylists={state?.videoPlaylists ?? []} />
				</Box>
				<Box className={classes.videoWrap} flexGrow={1}>
					{!!state?.activeVideo && !!state?.activeVideo?.videoUrl && (
						<Box className={classes.videoPlayback}>
							<ReactPlayer
								controls={true}
								loop={false}
								width="100%"
								height="100%"
								config={{
									youtube: {
										playerVars: {
											autohide: 1,
											modestbranding: 1,
											rel: 0,
										},
									},
								}}
								url={state?.activeVideo?.videoUrl ?? 'about:blank'}
							/>
						</Box>
					)}
				</Box>
			</Box>
		</CourseContext.Provider>
	)
}

CourseDetail.getLayout = getLayout

export default CourseDetail
