import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import RoutingPath from '../../../package/src/routes/RoutingPath'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }): JSX.Element => {
	const navigate = useNavigate()

	const handleNavigation = (URL: string) => {
		props.drawerHandler(false)
		navigate(URL)
	}

	return (
		<Drawer isOpen={props.drawerIsOpen}>
			<Title onClick={() => handleNavigation(RoutingPath.home)}>{'React-Web3-Hooks'}</Title>
			<Link onClick={() => handleNavigation(RoutingPath.verifyWalletExtension)}>{'verifyWalletExtension()'}</Link>
			<Link onClick={() => handleNavigation(RoutingPath.verifyWalletExtension)}>{'connectToWallet()'}</Link>
			<Link onClick={() => handleNavigation(RoutingPath.verifyWalletExtension)}>{'getWalletBalance()'}</Link>
			<Link onClick={() => handleNavigation(RoutingPath.verifyWalletExtension)}>{'createPayment()'}</Link>
		</Drawer>
	)
}

interface values {
	isOpen: boolean;
}

const Drawer = styled.nav<values>`
	height: 100%;
	background: white;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 70%;
	max-width: 270px;
	z-index: 200;
	transform: translateX(-100%);
	transition: transform 0.3s ease-in-out;
	transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100)'}
`

const Title = styled.p`
	text-align: center;
	cursor: pointer;
	font-size: 1.7rem;
	border-bottom: 1px solid black;
`

const Link = styled.p`
	padding: 1%;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		color: blue;
		background-color: orange;
		transision: 0.3s;
		text-align: center;
	}
`