import React, { useState } from 'react'
import Link from 'next/link'
import {
	Box,
	Container,
	Avatar,
	Typography,
	Menu,
	MenuItem,
	Fade,
} from '@material-ui/core'
import styles from './header.module.scss'
import { Notifications, ArrowDropDown } from '@material-ui/icons'
//import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider'

const DropDownMenu = (props) => {
	return (
		<Menu
			elevation={0}
			getContentAnchorEl={null}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
			{...props}
		/>
	)
}

const Header = () => {
	const [notiEl, setNotiEl] = useState(null)
	const [userMenuEl, setUserMenuEl] = useState(null)
	const showNotification = (event) => {
		setNotiEl(event.currentTarget)
	}
	const closeNotification = (event) => {
		setNotiEl(null)
	}
	const showUserMenu = (event) => {
		setUserMenuEl(event.currentTarget)
	}
	const closeUserMenu = (event) => {
		setUserMenuEl(null)
	}
	return (
		<Box bgcolor="primary.main" px={2} py={1}>
			<Container maxWidth="lg">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Box display="flex">
						<Link href="/">
							<Box
								component="a"
								display="inline-flex"
								alignItems="center"
								className={styles.logoWrap}
							>
								<img
									src="/static/img/mona-logo.png"
									className={`logo ${styles.logo}`}
									alt="logo"
								/>
							</Box>
						</Link>
						<Divider
							orientation="vertical"
							flexItem
							className={styles.divider}
							style={{ marginRight: '1rem !important' }}
						/>
						<Box display="flex" alignItems="center">
							<Link href="/home">
								<Box
									component="span"
									display="inline-block"
									className={`${styles.linkMenu} ${styles.active} active-menu`}
								>
									<a className={styles.link}>Dashboard</a>
								</Box>
							</Link>
							<Link href="/my-course">
								<Box
									component="span"
									display="inline-block"
									className={styles.linkMenu}
								>
									<a className={styles.link}>Khóa học của tôi</a>
								</Box>
							</Link>
							<Link href="/result">
								<Box
									component="span"
									display="inline-block"
									className={styles.linkMenu}
								>
									<a className={styles.link}>Kết quả học tập</a>
								</Box>
							</Link>
						</Box>
					</Box>
					<Box className="header-right" display="flex" alignItems="center">
						<Box>
							<Notifications
								aria-controls="notification"
								aria-haspopup="true"
								onClick={showNotification}
								className={styles.iconColor}
								fontSize="large"
							/>
							<DropDownMenu
								id="notification"
								anchorEl={notiEl}
								keepMounted
								open={Boolean(notiEl)}
								onClose={closeNotification}
							>
								<Box p={2}>Nội dung bên trong notification</Box>
							</DropDownMenu>
						</Box>
						<Divider
							orientation="vertical"
							flexItem
							className={styles.divider}
						/>

						<Box display="flex" onClick={showUserMenu} className={styles.link}>
							<Avatar alt="Remy Sharp" src="/static/img/avatar.jpg" />
							<Box display="flex" alignItems="center" ml={1}>
								<Typography style={{ color: '#fff' }}>
									Huỳnh Thị Phương Anh
								</Typography>
								<ArrowDropDown style={{ color: '#fff' }} />
							</Box>
						</Box>
						<DropDownMenu
							id="user-information"
							anchorEl={userMenuEl}
							keepMounted
							open={Boolean(userMenuEl)}
							onClose={closeUserMenu}
							TransitionComponent={Fade}
						>
							<Box p={2}>Nội dung bên trong user profile</Box>
						</DropDownMenu>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Header
