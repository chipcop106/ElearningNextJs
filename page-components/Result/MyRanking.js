import React from 'react'
import {
	Assignment,
	Filter1Rounded,
	Filter2Rounded,
	Filter3Rounded,
	LocalLibrary,
	Stars,
	SupervisedUserCircle,
} from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { randomId } from '~/utils'
import { AvatarGenerator } from 'random-avatar-generator'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '~/config'
const randomAvatar = () => new AvatarGenerator().generateRandomAvatar()

const rankPeople = [
	{
		id: randomId(),
		name: 'Trương Văn Lam',
		rank: 1,
		score: 3122,
		avatar: randomAvatar(),
	},
	{
		id: randomId(),
		name: 'Phạm Hồng Ánh',
		rank: 2,
		score: 2876,
		avatar: randomAvatar(),
	},
	{
		id: randomId(),
		name: 'Nguyễn Vũ Cảnh',
		rank: 3,
		score: 2765,
		avatar: randomAvatar(),
	},
	{
		id: randomId(),
		name: 'Nguyễn Thanh Tuyền',
		rank: 4,
		score: 2544,
		avatar: randomAvatar(),
	},
	{
		id: randomId(),
		name: 'Trần Đức Trung',
		rank: 5,
		score: 2321,
		avatar: randomAvatar(),
	},
	// {
	// 	id: randomId(),
	// 	name: 'Phạm Hồng Phước',
	// 	rank: 6,
	// 	score: 2214,
	// 	avatar: randomAvatar(),
	// },
	// {
	// 	id: randomId(),
	// 	name: 'Lương Minh Tùng',
	// 	rank: 7,
	// 	score: 2019,
	// 	avatar: randomAvatar(),
	// },
	// {
	// 	id: randomId(),
	// 	name: 'Trương Hồng Minh',
	// 	rank: 8,
	// 	score: 1988,
	// 	avatar: randomAvatar(),
	// },
	// {
	// 	id: randomId(),
	// 	name: 'Phạm Minh Đăng',
	// 	rank: 9,
	// 	score: 1765,
	// 	avatar: randomAvatar(),
	// },
	// {
	// 	id: randomId(),
	// 	name: 'Vũ Phong Loan',
	// 	rank: 10,
	// 	score: 1522,
	// 	avatar: randomAvatar(),
	// },
]

const useStyles = makeStyles((theme) => ({
	rankIcon: {
		fontSize: '2rem',
	},
	one: {
		color: theme.palette.error.main,
	},
	two: {
		color: theme.palette.info.main,
	},
	three: {
		color: theme.palette.success.main,
	},
}))

const RankPeople = ({ rank, name, score, avatar }) => {
	const classes = useStyles()
	return (
		<Box
			className={`people__wrap`}
			display={`flex`}
			justifyContent={`space-between`}
			alignItems={`center`}
			mb={2}
		>
			<Box display={`flex`} alignItems={`center`}>
				<Box
					mr={2}
					width={40}
					display={`flex`}
					alignItems={`center`}
					justifyContent={`center`}
					className={
						rank === 1
							? 'one'
							: rank === 2
							? 'two'
							: rank === 3
							? 'three'
							: '' + ' rank__number'
					}
				>
					{rank === 1 && (
						<Filter1Rounded className={`${classes.rankIcon} ${classes.one}`} />
					)}
					{rank === 2 && (
						<Filter2Rounded className={`${classes.rankIcon} ${classes.two}`} />
					)}
					{rank === 3 && (
						<Filter3Rounded
							className={`${classes.rankIcon} ${classes.three}`}
						/>
					)}
					{rank > 3 && (
						<Typography variant={`h5`} style={{ color: '#ccc' }}>
							{rank}
						</Typography>
					)}
				</Box>

				<Avatar src={avatar ? avatar : null} />
				<Box ml={2}>
					<Typography variant={`body`}>{name}</Typography>
				</Box>
			</Box>
			<Box>
				<Typography variant={`h6`} color={`primary`}>
					{score}
				</Typography>
			</Box>
		</Box>
	)
}

const MyRanking = () => {
	return (
		<div className={`rankink_profile`}>
			<div className="profile">
				<div className="profile__group">
					<div className="profile__picture">
						<img src="/static/img/avatar.jpg" alt="Huỳnh Thị Phương Anh" />
					</div>
					<div className="profile__header">
						<div className="profile__account">
							<h4 className="profile__username">Huỳnh Thị Phương Anh</h4>
							<p className="profile__userrole">Nhân viên kinh doanh</p>
						</div>
					</div>
					<div className="profile__stats">
						<div className="profile__stat">
							<div className="profile__icon profile__icon--gold">
								<SupervisedUserCircle style={{ fontSize: '2rem' }} />
							</div>
							<div className="profile__value">
								47
								<div className="profile__key">Xếp hạng</div>
							</div>
						</div>
						<div className="profile__stat">
							<div className="profile__icon profile__icon--blue">
								<Stars style={{ fontSize: '2rem' }} />
							</div>
							<div className="profile__value">
								1245
								<div className="profile__key">Tổng điểm</div>
							</div>
						</div>
					</div>
				</div>
				<Box className="ranking__wrap" mt={2}>
					<Typography variant={`paragraph`} style={{ color: '#b4b4b4' }}>
						Bảng xếp hạng điểm
					</Typography>
					<Box mt={2}>
						{rankPeople.map((people) => (
							<RankPeople
								key={people.id}
								avatar={people.avatar}
								rank={people.rank}
								name={people.name}
								score={people.score}
							/>
						))}
					</Box>
				</Box>
			</div>
		</div>
	)
}

export default MyRanking
