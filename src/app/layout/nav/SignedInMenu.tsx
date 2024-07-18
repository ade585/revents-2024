import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import { Dropdown, DropdownItem, DropdownMenu, Menu, Image } from "semantic-ui-react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";



export default function SignedInMenu() {
    const {currentUser} = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    async function handleSignOut() {
        await signOut(auth);
        navigate('/');
    }

    return (
        <Menu.Item position='right'>
            <Image avatar spaced='right' src={currentUser?.photoURL || './user.png'} />
            <Dropdown pointing='top left' text={currentUser?.displayName as string} >
                <DropdownMenu>
                    <DropdownItem as={Link} to="/CreateEvent" text="Create event" icon='plus' />
                    <DropdownItem as={Link} to={`/profiles/${currentUser?.uid}`} text="My profile" icon='user' />
                    <DropdownItem as={Link} to="/Account" text="My account" icon='setting' />
                    <DropdownItem text="Sign out" icon='power' onClick={handleSignOut} />
                </DropdownMenu>
            </Dropdown>
        </Menu.Item>
    )
}