import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { Facebook, Instagram, YouTube } from '@material-ui/icons';
const year = new Date().getFullYear();

const Footer = () => {
	return (
		<>
			<Box
				px={2}
				py={1.5}
				borderTop={1}
				borderColor={`grey.300`}
				style={{ backgroundColor: '#fff' }}
				height={44}
			>
				<Box
					display="flex"
					alignItems="center"
					justifyContent={{ xs: 'center', md: 'space-between' }}
				>
					<Box
						display={{ xs: 'none', sm: 'none', md: 'flex' }}
						alignItems="center"
					>
						<Typography variant={`caption`} style={{ color: '#b4b4b4' }}>
							Nhân sự: Hr.han@dolphinseaair.com
						</Typography>
						<Divider
							flexItem
							orientation="vertical"
							style={{ margin: '0 1rem' }}
						/>

						<Typography variant={`caption`} style={{ color: '#b4b4b4' }}>
							IT support: It@dolphinseaair.com
						</Typography>
					</Box>

					<Box display="flex" alignItems="center">
						<Typography
							component="div"
							variant={`caption`}
							style={{ color: '#b4b4b4' }}
						>
							<Box display="flex" alignItems="center">
								<a href={true} className={`ft-icon`}>
									<Facebook fontSize="small" />
								</a>
								<a href={true} className={`ft-icon`}>
									<Instagram fontSize="small" />
								</a>
								<a
									href={true}
									className={`ft-icon`}
									style={{ paddingRight: 0 }}
								>
									<YouTube fontSize="small" />
								</a>
							</Box>
						</Typography>
						<Divider
							flexItem
							orientation="vertical"
							style={{ margin: '0 1rem' }}
						/>
						<Typography variant={`caption`} style={{ color: '#b4b4b4' }}>
							Website: dolphin.com
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Footer;
