import React from 'react'
import { Container, Box, Typography } from '@material-ui/core'

const Footer = () => {
	return (
		<>
			<Box
				px={2}
				py={1.5}
				borderTop={1}
				borderColor={`grey.300`}
				style={{ backgroundColor: '#fff' }}
			>
				<Box
					display="flex"
					alignItems="center"
					justifyContent={`space-between`}
				>
					<Typography variant={`caption`} style={{ color: '#b4b4b4' }}>
						Developer by Mona Media
					</Typography>
					<Typography variant={`caption`} style={{ color: '#b4b4b4' }}>
						Copyright @ 2020
					</Typography>
				</Box>
			</Box>
		</>
	)
}

export default Footer
