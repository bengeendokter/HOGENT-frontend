import {NavLink} from "react-router-dom";
import {useCallback} from "react";
import {useLogout, useSession} from "../contexts/AuthProvider";
import {IoCalendarOutline, IoExitOutline} from "react-icons/io5";
import {useLocation} from 'react-router-dom';

const NavItem = ({
    to,
    label = "",
    children
}) => (
    <NavLink
        to={to}
        className="nav-btn"
    >
        {children}
        {label}
    </NavLink>
);

export default function NavMenu()
{
    const {isAuthed} = useSession();
    const logout = useLogout();

    const path = process.env.PUBLIC_URL + '/logo outline white dik.svg';
    const path2 = process.env.PUBLIC_URL + '/logo outline yellow dik.svg';

    const {pathname} = useLocation();

    const handleLogout = useCallback(() =>
    {
        logout();
    }, [logout]);

    return (
        <>
{ isAuthed && <nav className="flex space-x-6 nav-menu">
                <button onClick={handleLogout} className="nav-btn">
                    <IoExitOutline size={40}
                    />
                </button>
                <NavItem to="/dagen#" >
                    <IoCalendarOutline size={40} />
                </NavItem>
                <NavItem to="/leden#">
                    <img alt="leden logo"
                        style={{width: 40}}
                        src={pathname === "/leden" ? path2 : path} />
                </NavItem>
            </nav>}
        </>
    );
}
