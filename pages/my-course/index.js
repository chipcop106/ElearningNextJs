import React from 'react'
import Layout from '~/components/Layout'
import Link from 'next/link'
const MyCourse = () => {
	return (
		<Layout>
			<h1 className="text-primary text-center">Đây là trang my course</h1>
			<Link href="/my-course/[courseid]" as={`/my-course/2`}>
				<a>Go to detail course</a>
			</Link>
		</Layout>
	)
}

export default MyCourse
