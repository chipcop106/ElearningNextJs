import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'

const CourseDetail = () => {
	const router = useRouter()
	const { courseid } = router.query

	return (
		<Layout>
			<h1>Course: {courseid}</h1>
		</Layout>
	)
}

export default CourseDetail
