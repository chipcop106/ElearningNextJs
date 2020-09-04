import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Box from '@material-ui/core/Box'

const Layout = ({ children }) => {
	return (
		<Box display="flex" flexDirection="column" style={{ height: '100vh' }}>
			<Header />
			<Box flexGrow={1} style={{ overflow: 'auto' }}>
				{children}
			</Box>
			<Footer />
		</Box>
	)
}

export default Layout
