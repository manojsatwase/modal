import React, { useState } from 'react'

function Modal() {
 const [modal, setModal] = useState(false);
 const closeModal = (e) => {
  if (e.target.classList.contains('modal')) {
   setModal(false)
  }
 }
 return (
  <section onClick={closeModal}>
   <button className="trigger" onClick={() => setModal(!modal)}>Join</button>
   <div className={`${modal ? 'modal open' : 'modal'}`}>
    <div className="modal__content">
     <div className="modal__header">
      <h1 className="modal__title">Login In</h1>
      <button type="button" className="close">
       <span onClick={() => setModal(!modal)}>&times;</span>
      </button>
     </div>
     <div className="modal__body">
      <h3>modal</h3>
      <p>No BS. Only quality goodies.</p>
      <form className="form" action="" method="post">
       <label htmlFor="email">Email: <input
        className="form__email"
        type="email"
        placeholder="Your email..."
       />
       </label>
       <label htmlFor="Password"
       >Password:
           <input
         className="form__Password"
         type="Password"
         placeholder="Your Password..."
        />
       </label>
       <label htmlFor="submit">
        <input className="form__submit" type="submit" value="Join" />
       </label>
      </form>

     </div>
    </div>
   </div>
  </section>
 )
}

export default Modal


