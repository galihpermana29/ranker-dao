import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './style.scss';

export const Modal = ({
  isOpen = false,
  children,
  onClose,
  maxWidth = 360,
}) => {
  useEffect(() => {
    if (document.body) {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="ranker-modal-overlay" />
      <div className="ranker-modal" style={{ maxWidth }}>
        <button className="ranker-modal-close" onClick={onClose}>
          ×
        </button>

        {children}
      </div>
    </>,
    document.getElementById('RankerDaoPortal'),
  );
};
