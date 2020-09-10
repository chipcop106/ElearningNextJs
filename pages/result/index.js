import React, { useEffect, useState } from 'react'
import { getLayout } from '~/components/Layout'
import Link from 'next/link'
import {
	Container,
	Grid,
	Link as LinkMU,
	ListItem,
	ListItemIcon,
	Typography,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { LibraryBooksRounded } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import HorizontalCardCourse from '~/page-components/MyCourse/HorizontalCardCourse'
import { Pagination } from '@material-ui/lab'
import { colors } from '~/config'
import CircularProgress from '@material-ui/core/CircularProgress'
import MyRanking from '~/page-components/Result/MyRanking'

const courseDemo = [
	{
		courseId: 1,
		src: null,
		courseName:
			'Display a placeholder preview of your content before the data gets loaded',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 15,
		totalVideo: 45,
		totalExercise: 45,
		finishedExercise: 15,
		finished: false,
	},
	{
		courseId: 2,
		src: null,
		courseName:
			'The component is designed to be used directly in your components',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 35,
		totalVideo: 38,
		totalExercise: 45,
		finishedExercise: 15,
		finished: false,
	},
	{
		courseId: 3,
		src: null,
		courseName:
			'It works well when it comes to typography as its height is set using em units.',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 25,
		totalVideo: 56,
		totalExercise: 45,
		finishedExercise: 15,
		finished: false,
	},
	{
		courseId: 4,
		src: null,
		courseName: 'Inferring dimensions Finished Course',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 37,
		totalVideo: 37,
		totalExercise: 45,
		finishedExercise: 45,
		finished: true,
	},
	{
		courseId: 5,
		src: null,
		courseName: 'Inferring dimensions Finished Course',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 25,
		totalVideo: 50,
		totalExercise: 45,
		finishedExercise: 15,
		finished: false,
	},
	{
		courseId: 6,
		src: null,
		courseName: 'Inferring dimensions Finished Course',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 33,
		totalVideo: 78,
		totalExercise: 45,
		finishedExercise: 15,
		finished: false,
	},
	{
		courseId: 7,
		src: null,
		courseName: 'Inferring dimensions Finished Course',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 37,
		totalVideo: 37,
		totalExercise: 45,
		finishedExercise: 45,
		finished: true,
	},
	{
		courseId: 8,
		src: null,
		courseName: 'Inferring dimensions Finished Course',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 37,
		totalVideo: 37,
		totalExercise: 45,
		finishedExercise: 45,
		finished: true,
	},
	{
		courseId: 9,
		src: null,
		courseName: 'Inferring dimensions Finished Course',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 37,
		totalVideo: 37,
		totalExercise: 45,
		finishedExercise: 45,
		finished: true,
	},
	{
		courseId: 10,
		src: null,
		courseName: 'Inferring dimensions Finished Course',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 37,
		totalVideo: 37,
		totalExercise: 45,
		finishedExercise: 45,
		finished: true,
	},
]

const useStyles = makeStyles((theme) => ({
	tabWrap: {
		backgroundColor: 'transparent',
		boxShadow: '0px 1px 0px 0px #e1e1e1',
	},
	tabPanel: {
		'& > .MuiBox-root': {
			padding: '1.5rem 0',
		},
	},
	goalWrap: {
		background: `radial-gradient(${colors.primaryLighten}, ${colors.primary})`,
		color: '#fff',
		paddingBottom: '2rem',
		zIndex: '-1',
		position: 'relative',
	},
	label: {
		color: '#fff',
		fontWeight: 'bold',
	},
	value: {
		color: '#ccc',
		fontWeight: 'bold',
	},
	iconCourse: {
		width: 35,
		height: 35,
		color: colors.primaryLighten,
	},
}))

const RowItem = ({ item }) => {
	const classes = makeStyles({
		rowStyle: {
			borderBottom: '1px solid #e1e1e1',
		},
		leftIcon: {
			width: 30,
			height: 30,
			color: '#b4b4b4',
		},
		rightIcon: {
			fontSize: 48,
		},
	})()
	return (
		<ListItem className={classes.rowStyle}>
			<ListItemIcon>
				<LibraryBooksRounded className={classes.leftIcon} />
			</ListItemIcon>
			<Box>
				<Link href={`/my-course/[courseid]`} as={`/my-course/3`}>
					<LinkMU>
						<Typography variant={`subtitle2`}>{item.courseName}</Typography>
					</LinkMU>
				</Link>

				<Box component={`div`} display={`flex`}>
					<Typography
						variant={`caption`}
						component={`span`}
						color="textSecondary"
					>
						Hạn nộp:
					</Typography>
					<Typography
						variant={`caption`}
						component={`span`}
						style={{ marginLeft: '0.5rem', fontWeight: '600' }}
					>
						{item.deadline}
					</Typography>
				</Box>
			</Box>
			{/*<ListItemText*/}
			{/*	primary={item.courseName}*/}
			{/*	secondary={`Deadline: ${item.deadline}`}*/}
			{/*/>*/}
		</ListItem>
	)
}

const RenderRow = ({ lists }) => {
	return [...lists].map((item, index) => (
		<RowItem key={`${index}`} item={item} />
	))
}

const CircularProgressWithLabel = (props) => {
	return (
		<Box position="relative" display="inline-flex">
			<Box top={0} left={0} bottom={0} right={0} position="absolute">
				<CircularProgress
					variant="static"
					{...props}
					style={{ color: 'rgba(255,255,255,.35)' }}
					value={100}
				/>
			</Box>
			<CircularProgress variant="static" {...props} />
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position="absolute"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				{!!props.number && !!props.totalnumber && (
					<Box align={`center`}>
						<Typography
							variant="h5"
							component="div"
							fontSize="large"
							style={{ fontWeight: 'bold' }}
						>
							{`${Math.round(props?.number ?? 0)} / ${Math.round(
								props?.totalnumber ?? 0
							)}`}
						</Typography>
						{!!props.label && (
							<Typography
								variant={'subtitle1'}
								style={{ color: '#ccc', fontWeight: 'bold' }}
							>
								{props.label}
							</Typography>
						)}
					</Box>
				)}
			</Box>
		</Box>
	)
}

const TabPanel = (props) => {
	const { children, value, index, ...other } = props
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	)
}

