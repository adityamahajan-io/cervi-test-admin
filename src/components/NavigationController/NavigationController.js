import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Switch, useLocation } from 'react-router-dom'
import {Route } from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'
import UnprotectedOnlyRoute from './UnprotectedOnlyRoute'
import SideBar from '../SideBar/SideBar'
import BottomNav from '../BottomNav/BottomNav'
import AppBar from '../AppBar/AppBar'

import Login from '../Login/Login'
import Home from '../Home/Home'
import PendingRequests from '../PendingRequests/PendingRequests'
import ManageUsers from '../ManageUsers/ManageUsers'
import ManageUsersList from '../ManageUsers/ManageUsersList/ManageUsersList'
import PageNotFound404 from '../PageNotFound404'

export default function NavigationController() {

    const isAuth = useSelector(state=>state.auth.isLoggedIn)
    const userType = useSelector(state=>state.auth.userType)

    const {pathname} = useLocation()

    const [header, setHeader] = useState('')

    useEffect(()=>{
        //console.log(pathname)
        if(['/pHome', '/dHome'].includes(pathname)){
            setHeader("> Home")
        }
        else if(['/pTest', '/pUploadSteps', '/dTest', '/dUploadSteps'].includes(pathname)){
            setHeader("> Perform Test")
        }
        else{
            setHeader("")
        }
    },[pathname])

    return (
        <div>
            {isAuth ? (
                <div>
                    <SideBar/>
                    <AppBar pageHeader={header}/>
                    <BottomNav/>
                </div>
            ): null}
            
            <Switch>
                <UnprotectedOnlyRoute path="/login" exact component={Login}/>
                <ProtectedRoute path="/" exact component={Home}/>
                <ProtectedRoute path="/pendingRequests" exact component={PendingRequests}/>
                <ProtectedRoute path="/manageUsers" exact component={ManageUsers}/>
                <ProtectedRoute path="/manageUsers/list" exact component={ManageUsersList}/>
                <Route path='*' exact={true} component={PageNotFound404} />
            </Switch>
        </div>
    )
}
