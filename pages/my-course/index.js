import React, { useEffect, useState } from 'react'
import { getLayout } from '~/components/Layout'
import Link from 'next/link'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import HorizontalCardCourse from '~/page-components/MyCourse/HorizontalCardCourse'
import { Skeleton, Pagination } from '@material-ui/lab'
const courseDemo = [
	{
		courseId: 1,
		src: null,
		courseName:
			'Display a placeholder preview of your content before the data gets loaded',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 15,
		totalVideo: 45,
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
		finished: false,
	},
	{
		courseId: 4,
		src: null,
		courseName: 'Inferring dimensions Finished Course',
		time: '20/10/2020 - 25/12/2020',
		finishedVideo: 37,
		totalVideo: 37,
		finished: true,
	},
]

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
						src={item.src}
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
			<Container maxWidth={`lg`}>
				<h1 className="title-page">Khóa học của tôi</h1>
				<Grid container>
					<Grid item md={8}>
						<AppBar
							position="static"
							color="default"
							className={classes.tabWrap}
						>
							<Tabs
								value={value}
								onChange={handleChange}
								variant="scrollable"
								scrollButtons="off"
								indicatorColor="primary"
								textColor="primary"
								aria-label="scrollable force tabs example"
							>
								<Tab label="Tất cả khóa học" {...a11yProps(0)} />
								<Tab label="Đang học" {...a11yProps(1)} />
								<Tab label="Sắp hết hạn" {...a11yProps(2)} />
								<Tab label="Đã hoàn thành" {...a11yProps(3)} />
							</Tabs>
						</AppBar>
						{isLoading ? (
							<TabPanel className={classes.tabPanel}>
								<HorizontalCardCourse loading={isLoading} />
							</TabPanel>
						) : (
							<>
								<TabPanel value={value} index={0} className={classes.tabPanel}>
									<>
										<ListCourse data={courseLists} />
										<Box display={`flex`} justifyContent={`center`} mt={4}>
											<Pagination count={10} color="primary" />
										</Box>
									</>
								</TabPanel>
								<TabPanel value={value} index={1} className={classes.tabPanel}>
									<ListCourse data={courseLists} />
									<Box display={`flex`} justifyContent={`center`} mt={4}>
										<Pagination count={10} color="primary" />
									</Box>
								</TabPanel>
								<TabPanel value={value} index={2} className={classes.tabPanel}>
									<ListCourse data={courseLists} />
									<Box display={`flex`} justifyContent={`center`} mt={4}>
										<Pagination count={10} color="primary" />
									</Box>
								</TabPanel>
								<TabPanel value={value} index={3} className={classes.tabPanel}>
									<ListCourse data={courseLists} />
									<Box display={`flex`} justifyContent={`center`} mt={4}>
										<Pagination count={10} color="primary" />
									</Box>
								</TabPanel>
							</>
						)}
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

MyCourse.getLayout = getLayout

export default MyCourse