const a11yProps = (index) => ({
	id: `scrollable-force-tab-${index}`,
	'aria-controls': `scrollable-force-tabpanel-${index}`,
})

const ListCourse = ({ data, warningDate = false }) => {
	return (
		<>
			{[...data].map((item) => (
				<Box key={`${item.courseId}`} mb={2} component={'div'}>
					<HorizontalCardCourse
						courseName={item.courseName}
						time={item.time}
						finishedVideo={item.finishedVideo}
						totalVideo={item.totalVideo}
						finished={item.finished}
						courseId={item.courseId}
						src={item.src}
						finishedExercise={item.finishedExercise}
						totalExercise={item.totalExercise}
						warningDate={true}
					/>
				</Box>
			))}
		</>
	)
}

const Result = () => {
	const classes = useStyles()
	const [value, setValue] = useState(0)
	const [courseLists, setCourseLists] = useState(courseDemo)
	const [isLoading, setIsloading] = useState(true)
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	useEffect(() => {
		setIsloading(true)
		const t = setTimeout(() => {
			setIsloading(false)
		}, 1500)
		return () => clearTimeout(t)
	}, [value])
	return (
		<Container maxWidth={`xl`}>
			<h1 className="title-page">Kết quả học tập</h1>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={12} md={12} lg={8}>
					<AppBar position="static" color="default" className={classes.tabWrap}>
						<Tabs
							value={value}
							onChange={handleChange}
							variant="scrollable"
							scrollButtons="off"
							indicatorColor="primary"
							textColor="primary"
							aria-label="scrollable force tabs example"
						>
							<Tab label="Khóa học đã hoàn thành" {...a11yProps(0)} />
							<Tab label="Khóa học sắp hết hạn" {...a11yProps(1)} />
						</Tabs>
					</AppBar>
					{isLoading ? (
						<TabPanel className={classes.tabPanel}>
							<Box mb={2} component={'div'}>
								<HorizontalCardCourse loading={isLoading} />
							</Box>
							<Box mb={2} component={'div'}>
								<HorizontalCardCourse loading={isLoading} />
							</Box>
							<Box mb={2} component={'div'}>
								<HorizontalCardCourse loading={isLoading} />
							</Box>
						</TabPanel>
					) : (
						<>
							<TabPanel value={value} index={0} className={classes.tabPanel}>
								<>
									<ListCourse
										data={[...courseLists].filter(
											(item) => item.finished === true
										)}
									/>
									<Box display={`flex`} justifyContent={`center`} mt={4}>
										<Pagination count={10} color="primary" />
									</Box>
								</>
							</TabPanel>
							<TabPanel value={value} index={1} className={classes.tabPanel}>
								<ListCourse
									data={[...courseLists].filter(
										(item) => item.finished !== true
									)}
									warningDate={true}
								/>
								<Box display={`flex`} justifyContent={`center`} mt={4}>
									<Pagination count={10} color="primary" />
								</Box>
							</TabPanel>
						</>
					)}
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={4}>
					<Box>
						<MyRanking />
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}
Result.getLayout = getLayout
export default Result
