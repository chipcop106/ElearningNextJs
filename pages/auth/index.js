import React from 'react'
import Layout from '~/components/Layout'
import { Button, Box } from '@material-ui/core'
const Authentication = () => {
	return (
		<Layout>
			<Box bgcolor="secondary.main">
				<Button variant="contained" color="primary">
					Primary
				</Button>
			</Box>
		</Layout>
	)
}

export default Authentication
