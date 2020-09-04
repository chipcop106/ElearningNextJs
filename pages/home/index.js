import React from 'react'
import Layout from '~/components/Layout'
import {
	Container,
	Paper,
	Avatar,
	Box,
	Typography,
	Button,
	Grid,
	CardHeader,
	CardMedia,
	Card,
	CardContent,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Link as LinkMU,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
	PhoneIphoneRounded,
	EmailRounded,
	VpnKey,
	PlayCircleOutline,
	Assignment,
	AssignmentTurnedIn,
	Subscriptions,
	LibraryBooksRounded,
} from '@material-ui/icons'
import CircularProgressWithLabel from '~/components/common/CircularProgressWithLabel'
import { colors } from '~/config'
import Link from 'next/link'

const courseDemo = [
	{
		id: 1,
		courseName: "MUI Treasury's customization examples.",
		deadline: '23/04/2020',
	},
	{
		id: 2,
		courseName: 'Lists are continuous, vertical indexes of text or images.',
		deadline: '15/07/2020',
	},
	{
		id: 3,
		courseName: 'Lists are continuous, vertical indexes of text or images.',
		deadline: '15/07/2020',
	},
	{
		id: 4,
		courseName: "MUI Treasury's customization examples.",
		deadline: '23/04/2020',
	},
	{
		id: 5,
		courseName: 'Lists are continuous, vertical indexes of text or images.',
		deadline: '15/07/2020',
	},
	{
		id: 6,
		courseName: "MUI Treasury's customization examples.",
		deadline: '23/04/2020',
	},
]

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: 125,
		height: 125,
	},
	media: {
		width: '100%',
		backgroundSize: 'contain',
		height: 200,
	},
	iconCourse: {
		width: 35,
		height: 35,
		color: colors.primaryLighten,
	},
	lightPrimaryBtn: {
		backgroundColor: 'rgba(75, 102, 135, 0.15)',
		paddingRight: '1rem',
		paddingLeft: '1rem',
	},
	cardHeader: {
		paddingBottom: 0,
		paddingTop: 0,
		'& .MuiCardHeader-action': {
			marginTop: 0,
			marginRight: 0,
		},
	},
	infoBoxWrap: {
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexWrap: 'wrap',

			'& .MuiListItem-root': {
				borderBottom: '1px solid #e1e1e1',
			},
		},
	},
	cardContainer: {
		height: '100%',
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

				<Typography component={`div`} variant={`caption`} display={`flex`}>
					<Typography
						variant={`inherit`}
						component={`span`}
						color="textSecondary"
					>
						Ngày hết hạn:
					</Typography>
					<Typography
						variant={`inherit`}
						component={`span`}
						style={{ marginLeft: '0.5rem', fontWeight: '600' }}
					>
						{item.deadline}
					</Typography>
				</Typography>
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

const Home = () => {
	const classes = useStyles()
	return (
		<Layout>
			<Container maxWidth={`lg`}>
				<h1 className="title-page">Dashboard</h1>
				<Paper>
					<Box p={4}>
						<Grid container>
							<Grid item xs={12} sm={12} md={6}>
								<Box mb={{ xs: 4, md: 0 }} display={`flex`}>
									<Avatar
										alt="User name"
										src="/static/img/avatar.jpg"
										className={classes.avatar}
									/>
									<Box pl={2}>
										<Typography variant={`h6`}>Huỳnh Thị Phương Anh</Typography>
										<Typography
											variant={`subtitle2`}
											style={{ color: '#b4b4b4' }}
											gutterBottom
										>
											Nhân viên kinh doanh
										</Typography>
										<Box display={`flex`} alignItems={`center`} mb={2} mt={1}>
											<Box display={`flex`} alignItems={`center`} mr={2}>
												<PhoneIphoneRounded />
												<Typography ml={1} color={`primary`}>
													0886706289
												</Typography>
											</Box>
											<Box display={`flex`} alignItems={`center`}>
												<EmailRounded />
												<Typography ml={1} color={`primary`}>
													dattocdo@gmail.com
												</Typography>
											</Box>
										</Box>
										<Button
											size={`small`}
											disableElevation
											variant={`contained`}
											color={`secondary`}
											startIcon={<VpnKey />}
										>
											Cập nhật
										</Button>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={6}>
								<Grid spacing={4} container>
									<Grid xs={6} sm={6} item>
										<Box align={`center`}>
											<Typography>Khóa học đã hoàn thành</Typography>
											<Box mt={2}>
												<CircularProgressWithLabel
													color={`primary`}
													thickness={4}
													size={100}
													value={66}
												/>
											</Box>
										</Box>
									</Grid>
									<Grid xs={6} item>
										<Box align={`center`}>
											<Typography>Bài tập chưa hoàn thành</Typography>
											<Box mt={2}>
												<CircularProgressWithLabel
													color={`secondary`}
													thickness={4}
													size={100}
													value={35}
												/>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Paper>
				<Box mt={2}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} md={6}>
							<Card>
								<Box p={2}>
									<CardHeader
										title="Khóa học đang học"
										className={classes.cardHeader}
										titleTypographyProps={{
											variant: 'h6',
										}}
										action={
											<Link href="/my-course/[courseid]" as={`/my-course/3`}>
												<Button
													color="link"
													startIcon={<PlayCircleOutline />}
													className={classes.lightPrimaryBtn}
													size="medium"
												>
													Học tiếp
												</Button>
											</Link>
										}
									/>
									<CardContent>
										<Box mb={2}>
											<Grid container>
												<Grid item xs={12} sm={6} md={6} lg={7}>
													<CardMedia
														className={classes.media}
														image="/static/img/learning.svg"
														title="Complete React Hooks 2020"
													/>
												</Grid>
												<Grid item xs={12} sm={6} md={6} lg={5}>
													<Box ml={{ sm: 2 }}>
														<List className={classes.infoBoxWrap}>
															<ListItem disableGutters>
																<ListItemIcon style={{ minWidth: 45 }}>
																	<Subscriptions
																		className={classes.iconCourse}
																	/>
																</ListItemIcon>
																<ListItemText
																	primaryTypographyProps={{
																		variant: 'subtitle2',
																	}}
																	secondaryTypographyProps={{
																		variant: 'caption',
																		color: 'textSecondary',
																	}}
																	primary="Video"
																	secondary="Hoàn thành: 2/12"
																/>
															</ListItem>
															<ListItem disableGutters>
																<ListItemIcon style={{ minWidth: 45 }}>
																	<Assignment className={classes.iconCourse} />
																</ListItemIcon>
																<ListItemText
																	primaryTypographyProps={{
																		variant: 'subtitle2',
																	}}
																	secondaryTypographyProps={{
																		variant: 'caption',
																		color: 'textSecondary',
																	}}
																	primary="Bài tập"
																	secondary="Hoàn thành: 5/15"
																/>
															</ListItem>
															<ListItem disableGutters>
																<ListItemIcon style={{ minWidth: 45 }}>
																	<AssignmentTurnedIn
																		className={classes.iconCourse}
																	/>
																</ListItemIcon>
																<ListItemText
																	primaryTypographyProps={{
																		variant: 'subtitle2',
																	}}
																	secondaryTypographyProps={{
																		variant: 'caption',
																		color: 'textSecondary',
																	}}
																	primary="Bài thi"
																	secondary="Hoàn thành : 2/4"
																/>
															</ListItem>
														</List>
													</Box>
												</Grid>
											</Grid>
										</Box>

										<Typography
											color="primary"
											variant={`h6`}
											component={`a`}
											align={`center`}
										>
											<Link href="/my-course/[courseid]" as={`/my-course/3`}>
												<Typography>
													Complete NextJS with static file generation
												</Typography>
											</Link>
										</Typography>
									</CardContent>
								</Box>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Card className={classes.cardContainer}>
								<Box
									p={2}
									flexDirection={`column`}
									display={`flex`}
									height={`100%`}
								>
									<CardHeader
										title="Khóa học cần hoàn thành"
										className={classes.cardHeader}
										titleTypographyProps={{
											variant: 'h6',
										}}
									/>
									<CardContent
										style={{
											paddingTop: 0,
											flexGrow: 1,
											maxHeight: '18.5rem',
											overflow: 'auto',
											marginTop: '0.5rem',
										}}
									>
										<List>
											<RenderRow lists={courseDemo} />
										</List>
									</CardContent>
								</Box>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Layout>
	)
}

export default Home
