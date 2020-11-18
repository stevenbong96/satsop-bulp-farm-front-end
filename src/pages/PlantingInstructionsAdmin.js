import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import InstructionsInput from '../components/InstructionsInput'
import MoreInfoInput from '../components/MoreInfoInput'

export default function PlantingInstructionsAdmin() {

    const [instructions, setInstructions] = useState({})

    const [moreInfo, setMoreInfo] = useState({})

    useEffect(() => {
        API.getInstructions().then(({ data }) => {
            // create object of instructions by their order
            const instructionsObj = {}
            const moreInfoObj = {}
            data.forEach(step => {
                // the object contains intstructions if it has an order prop >= 0
                if (step.order >= 0) {
                    instructionsObj[step.order] = {
                        title: step.title,
                        text: step.text
                    }
                } else if (step.order != -500) {
                    moreInfoObj[step.order] = {
                        title: step.title,
                        text: step.text
                    }
                }
            })
            // set state to new objects
            setInstructions(instructionsObj)
            setMoreInfo(moreInfoObj)
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

    return (
        <div>
            <h1>Planting Instructions</h1>
            {Object.keys(instructions).map((place) => {
                const instruction = instructions[place]
                return (
                    <InstructionsInput
                        place={place}
                        heading={instruction.title}
                        text={instruction.text}
                        handleInputChange={handleInputChange}
                    />
                )
            })}
            <h2>More Info</h2>
            {Object.keys(moreInfo).map(place => {
                const infoSection = moreInfo[place]
                return (
                    <MoreInfoInput 
                        place={place}
                        heading={infoSection.title}
                        text={infoSection.text}
                        handleInputChange={handleMoreInfoInputChange}
                    />
                )
            })}
        </div>
    )
}
