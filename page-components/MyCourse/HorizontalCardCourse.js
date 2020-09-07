import React, { useState, useMemo } from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'
import { PlayCircleFilled, CheckCircle } from '@material-ui/icons'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'
import green from '@material-ui/core/colors/green'
import { colors } from '~/config'
import Link from 'next/link'
import Hidden from '@material-ui/core/Hidden'
import { Skeleton } from '@material-ui/lab'

const LinearProgressWithLabel = (props) => {
	return (
		<Box display="flex" alignItems="center">
			<Box width="100%" mr={1}>
				<LinearProgress
					style={{ height: 5 }}
					variant="determinate"
					{...props}
				/>
			</Box>
			<Box minWidth={35}>
				<Typography variant="body2" color="textSecondary">{`${Math.round(
					props.value
				)}%`}</Typography>
			</Box>
		</Box>
	)
}

const useStyles = makeStyles((theme) => ({
	boxFlex: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			flexWrap: 'wrap',
		},
	},
	progress: {
		width: 150,
		marginRight: '2rem',
	},
	title: {
		[theme.breakpoints.down('sm')]: {
			flexBasis: '100%',
		},
	},
	btnSuccess: {
		[theme.breakpoints.down('xs')]: {
			marginLeft: '3.5rem',
			marginTop: '1rem',
		},
	},
}))
const SuccessButton = withStyles((theme) => ({
	root: {
		color: '#fff',
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700],
		},
	},
}))(Button)

const HorizontalCardCourse = ({
	courseId = 0,
	src,
	courseName = '',
	time = '',
	finishedVideo = 0,
	totalVideo = 0,
	finished = false,
	loading = false,
}) => {
	const classes = useStyles()
	return (
		<Paper elevation={0}>
			<Box className={classes.boxFlex} p={3}>
				<Box
					flexGrow={1}
					display={`flex`}
					alignItems={`center`}
					className={classes.title}
				>
					<Box mr={2}>
						{loading ? (
							<Skeleton
								animation="wave"
								variant="circle"
								width={40}
								height={40}
							/>
						) : (
							<Avatar
								src={!!src ? src : '/static/img/book.svg'}
								className={classes.icon}
							/>
						)}
					</Box>
					<Box flexGrow={1}>
						<Typography variant={'subtitle2'} style={{ fontSize: '1rem' }}>
							{loading ? <Skeleton /> : courseName}
						</Typography>
						{!!finished ? (
							<Box color={`success.main`} display="flex" alignItems={`center`}>
								<CheckCircle />
								<Typography style={{ marginLeft: '0.25rem' }}>
									{loading ? <Skeleton width="30%" /> : 'Hoàn thành'}
								</Typography>
							</Box>
						) : (
							<Typography
								variant={'caption'}
								style={{ marginBottom: 0, color: '#b4b4b4' }}
							>
								{loading ? <Skeleton width="30%" /> : time}
							</Typography>
						)}
					</Box>
				</Box>

				<Box flexShrink={0} display={`flex`} alignItems={`center`}>
					<Hidden xsDown>
						<Box className={classes.progress} ml={{ xs: 6.5, sm: 6.5, md: 4 }}>
							<Box display={`flex`} alignItems={`center`}>
								{loading ? (
									<Skeleton width={100} />
								) : (
									<>
										<PlayCircleFilled color={`primary`} />
										<Box ml={0.5}>
											<Typography component={`span`}>
												{finishedVideo}
											</Typography>
											<Typography
												component={`span`}
												style={{ color: '#b4b4b4' }}
											>
												{' '}
												/ {totalVideo}
											</Typography>
										</Box>
									</>
								)}
							</Box>
							{loading ? (
								<Skeleton width={100} />
							) : (
								<LinearProgressWithLabel
									value={(finishedVideo * 100) / totalVideo}
									color={`secondary`}
								/>
							)}
						</Box>
					</Hidden>
					{loading ? (
						<Skeleton height={60} width={100} />
					) : (
						<Link href={'/my-course/[courseid]'} as={`/my-course/${courseId}`}>
							<SuccessButton
								variant="contained"
								size="large"
								bgcolor={`success.main`}
								className={classes.btnSuccess}
							>
								Xem khóa học
							</SuccessButton>
						</Link>
					)}
				</Box>
			</Box>
		</Paper>
	)
}

export default HorizontalCardCourse