import React, { useEffect, useState } from 'react'
import Map from './Map'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {


  
  function Form() {
    const [inputVal, setInputVal] = useState({
      fullName: "",
      eMail: "",
      message: "",
    })

    const handleChange = (e) => {
      const {name, value} = e.target
      setInputVal(prevState => ({
        ...prevState,
        [name]: value,
      }))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (inputVal.fullName != "" && inputVal.eMail != "" && inputVal.message != ""){
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
    }else {
      toast.error("None of the fields shouldn't be empty",
      {
        position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      })
    }
  }
  

    return(
    <form>
      <label htmlFor="fullName">Full name</label>
      <input onChange={handleChange} value={inputVal.fullName} type="text" name="fullName" id="fullName" />
      <label htmlFor="eMail">E-Mail</label>
      <input onChange={handleChange} value={inputVal.eMail} name="eMail" type="email" id="eMail"></input>
      <label htmlFor="yourMessage">Your message</label>
      <textarea onChange={handleChange} value={inputVal.message} name="message" className='text-area' id="yourMessage"></textarea>
      <button type="submit" onClick={handleSubmit}>SEND</button>
    </form>
    )
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
