import React, { useEffect, useState } from 'react'
import Map from './Map'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {

    const [fullNameVal, setFullNameVal] = useState('')


    const handleInputChange = (e) => {
      setFullNameVal(e.target.value)
    }
  
  function Form() {
    return(
    <form>
      <label htmlFor="fullName">Full name</label>
      <input onChange={handleInputChange} value={fullNameVal} type="text" id="fullName" />
      <label htmlFor="eMail">E-Mail</label>
      <input type="email" id="eMail"></input>
      <label htmlFor="yourMessage">Your message</label>
      <textarea className='text-area' id="yourMessage"></textarea>
      <button type="submit" onClick={handleSubmit}>SEND</button>
    </form>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      toast.success('Message sent!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }, 1000)
  }

  return (
  <section id="Contact" className='contact'>
    <h2 className='title'>Contact</h2>
    <div className='contact-content'>
        <Form />
        <Map />
    </div>
    <ToastContainer />

  </section>  
  
)
}

export default Contact
