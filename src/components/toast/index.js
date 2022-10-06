import { useEffect, useRef } from 'react';
import { Toast } from 'bootstrap';

import './style.scss';
const PdToast = ({ isOpen = false, message = '' }) => {
  const toastRef = useRef();

  useEffect(() => {
    const toastEle = toastRef.current;

    const bsToast = new Toast(toastEle, {
      autohide: false,
    });

    if (isOpen) {
      return bsToast.show();
    } else {
      return bsToast.hide();
    }
  }, [isOpen]);
  return (
    <div
      className="position-fixed top-0 start-50 translate-middle-x p-3"
      style={{ zIndex: 100 }}>
      <div
        ref={toastRef}
        id="liveToast"
        className="toast hide pd-toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true">
        <div className="toast-header pd-toast-header">
          <strong className="me-auto">
            <p className="p-0 m-0">RNKR</p>
          </strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"></button>
        </div>
        <div className="toast-body pd-toast-body">
          <p className="p-0 m-0">{message}</p>
        </div>
      </div>
    </div>
  );
};

export { PdToast };
