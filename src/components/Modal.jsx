import React from 'react'
import { BsArrowsAngleContract } from "react-icons/bs";
import { motion } from 'framer-motion';
const Modal = ( {setModalOpen, show, title, body} ) => {
  if (show){
    return (
      <>
      <div className='modal'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0}} className='modal-inside'>
            <button className="close-modal" onClick={() => setModalOpen(false)}><BsArrowsAngleContract /></button>
            <h1>{title}</h1>
            <p>
              {body}
            </p>
        </motion.div>
      </div>
      <div className={`overlay`}></div>   
      </>
      )
    }
}

export default Modal
