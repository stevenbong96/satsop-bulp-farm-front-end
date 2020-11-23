import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import InstructionsInput from '../../components/InstructionsInput'
import MoreInfoInput from '../../components/MoreInfoInput'
import SaveBtn from '../../components/SaveBtn'
import AdminDashUpdateFields from '../../components/AdminDashUpdateFields'
import AdminNav from '../../components/AdminNav'
import AdminHeader from '../../components/AdminHeader'
import './index.css'
import { useHistory } from 'react-router-dom'

export default function PlantingInstructionsAdmin() {

    const [instructions, setInstructions] = useState({})

    const [moreInfo, setMoreInfo] = useState({})

    let history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        // console.log(token);
        if(!token){
            history.push("/login")
        }
        API.getInstructions().then(({ data }) => {
            // create object of instructions by their order
            const instructionsObj = {}
            const moreInfoObj = {}
            data.forEach(step => {
                // the object contains intstructions if it has an order prop >= 0
                if (step.order >= 0) {
                    instructionsObj[step.order] = {
                        id: step._id,
                        title: step.title,
                        text: step.text
                    }
                } else if (step.order != -500) {
                    moreInfoObj[step.order] = {
                        id: step._id,
                        title: step.title,
                        text: step.text
                    }
                }
            })
            // set state to new objects
            setInstructions(instructionsObj)
            setMoreInfo(moreInfoObj)
        }).catch(err => {
            console.log(err);
            history.push("/login")
        })
    }, [])

    const handleInputChange = event => {
        // grab name of property to change and it's value
        const name = event.target.name
        const value = event.target.value
        const place = event.target.getAttribute('data-place')
        // set state to new value
        setInstructions({
            ...instructions,
            [place]: {
                ...instructions[place],
                [name]: value
            }
        })
    }

    const handleMoreInfoInputChange = event => {
        // grab name of property to change and it's value
        const { name, value } = event.target
        const place = event.target.getAttribute('data-place')

        // update state with new text
        setMoreInfo({
            ...moreInfo,
            [place]: {
                ...moreInfo[place],
                [name]: value
            }
        })
    }

    const handleSave = event => {
        // reference to input fields containing text to be updated
        const headingNode = event.target.parentElement.parentElement.children[0].children[0].children[0]
        const textNode = event.target.parentElement.parentElement.children[0].children[1].children[0]
        // grab id of text being saved
        const place = textNode.getAttribute('data-place')
        var id;
        if (place >= 0) {
            id = instructions[place].id
        } else {
            id = moreInfo[place].id
        }

        // grab values to be changed and make request to update in db
        const newTextObj = {
            title: headingNode.value,
            text: textNode.value
        }
        console.log(id)
        console.log(newTextObj)
        API.updateInstructions(id, newTextObj)
    }

    return (
        <>
            <AdminHeader />
            <AdminNav />
            <AdminDashUpdateFields>
                <h1 className='section-heading'>Planting Instructions</h1>
                <hr />
                {Object.keys(instructions).map((place) => {
                    const instruction = instructions[place]
                    return (
                        <div className='plantingText'>
                            <InstructionsInput
                                place={place}
                                heading={instruction.title}
                                text={instruction.text}
                                handleInputChange={handleInputChange}
                            />
                            <SaveBtn handleSave={handleSave} />
                        </div>
                    )
                })}
                <h2 className='extra-heading'>More Info</h2>
                {Object.keys(moreInfo).map(place => {
                    const infoSection = moreInfo[place]
                    return (
                        <div className='plantingText'>
                            <MoreInfoInput
                                place={place}
                                heading={infoSection.title}
                                text={infoSection.text}
                                handleInputChange={handleMoreInfoInputChange}
                            />
                            <SaveBtn handleSave={handleSave} />
                        </div>
                    )
                })}
            </AdminDashUpdateFields>
        </>
    )
}
