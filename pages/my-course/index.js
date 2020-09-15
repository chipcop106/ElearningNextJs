import React, { useEffect, useState } from 'react'
import { getLayout } from '~/components/Layout'
import Link from 'next/link'
import {
	Container,
	Grid,
	Link as LinkMU,
	List,
	ListItem,
	ListItemIcon,
	Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import HorizontalCardCourse from '~/page-components/MyCourse/HorizontalCardCourse'
import { Skeleton, Pagination } from '@material-ui/lab'
import Paper from '@material-ui/core/Paper'
import { colors } from '~/config'
import CircularProgress from '@material-ui/core/CircularProgress'
import { LibraryBooksRounded } from '@material-ui/icons'
import { randomId } from '~/utils'

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
		categoryName: 'Chuyên môn',
		categoryId: randomId(),
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
		categoryName: 'Quản lý cấp trung',
		categoryId: randomId(),
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
		categoryName: 'Quản lý cấp cao',
		categoryId: randomId(),
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
		categoryName: 'Kỹ năng mềm',
		categoryId: randomId(),
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
		categoryName: 'Hội nhập nhân viên mới',
		categoryId: randomId(),
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
		categoryName: 'Marketing',
		categoryId: randomId(),
	},
]

const RowItem = ({ item }) => {
	const classes = makeStyles({
		rowStyle: {
			borderBottom: '1px solid #e1e1e1',
		},
		leftIcon: {
			width: 30,
			height: 30,
			color: colors.primaryLighten,
		},
		rightIcon: {
			fontSize: 48,
		},
		link: {
			color: '#000',
			'&:hover': {
				color: colors.primary,
			},
		},
		deadline: {
			fontWeight: 600,
			letterSpacing: 1,
			fontFamily: 'Roboto',
		},
	})()
	return (
		<ListItem className={classes.rowStyle}>
			<ListItemIcon>
				<LibraryBooksRounded className={classes.leftIcon} />
			</ListItemIcon>
			<Box>
				<Link href={`/my-course/[courseid]`} as={`/my-course/3`}>
					<LinkMU className={classes.link}>
						<Typography variant={`subtitle2`}>{item.courseName}</Typography>
					</LinkMU>
				</Link>

				<Box component={`div`} display={`flex`}>
					<Typography
						variant={`caption`}
						component={`span`}
						color="textSecondary"
						style={{ marginRight: 5 }}
					>
						Hạn nộp:
					</Typography>
					<Typography
						variant={`caption`}
						component={`span`}
						color="textSecondary"
						className={classes.deadline}
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
							style={{ fontWeight: 600 }}
						>
							{`${Math.round(props?.number ?? 0)} / ${Math.round(
								props?.totalnumber ?? 0
							)}`}
						</Typography>
						{!!props.label && (
							<Typography variant={'subtitle1'} style={{ color: '#fff' }}>
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
		fontWeight: 400,
	},
	value: {
		color: '#fff',
		fontWeight: 600,
	},
	iconCourse: {
		width: 35,
		height: 35,
		color: colors.primaryLighten,
	},
}))

const ListCourse = ({ data }) => {
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
						finishedExercise={item.finishedExercise}
						totalExercise={item.totalExercise}
						src={item.src}
						category={item.categoryName}
					/>
				</Box>
			))}
		</>
	)
}

const MyCourse = () => {
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
		<>
			<Container maxWidth={`xl`}>
				<h1 className="title-page">Khóa học của tôi</h1>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={12} md={12} lg={8}>
						{isLoading ? (
							<>
								<Box mb={2} component={'div'}>
									<HorizontalCardCourse loading={isLoading} />
								</Box>
								<Box mb={2} component={'div'}>
									<HorizontalCardCourse loading={isLoading} />
								</Box>
								<Box mb={2} component={'div'}>
									<HorizontalCardCourse loading={isLoading} />
								</Box>
							</>
						) : (
							<>
								<ListCourse data={courseLists} />
								<Box display={`flex`} justifyContent={`center`} mt={4}>
									<Pagination count={10} color="primary" />
								</Box>
							</>
						)}
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={4}>
						<Box>
							<Paper className={classes.goalWrap}>
								<Box p={{ md: 4, xs: 2, sm: 2 }}>
									<Typography variant={`h6`} align={`center`}>
										Thành tích của bạn
									</Typography>
									<Box align={`center`} mt={2}>
										<CircularProgressWithLabel
											number={15}
											totalnumber={50}
											value={Math.round((15 * 100) / 50)}
											size={250}
											color={`secondary`}
											thickness={4}
											label={`Bài tập hoàn thành`}
											style={{ color: '#fff' }}
										/>
									</Box>
									<Box mt={2}>
										<Grid container spacing={4}>
											<Grid item md={6}>
												<Box display={`flex`} alignItems={`center`}>
													<CircularProgressWithLabel
														size={35}
														value={35}
														style={{
															marginRight: '1rem',
															color: 'rgb(79, 255, 86)',
														}}
													/>
													<Box>
														<Typography
															variant={`subtitle1`}
															className={classes.label}
														>
															Nộp đúng hạn
														</Typography>
														<Typography
															variant={`subtitle2`}
															className={classes.value}
														>
															32 bài tập
														</Typography>
													</Box>
												</Box>
											</Grid>
											<Grid item md={6}>
												<Box display={`flex`} alignItems={`center`}>
													<CircularProgressWithLabel
														size={35}
														value={35}
														style={{
															marginRight: '1rem',
															color: 'rgb(255, 182, 194)',
														}}
													/>
													<Box>
														<Typography
															variant={`subtitle1`}
															className={classes.label}
														>
															Nộp trễ hạn
														</Typography>
														<Typography
															variant={`subtitle2`}
															className={classes.value}
														>
															32 bài tập
														</Typography>
													</Box>
												</Box>
											</Grid>
										</Grid>
									</Box>
								</Box>
							</Paper>
							<Paper
								style={{
									marginTop: '-1rem',
									borderRadius: '16px 16px 4px 4px',
									boxShadow: '0px -10px 16px 0px rgba(255,255,255,.25)',
								}}
							>
								<Box p={{ md: 4, xs: 2, sm: 2 }}>
									<Typography variant={`h6`}>Bài tập sắp tới hạn</Typography>
									<Box
										style={{
											paddingTop: 0,
											flexGrow: 1,
											maxHeight: '18.5rem',
											overflow: 'auto',
											marginTop: '0.5rem',
										}}
									>
										<List>
											<RenderRow
												lists={[...courseDemo].map((item) => ({
													id: item.courseId,
													courseName: item.courseName,
													deadline: item.time,
												}))}
											/>
										</List>
									</Box>
								</Box>
							</Paper>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

MyCourse.getLayout = getLayout

export default MyCourse
