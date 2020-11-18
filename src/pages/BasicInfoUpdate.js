import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import AdminHeader from '../components/AdminHeader'
import AdminNav from '../components/AdminNav'
import UpdateInput from '../components/UpdateInput'
import SaveBtn from '../components/SaveBtn'
import CancelBtn from '../components/CancelBtn'
import AdminDashUpdateFields from '../components/AdminDashUpdateFields'

export default function BasicInfo() {

    const [basicInfo, setBasicInfo] = useState({
        phone: '(360) 482-5566',
        email: 'info@satsopbulbfarm.com',
        address: '930 Monte Elma Rd',
        zipCode: '98541',
        city: 'Elma',
        state: 'WA',
        hours: {
            monday: '10AM - 5PM',
            tuesday: '10AM - 5PM',
            wednesday: '10AM - 5PM',
            thursday: '10AM - 5PM',
            friday: '10AM - 5PM',
            saturday: '10AM - 5PM',
            sunday: '10AM - 5PM'
        },
        facebook: 'https://www.facebook.com/Satsop-Bulb-Farm-287080364304/photos/?ref=page_internal'
    })

    // on load, make request to server for basic info
    useEffect(() => {
        API.getBasicInfo().then(function (res) {
            setBasicInfo(res)
        })
    })

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
        // API.updateBasicInfo(basicInfo)
    }

    // discard all changes made when user clicks cancel
    const handleCancel = () => {
        alert('cancelled')
        // API.getBasicInfo().then(function (res) {
        //     setBasicInfo(res)
        // })
    }

    return (
        <>
            <AdminNav />
            <AdminHeader />
            <AdminDashUpdateFields>
                <div>
                    <UpdateInput type='text' text={basicInfo.phone} label='Phone' name='phone' handleInputChange={handleInputChange} />
                    <UpdateInput type='email' text={basicInfo.email} label='Email' name='email' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.address} label='Address' name='address' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.city} label='City' name='city' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.state} label='State' name='state' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.zipCode} label='zipCode' name='zipCode' handleInputChange={handleInputChange} />
                    <h2>Business Hours</h2>
                    <UpdateInput type='text' text={basicInfo.hours.monday} label='Monday' name='monday' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.hours.tuesday} label='Tuesday' name='tuesday' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.hours.wednesday} label='Wednesday' name='wednesday' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.hours.thursday} label='Thursday' name='thursday' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.hours.friday} label='Friday' name='friday' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.hours.saturday} label='Saturday' name='saturday' handleInputChange={handleInputChange} />
                    <UpdateInput type='text' text={basicInfo.hours.sunday} label='Sunday' name='sunday' handleInputChange={handleInputChange} />

                    <UpdateInput type='text' text={basicInfo.facebook} label='Facebook' name='facebook' handleInputChange={handleInputChange} />

                    <div className="field is-grouped">
                        <SaveBtn handleSave={handleSave} />
                        <CancelBtn handleCancel={handleCancel} />
                    </div>

                </div>

            </AdminDashUpdateFields>
        </>
    )
}
