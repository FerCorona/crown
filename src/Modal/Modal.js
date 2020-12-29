import React from 'react';

import Button from './../Button';

const Modal = ({ show, onClose, onActionAcepted, onActionRejected, child }) => (
  show && (
    <div className='CROWNModal'>
      <div className='ContainerModal'>
        <div className='Modal'>
          {
            child !== null ? child : (
              <>
                <div className='Close' onClick={() => onClose()}>X</div>
                <div className='Content'>
                  <div className='Title'>Title</div>
                  <div className='Text'>Content of Modal</div>
                  <div className='ButtonArea'>
                    <Button shape='Square' color='--red-1' text='Calcelar' type='Secondary' borderColor='--red-1' textColor='--red-1' onClick={() => onActionAcepted()} />
                    <Button shape='Square' color='--teal-1' text='Aceptar' onClick={() => onActionRejected()} />
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
);

Modal.defaultProps = {
  show: false,
  onClose: () => {},
  onActionAcepted: () => {},
  onActionRejected: () => {},
  child: null
};

export default Modal;