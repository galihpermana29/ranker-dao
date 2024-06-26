import React, { useEffect, useRef, useState } from 'react';

import './style.scss';

/**
 *
 * @typedef {object} IAccordionProps
 * @property {React.ReactNode} [children]
 * @property {boolean} [defaultOpen] Define a default value whether is open by default or close by default.
 *
 * Default value is `false`.
 * @property {boolean | null | undefined} [isOpen]
 * @property {React.HTMLProps<HTMLButtonElement>['onClick']} [onClick]
 * @property {string} [title]
 */

/** @type React.FC<IAccordionProps>  */
export const Accordion = ({
  children,
  defaultOpen = false,
  isOpen,
  onClick,
  title,
}) => {
  /** @type {React.RefObject<HTMLDivElement>} */
  const accordionRef = useRef(null);
  /** @type {React.RefObject<HTMLDivElement>} */
  const innerAccordionRef = useRef(null);
  /** @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} */
  const [isExpand, setIsExpand] = useState(defaultOpen);

  const handleExpand = () => {
    if (accordionRef && accordionRef?.current && innerAccordionRef?.current) {
      const flag = isOpen !== null ? !isOpen : !isExpand;

      accordionRef.current.style.height = flag
        ? '56px'
        : `${90 + innerAccordionRef?.current?.scrollHeight}px`;
    }
  };

  useEffect(() => {
    handleExpand();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpand, isOpen]);

  return (
    <div
      className={`accordion ${isOpen || isExpand ? 'accordion--open' : ''}`}
      ref={accordionRef}>
      <div
        className="accordion-title"
        onClick={
          onClick !== null && onClick !== undefined
            ? onClick
            : () => setIsExpand(prev => !prev)
        }>
        {title}
        <span className="accordion-title-icon">{!isOpen ? '+' : '-'}</span>
      </div>

      {children && (
        <div className="accordion-content" ref={innerAccordionRef}>
          {children}
        </div>
      )}
    </div>
  );
};
