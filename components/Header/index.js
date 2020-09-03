import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import { Box, Container } from '@material-ui/core'

const Header = () => {
	return (
		<Box bgcolor="primary.main" px={2} py={1}>
			<Container maxWidth="lg">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<div className="header-left">
						<Link href="/">
							<Box component="a" display="block" className={styles.logoWrap}>
								<img
									src="/static/img/mona-logo.png"
									className={`logo ${styles.logo}`}
									alt="logo"
								/>
							</Box>
						</Link>
					</div>
					<div className="header-right">
						<Link href="/home">
							<Box
								component="span"
								display="inline-block"
								className={styles.linkMenu}
							>
								<span>Home</span>
							</Box>
						</Link>
						<Link href="/auth/login">
							<Box
								component="span"
								display="inline-block"
								className={styles.linkMenu}
							>
								<span>Login</span>
							</Box>
						</Link>
						<Link href="/auth/signup">
							<Box
								component="span"
								display="inline-block"
								className={styles.linkMenu}
							>
								<span>Signup</span>
							</Box>
						</Link>
					</div>
				</Box>
			</Container>
		</Box>
	)
}

export default Header
