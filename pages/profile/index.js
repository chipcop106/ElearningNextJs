import React from 'react'
import { getLayout } from '~/components/Layout'
import { Container } from '@material-ui/core'

const Profile = () => {
	return (
		<Container maxWidth={`xl`}>
			<h1 className="text-primary text-center">Đây là trang Profile</h1>
		</Container>
	)
}
Profile.getLayout = getLayout
export default Profile
