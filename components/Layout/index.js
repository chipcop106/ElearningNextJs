import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Box from '@material-ui/core/Box'

const Layout = ({ children }) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			style={{ height: 'var(--app-height)' }}
		>
			<Header />
			<Box flexGrow={1} style={{ overflow: 'auto' }}>
				{children}
			</Box>
			<Footer />
		</Box>
	)
}

export const getLayout = (page) => <Layout>{page}</Layout>

export default Layout
