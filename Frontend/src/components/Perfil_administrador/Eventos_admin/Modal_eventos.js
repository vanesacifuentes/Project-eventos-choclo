import React, { useState } from 'react'
import Form_eventos from './Form_eventos'
import './Modal.css'

function Modal_eventos({ stateModal, setModal }) {

    return (
        <>

            {stateModal
                ?   <div className="modal fade" id="modalEvento" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                   <div className="modal-dialog" id="modal_d">
                       <div className="modal-content" id="modal_c">
                           <div className="modal-header">
                               <h1 className="modal-title" id="exampleModalLabel">Actualizar evento</h1>
                               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                           <div className="modal-body">
                           <Form_eventos/>
                           </div>
                           <div className="modal-footer">
                               <button type="button" className="btn-danger" data-bs-dismiss="modal">Cerrar</button>
                               <button type="button" className="btn-primary">Actualizar</button>
                           </div>
                       </div>
                   </div>
               </div>
                : null} 




        </>
    )
} export default Modal_eventos