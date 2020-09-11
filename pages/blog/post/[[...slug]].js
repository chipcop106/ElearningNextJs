import { useRouter } from 'next/router'
import { getLayout } from '~/components/Layout'
import React, { useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import { ArrowDownward, ArrowDropDown, ChevronRight } from '@material-ui/icons'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { BlogCard } from '~/components/common/BlogCard'
import { Pagination } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { scrollToSmoothly } from '~/utils'

const useStyles = makeStyles((theme) => ({
	featuredContainer: {
		zIndex: 2,
		position: 'relative',
		height: 'calc(100vh - 124px)',
	},
	featuredBlog: {
		backgroundImage: `url('/static/img/blog-banner.jpg')`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		position: 'relative',
	},
	featureOverlay: {
		content: '',
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: 'rgba(0,0,0,.6)',
		zIndex: 1,
	},
	textBox: {
		position: 'absolute',
		zIndex: 2,
		top: 'calc(50% - 2rem)',
		left: 0,
		padding: '0 1.5rem',
		transform: `translateY(-50%)`,
		color: '#fff',
		marginBottom: '2rem',
		textAlign: 'center',
	},
	categoryFeatured: {
		fontWeight: 'bold',
		color: theme.palette.error.light,
		marginBottom: '0.5rem',
		textTransform: 'uppercase',
	},
	containerBlog: {
		marginTop: '-4rem',
		marginBottom: '4rem',
		position: 'relative',
		zIndex: 2,
		padding: '0 -4rem',
	},
	titleSec: {
		fontSize: '2.25rem',
		fontWeight: 200,
		fontFamily: 'Roboto',
	},
	meta: {
		fontWeight: 400,
		fontFamily: 'Roboto',
		fontSize: 14,
		color: '#ccc',
	},
	elipsis: {
		width: '100%',
		overflow: 'hidden',
		display: '-webkit-box',
		'-webkit-line-clamp': 3,
		'-webkit-box-orient': 'vertical',
	},
	categoryList: {
		margin: '0 -0.5rem',
	},
}))
let bodyEl

const Post = () => {
	const classes = useStyles()
	const router = useRouter()

	const scrollDownSection = (e) => {
		e.preventDefault()
		bodyEl = document.querySelector('#__next > div > div:nth-child(2)')
		if (!bodyEl) return
		const scrollPost = bodyEl.offsetHeight - 124
		scrollToSmoothly(bodyEl, scrollPost, 800)
	}

	const cleanComponent = () => {
		bodyEl = null
	}

	useEffect(() => {
		return cleanComponent
	}, [])

	return (
		<>
			<section>
				<Box className={classes.featuredBlog}>
					<Container maxWidth={`lg`} className={classes.featuredContainer}>
						<Box className={classes.textBox}>
							<Typography
								variant={`h2`}
								component={`h1`}
								className={classes.categoryTitle}
							>
								Build full nextjs app with react-hook 2020
							</Typography>
							<Box mt={4}>
								<Button
									variant={`text`}
									color={`secondary`}
									endIcon={<ArrowDownward />}
									size={`large`}
									onClick={scrollDownSection}
								>
									Đọc bài viết
								</Button>
							</Box>
						</Box>
					</Container>
					<Box className={classes.featureOverlay} />
				</Box>
			</section>
			<Container maxWidth={`xl`} className={classes.containerBlog}>
				<Paper>
					<Container maxWidth={`lg`} style={{ minHeight: 400 }}>
						<Box py={4}>
							<div className="MuiGrid-root jss361  ">
								<h3 className="jss2584">
									The Castle Looks Different at Night...
								</h3>
								<p>
									This is the paragraph where you can write more details about
									your product. Keep you user engaged by providing meaningful
									information. Remember that by this time, the user is curious,
									otherwise he wouldn't scroll to get here. Add a button if you
									want the user to see more. We are here to make life better.
									<br />
									<br />
									And now I look and look around and there’s so many Kanyes I've
									been trying to figure out the bed design for the master
									bedroom at our Hidden Hills compound... and thank you for
									turning my personal jean jacket into a couture piece.
								</p>
								<blockquote className="jss2596 jss2598">
									<p className="jss2599 jss2586">
										“And thank you for turning my personal jean jacket into a
										couture piece.”
									</p>
									<small className="jss2600">Kanye West, Producer.</small>
								</blockquote>
							</div>
							<div className="MuiGrid-root jss361 ">
								<h3 className="jss2584">Rest of the Story:</h3>
								<p>
									We are here to make life better. And now I look and look
									around and there’s so many Kanyes I've been trying to figure
									out the bed design for the master bedroom at our Hidden Hills
									compound... and thank you for turning my personal jean jacket
									into a couture piece.
									<br />I speak yell scream directly at the old guard on behalf
									of the future. daytime All respect prayers and love to Phife’s
									family Thank you for so much inspiration.
								</p>
								<p>
									Thank you Anna for the invite thank you to the whole Vogue
									team And I love you like Kanye loves Kanye Pand Pand Panda
									I've been trying to figure out the bed design for the master
									bedroom at our Hidden Hills compound...The Pablo pop up was
									almost a pop up of influence. All respect prayers and love to
									Phife’s family Thank you for so much inspiration daytime I
									love this new Ferg album! The Life of Pablo is now available
									for purchase I have a dream. Thank you to everybody who made
									The Life of Pablo the number 1 album in the world! I'm so
									proud of the nr #1 song in the country. Panda! Good music
									2016!
								</p>
								<p>
									I love this new Ferg album! The Life of Pablo is now available
									for purchase I have a dream. Thank you to everybody who made
									The Life of Pablo the number 1 album in the world! I'm so
									proud of the nr #1 song in the country. Panda! Good music
									2016!
								</p>
							</div>
						</Box>
					</Container>
				</Paper>
			</Container>
		</>
	)
}
Post.getLayout = getLayout

export default Post
