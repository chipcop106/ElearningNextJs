import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import App from 'next/app'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from 'next/router'
import '~/styles/styles.scss'
import '~/styles/responsive.scss'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css'

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				// Call page-level getInitialProps
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {}),
			},
		}
	}

	componentDidMount() {
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('react-axe')
			axe(React, ReactDOM, 1000)
		}
	}

	render() {
		const { Component, pageProps } = this.props
		const getLayout = Component.getLayout || ((page) => page)
		const theme = createMuiTheme({
			palette: {
				background: {
					default: '#eeeeee',
				},
				primary: {
					light: '#4b6687',
					main: '#1F4069',
					dark: '#152c49',
					contrastText: '#fff',
				},
				secondary: {
					light: '#ffe67d',
					main: '#FFE05D',
					dark: '#b29c41',
					contrastText: '#000',
				},
			},
		})

		return (
			<>
				<Head>
					<title>Mona Elearning</title>
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline>{getLayout(<Component {...pageProps} />)}</CssBaseline>
				</ThemeProvider>
			</>
		)
	}
}
