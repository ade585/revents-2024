import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { signOut } from "../../../features/auth/authSlice";
import { Dropdown, DropdownItem, DropdownMenu, Menu, Image } from "semantic-ui-react";



export default function SignedInMenu() {
    const {currentUser} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function handleSignOut() {
        dispatch(signOut());
        navigate('/');
    }

    return (
        <Menu.Item position='right'>
            <Image avatar spaced='right' src='./user.png' />
            <Dropdown pointing='top left' text={currentUser?.email} >
                <DropdownMenu>
                    <DropdownItem as={Link} to="/CreateEvent" text="Create event" icon='plus' />
                    <DropdownItem text="My profile" icon='user' />
                    <DropdownItem text="Sign out" icon='power' onClick={handleSignOut} />
                </DropdownMenu>
            </Dropdown>
        </Menu.Item>
    )
}