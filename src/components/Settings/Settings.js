import React from 'react';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { fetchAllData } from '../../store/appData';
import PsychologyIcon from '@mui/icons-material/Psychology';

export default function Settings() {
  return (
      <div className='appContentWrapper'>
            <div className="pageTitle">
                Settings
            </div>
            <div className="manageUsersContainer">
                <Grid container spacing={2} style={{display: 'flex', alignItems: "center"}}>
                    <Grid item xs={12} sm={4}>
                        <NavLink to={{pathname: '/settings/models', manage: 'doctors'}} exact>
                            <div className="manageUsersButtonDiv">
                                <div className="manageUsersButtonText">
                                    <div>Manage AI Models</div>
                                    <PsychologyIcon className="manageUsersButtonIcon"/>
                                </div>
                            </div>
                        </NavLink>
                    </Grid>
                </Grid>
            </div>
      </div>
  );
}
