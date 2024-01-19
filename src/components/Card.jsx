import React, { useState } from 'react'
import Modal from './Modal'
import { BsBoxArrowUpRight } from "react-icons/bs";

const Card = (props) => {

  const [openModal, setModalOpen] = useState(false)

  const handleClickCard = (e) => {
    e.preventDefault()
    setModalOpen(true)
  }

  return (
    <>
    <div className={`card ${props.dark && "dark"} `}>
      <div className={`card-left ${props.dark && "dark"} `}>
        <h2>{props.title}</h2>
        <a className="learnmore" href="#" onClick={handleClickCard}><button onClick={handleClickCard}><BsBoxArrowUpRight className='icon' /></button> Learn more</a>
      </div>
      <img src={props.img} alt={props.alt} />
      
    </div>
    <Modal show={openModal} setModalOpen={setModalOpen} title={props.title} body={props.body} />
    </>
  )
}

export default Card
