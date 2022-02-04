import { AppsOutlined, FileCopyOutlined, FindReplace, PersonOutline } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';

const PBottomNav = props => {
    

    const {pathname} = useLocation()

    return (
        <div className='bottom-nav'>
            <NavLink to={'/pHome'} className="bn-tab" activeClassName="linkActive" >
                <AppsOutlined className="bottomNavIcon"/>
                <span className="bottomTabText">
                    Home
                </span>
            </NavLink>

            <NavLink to={'/pTest'} className="bn-tab" isActive={()=>['/pUploadSteps', '/pTest'].includes(pathname)}  activeClassName="linkActive">
                <FindReplace className="bottomNavIcon"/>
                <span className="bottomTabText">
                   Test 
                </span>
            </NavLink>

            <NavLink to={'/pReports'} className="bn-tab" activeClassName="linkActive">
                <FileCopyOutlined className="bottomNavIcon"/>
                <span className="bottomTabText">
                  Report  
                </span>
            </NavLink>

            <NavLink to={'/pProfile'} className="bn-tab" activeClassName="linkActive">
                <PersonOutline className="bottomNavIcon"/>
                <span className="bottomTabText">
                   Profile 
                </span>
            </NavLink>
        </div>
    )
}

export default PBottomNav