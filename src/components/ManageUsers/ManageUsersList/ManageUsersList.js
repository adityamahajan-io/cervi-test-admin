import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {Table} from 'react-bootstrap'
import {fetchAllData} from '../../../store/appData'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { disableUserPath } from '../../../constants';




export default function ManageUsersList(props) {

    const history = useHistory()
    const dispatch = useDispatch()
    const accessToken = useSelector(state=>state.auth.accessToken)
    const data = useSelector(state=>state.appData[props.location.manage])

    console.log(data)

    
    const disableUser = (id) => {
      console.log(id)
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + accessToken);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "id": id
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(disableUserPath, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          dispatch(fetchAllData(accessToken))
        })
        .catch(error => console.log('error', error));
    }

    const rows = []
    if(props.location.manage === undefined){
        history.push('/manageUsers')
    } else {
      data.forEach((user, index)=>{
        if(user.disabled === false){
        if(user.isVerified === false){
          return
        }
        const row = (
        <tr>
          <td>{index+1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phoneNumber}</td>
          <td className='disableUser' onClick={()=>{disableUser(user.user_id)}}>
            <CancelOutlinedIcon/>
            <span>Disable</span>
          </td>
        </tr> 
      )
      rows.push(row)
      }
        return(rows)
      })
    }


    return (
        <div className='appContentWrapper'>
            Manage {props.location.manage}
            <div style={{padding: "10px 10px"}}>
                <Table  bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows}
                  </tbody>
                </Table>
            </div>
        </div>
    )
}

