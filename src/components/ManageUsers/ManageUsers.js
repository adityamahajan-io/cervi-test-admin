import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { fetchAllData } from '../../store/appData';
import {HealthAndSafetyOutlined, HealingOutlined, SpaSharp} from '@mui/icons-material';

import './ManageUsers.css'

export default function ManageUsers() {

    const dispatch = useDispatch()
    const history = useHistory()

    const accessToken = useSelector(state=>state.auth.accessToken)
    const doctors = useSelector(state=>state.appData.doctors)

    useEffect(()=>{
        if(doctors.length === 0){
            dispatch(fetchAllData(accessToken))
        }
    },[])

    return (
        <div className="appContentWrapper">
            <div className="pageTitle">
                Manage Users
            </div>
            <div className="manageUsersContainer">
                <Grid container spacing={2} className="centerDiv">
                    <Grid item xs={12} sm={4}>
                        <NavLink to={{pathname: '/manageUsers/list', manage: 'doctors'}} exact>
                        <div className="manageUsersButtonDiv">
                            <div className="manageUsersButtonText">
                                <div>Doctors</div>
                                <HealthAndSafetyOutlined className="manageUsersButtonIcon"/>
                            </div>
                           
                        </div>
                        </NavLink>
                    </Grid> 

                    <Grid item xs={12} sm={4}>
                        <NavLink to={{pathname: '/manageUsers/list', manage: 'patients'}} exact>
                        <div className="manageUsersButtonDiv">
                            <div className="manageUsersButtonText">
                                <div>Patients</div>
                                <HealingOutlined className="manageUsersButtonIcon"/>
                            </div>
                           
                        </div>
                        </NavLink>
                    </Grid> 

                    <Grid item xs={12} sm={4}>
                        {/* <NavLink to={{pathname: '/manageUsers/list', manage: 'healthCare'}} exact> */}
                        <div className="manageUsersButtonDiv">
                            <div className="manageUsersButtonText">
                                <div>HealthCare</div>
                                <SpaSharp className="manageUsersButtonIcon"/>
                            </div>
                           
                        </div>
                        {/* </NavLink> */}
                    </Grid> 
                    

                    
               </Grid>
            </div>

        </div>
    )
}
