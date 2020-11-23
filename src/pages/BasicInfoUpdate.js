import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import AdminHeader from '../components/AdminHeader'
import AdminNav from '../components/AdminNav'
import UpdateInput from '../components/UpdateInput'
import SaveBtn from '../components/SaveBtn'
import CancelBtn from '../components/CancelBtn'
import AdminDashUpdateFields from '../components/AdminDashUpdateFields'
import { useHistory } from 'react-router-dom'

export default function BasicInfo() {

    const [basicInfo, setBasicInfo] = useState({})
    
    let history = useHistory();

    // on load, make request to server for basic info
    useEffect(() => {
        const token = localStorage.getItem("token");
        // console.log(token);
        if(!token){
            history.push("/login")
        }
        API.getBasicInfo(token).then(function (res) {    
            // console.log(res);
            setBasicInfo({
                phone: res.data[0].phoneNumber,
                email: res.data[0].companyEmail,
                address: res.data[0].address,
                zipCode: res.data[0].zipCode,
                city: res.data[0].city,
                state: res.data[0].state,
                facebook: res.data[0].facebook,
                instagram: res.data[0].instagram,
                twitter: res.data[0].twitter,
                hours: res.data[0].hours
            })
        }).catch(err => {
            console.log(err);
            history.push("/login")
        })
    },[])

    // update state when user changes an input field
    const handleInputChange = (event) => {
        console.log('change')
        // grab name and value of property to change
        const name = event.target.name
        const value = event.target.value

        // check if property to update is in business hours object in state
        if (name.slice(name.length - 3, name.length) === 'day') {
            // update property in business hours obj in state
            setBasicInfo({
                ...basicInfo,
                hours: {
                    ...basicInfo.hours,
                    [name]: value
                }
            })
        } else {
            // update the property in the state with the same name
            setBasicInfo({ ...basicInfo, [name]: value })
        }

    }

    // send new data to server to store in db when user clicks save
    const handleSave = () => {
        console.log(basicInfo)
        API.updateBasicInfo(basicInfo)
    }

    // discard all changes made when user clicks cancel
    const handleCancel = () => {
        alert('cancelled')
        API.getBasicInfo().then(function (res) {    
            setBasicInfo({
                phone: res.data[0].phoneNumber,
                email: res.data[0].companyEmail,
                address: res.data[0].address,
                zipCode: res.data[0].zipCode,
                city: res.data[0].city,
                state: res.data[0].state,
                facebook: res.data[0].facebook,
                instagram: res.data[0].instagram,
                twitter: res.data[0].twitter,
                hours: res.data[0].hours
            })
            
        })
    }

    return (
        <>
            <AdminNav />
            <AdminHeader />
            <AdminDashUpdateFields>
            <h1 className='page-heading'>Basic Information</h1>
            <hr />
                <div>
                    <UpdateInput type='text' text={basicInfo.phone} label='Phone' name='phone' handleInputChange={handleInputChange} />
                    <UpdateInput type='email' text={basicInfo.email} label='Email' name='email' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.address} label='Address' name='address' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.city} label='City' name='city' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.state} label='State' name='state' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.zipCode} label='Zip Code' name='zipCode' handleInputChange={handleInputChange} />
                    <h2 className='page-heading' >Business Hours</h2>
                    <hr />
                   { basicInfo.hours != undefined ?
                   basicInfo.hours.map(hour =>
                   <div className='columns'>
                        <div className='column'>
                            <UpdateInput type='text' text={hour.startTime} label={hour.day + ' ' + 'Start Time'} name={hour.day} handleInputChange={handleInputChange} />
                        </div>
                        <div className='column'>
                            <UpdateInput type='text' text={hour.endTime} label='End Time' name={hour.day} handleInputChange={handleInputChange} />
                        </div> 
                    </div>) : null}
                    <h2 className='page-heading' >Social Media</h2>
                    <hr />
                    <UpdateInput type='text' text={basicInfo.facebook} label='Facebook' name='facebook' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.instagram} label='Instagram' name='instagram' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.twitter} label='Twitter' name='twitter' handleInputChange={handleInputChange} />

                </div>

                    <div className="field is-grouped">
                        <SaveBtn className='basicButton' handleSave={handleSave} />
                        <CancelBtn className='basicButton' handleCancel={handleCancel} />
                    </div>
            </AdminDashUpdateFields>
        </>
    )
}
