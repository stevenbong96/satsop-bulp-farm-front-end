import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import PageSectionTextarea from '../components/PageSectionTextarea'
import AdminDashUpdateFields from '../components/AdminDashUpdateFields'
import AdminNav from '../components/AdminNav'

export default function HomeUpdate() {
    const [homeText, setHomeText] = useState({
        welcome: '',
        brief: '',
        aboutUsMain: '',
        aboutUsSub: '',
        salesInfo: ''
    })

    const { welcome, brief, aboutUsMain, aboutUsSub, salesInfo } = homeText

    // on load, get all text displayed on home page and set the state
    useEffect(() => {
        API.getHomePageText().then(res => {
            // filter through data for text we want displayed
            const acceptableTexts = ['welcome', 'brief', 'aboutUsMain', 'aboutUsSub', 'salesInfo']
            const textArr = res.data.filter(text => acceptableTexts.includes(text.title))
            // create object of texts to be displayed
            const textsObj = {}
            textArr.forEach(textObj => {
                textsObj[textObj.title] = {
                    text: textObj.text,
                    _id: textObj._id
                }
            })
            // set state to new array of texts
            setHomeText(textsObj)
        })
    }, [])

    // update state when user changes an input field
    const handleInputChange = event => {
        // grab name of property to change and value
        const { name, value } = event.target
        // update state with new value
        setHomeText({
            ...homeText,
            [name]: {
                ...homeText[name],
                text: value
            }
        })
    }

    // make request to save new text to db when user clicks save
    const handleSave = (event) => {
        const textNode = event.target.parentElement.parentElement.children[1].children[0]
        // grab id of text to change and its value
        const textId = textNode.getAttribute('data-textId')
        const text = textNode.value

        // make request to update text in db
        API.updateHomePageText(textId, { text: text })
    }

    return (
        <>
            <AdminNav />
            <AdminDashUpdateFields>
                <PageSectionTextarea id={welcome._id} text={welcome.text} name='welcome' heading="Welcome Text" handleInputChange={handleInputChange} handleSave={handleSave} />
                <PageSectionTextarea id={brief._id} text={brief.text} name='brief' heading="Brief Intro" handleInputChange={handleInputChange} handleSave={handleSave} />
                <PageSectionTextarea id={aboutUsMain._id} text={aboutUsMain.text} name='aboutUsMain' heading='About Us (Primary)' handleInputChange={handleInputChange} handleSave={handleSave} />
                <PageSectionTextarea id={aboutUsSub._id} text={aboutUsSub.text} name='aboutUsSub' heading="About Us (Secondary)" handleInputChange={handleInputChange} handleSave={handleSave} />
                <PageSectionTextarea id={salesInfo._id} text={salesInfo.text} name='salesInfo' heading="Sales Info" handleInputChange={handleInputChange} handleSave={handleSave} />
            </AdminDashUpdateFields>
        </>
    )
}
