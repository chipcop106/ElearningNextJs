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
import {
	Notifications,
	ArrowDropDown,
	Menu as MenuIcon,
} from '@material-ui/icons'
//import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/styles'
import Hidden from '@material-ui/core/Hidden'
import { colors } from '~/config'
import CloseIcon from '@material-ui/icons/Close'
import Badge from '@material-ui/core/Badge'

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
		color: '#fff',
	},
}))

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
	const [menuMobileShow, setMenuMobileShow] = useState(false)
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
	const toggleMenuMobile = () => {
		setMenuMobileShow(!menuMobileShow)
	}

	const classes = useStyles()
	return (
		<Box bgcolor="primary.main" py={1}>
			<Container maxWidth="xl">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Box display="flex">
						<Hidden mdUp>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={toggleMenuMobile}
							>
								<MenuIcon />
							</IconButton>
						</Hidden>

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
						<Hidden mdDown>
							<Divider
								orientation="vertical"
								flexItem
								className={styles.divider}
								style={{ marginRight: '1rem !important' }}
							/>
						</Hidden>
						<Box
							display="flex"
							alignItems="center"
							id={`main-menu`}
							className={`${menuMobileShow ? 'mobile-open' : ''}`}
						>
							<Hidden mdUp>
								<Box
									display={`flex`}
									justifyContent={`space-between`}
									alignItems={`center`}
									style={{
										padding: '0.75rem',
										borderBottom: '1px solid ' + colors.primaryLighten,
									}}
								>
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
									<IconButton
										edge="end"
										style={{ color: '#fff' }}
										color="inherit"
										aria-label="menu"
										onClick={toggleMenuMobile}
									>
										<CloseIcon />
									</IconButton>
								</Box>
							</Hidden>
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
						<div
							className={`overlay-menu`}
							onClick={() => setMenuMobileShow(false)}
						/>
					</Box>
					<Box className="header-right" display="flex" alignItems="center">
						<Box>
							<Badge
								badgeContent={100}
								max={99}
								color="secondary"
								onClick={showNotification}
							>
								<Notifications
									aria-controls="notification"
									aria-haspopup="true"
									className={styles.iconColor}
									fontSize="large"
								/>
							</Badge>

							<DropDownMenu
								id="notification"
								anchorEl={notiEl}
								keepMounted
								open={Boolean(notiEl)}
								onClose={closeNotification}
								className={`dropdown-angle`}
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
								<Hidden xsDown>
									<Typography style={{ color: '#fff' }}>
										Huỳnh Thị Phương Anh
									</Typography>
								</Hidden>
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
							className={`dropdown-angle`}
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
