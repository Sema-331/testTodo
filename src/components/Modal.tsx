import React, { useEffect, useRef } from 'react';

const Modal = ({ setStateModal }: { setStateModal: (v: boolean) => void }) => {
  //   const wrapRefBase = useRef<HTMLDivElement>(null);
  //   const handleAddPromoCode = (e: MouseEvent) => {
  //     if (
  //       wrapRefBase.current &&
  //       wrapRefBase.current.contains(e.target as HTMLDivElement)
  //     ) {
  //       setStateModal(true);
  //     } else if (
  //       wrapRefBase.current &&
  //       !wrapRefBase.current.contains(e.target as HTMLDivElement)
  //     ) {
  //       setStateModal(false);
  //     }
  //   };

  //   useEffect(() => {
  //     document.addEventListener('click', handleAddPromoCode);
  //     return () => {
  //       document.removeEventListener('click', handleAddPromoCode);
  //     };
  //   }, ['form__event']);

  return (
    <div>
      <p>this is modal</p>
      <button type="button" onClick={() => console.log('hello')}>
        CLCIL
      </button>
      <form className="form__event" action="">
        <input type="text" style={{ border: '1px solid red' }} />
        <input type="text" style={{ border: '1px solid red' }} />
        <button type="submit">SUBMIT</button>
      </form>
      <button onClick={() => setStateModal(false)}>close</button>
    </div>
  );
};

export default Modal;
