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
    <div>
        <NavLink
            to={to}
        >
            {children}
            {label}
        </NavLink>
    </div>
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
            <nav className="flex space-x-6 nav-menu">

                {
                    !isAuthed ? (
                        <>
                            <NavItem to="/dagen" label="Dagen" />
                        </>
                    ) : (
                        <>
                            <button onClick={handleLogout} className="nav-btn">
                                <IoExitOutline size={40}
                                    />
                            </button>
                            <NavItem to="/dagen" >
                                <div className={`${pathname === "/dagen" ? "nav-btn-act" : "nav-btn"}`} >
                                    <IoCalendarOutline size={40} />
                                </div>
                            </NavItem>
                            <NavItem to="/leden">
                                <img alt="leden logo"
                                    style={{width: 40}}
                                    src={pathname === "/leden" ? path2 : path}
                                    onMouseOver={e => (e.currentTarget.src = path2)}
                                    onMouseOut={e => (e.currentTarget.src = pathname === "/leden" ? path2 : path)} />
                            </NavItem></>
                    )
                }
            </nav>
        </>
    );
}
