import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchAllData } from '../../store/appData';
import {Table} from 'react-bootstrap'
import { verifyDoctorPath } from '../../constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function PendingRequests() {

    const dispatch = useDispatch()
    const history = useHistory()

    const accessToken = useSelector(state=>state.auth.accessToken)
    const doctors = useSelector(state=>state.appData.doctors)
    console.log(doctors)

    useEffect(()=>{
        if(doctors.length === 0){
            dispatch(fetchAllData(accessToken))
        }
    },[])

    const verifyUser = (id) => {
        console.log("Verify", id)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+accessToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "id": id
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        };

        fetch(verifyDoctorPath, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            dispatch(fetchAllData(accessToken))
        })
        .catch(error => console.log('error', error));
    }

    const data = []
    doctors.forEach((user)=>{
        if(user.isVerified === false){
            data.push(user)
        }
    })

    
    
    const rows = []
    data.forEach((user, index)=>{
        let row = (
                <tr>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td className='verifyCell' onClick={()=>{verifyUser(user.user_id)}}>
                        <CheckCircleIcon className='verifyIcon'/>
                         <span>Verify</span>
                    </td>
                </tr>
        )
        rows.push(row)
    })

    return (
        <div className="appContentWrapper">
            <div className="pageTitle">
                Pending Requests
            </div>
            {rows.length === 0 ? (
                <span>
                    No pending verification requests!
                </span>
            ): (
               <Table striped bordered hover>
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
            )}
        </div>
    )
}
