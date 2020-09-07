import React from 'react'
import { getLayout } from '~/components/Layout'
import Link from 'next/link'
import { Container } from '@material-ui/core'
const Result = () => {
	return (
		<Container maxWidth={`lg`}>
			<h1 className="text-primary text-center">Đây là trang result</h1>
		</Container>
	)
}
Result.getLayout = getLayout
export default Result
