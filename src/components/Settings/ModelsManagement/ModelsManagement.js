import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, uploadBytes } from "firebase/storage";
import {Table} from 'react-bootstrap'


export default function ModelsManagement() {

    return (
        <div className='appContentWrapper'>
            Models Manangement
            <Table bordered hover>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </div>
    );
}
