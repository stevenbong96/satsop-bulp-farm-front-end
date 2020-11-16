import React, {useState} from 'react'

export default function NewQuestionModal(props) {

    const [newQuestion, setNewQuestion] = useState({
        question: '',
        answer: ''
    })

    const handleModalClose = event => {
        document.querySelector('.modal').className='modal'
    }

    const handleInputChange = event => {
        // grab name of property to be changed and new value
        const { name, value } = event.target

        // update state with new values
        setNewQuestion({ ...newQuestion, [name]: value })
    }

    return (
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Create a new FAQ</p>
                    <button class="delete" aria-label="close" onClick={handleModalClose} ></button>
                </header>
                <section class="modal-card-body">
                    <div className='field'>
                        <div className='control'>
                            <input className='input' type='text' value={newQuestion.question} name='question' onChange={handleInputChange} placeholder='Question' />
                            <textarea class="textarea" placeholder="Answer" name='answer' onChange={handleInputChange} value={newQuestion.answer} ></textarea>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success" onClick={() => props.handleNewQuestionSubmit(newQuestion)}>Save changes</button>
                    <button class="button" onClick={handleModalClose}>Cancel</button>
                </footer>
            </div>
        </div>
    )
}
