import { useState } from "react";
import { useSelector } from "react-redux";

export const Dropdown = ({ handle, children, open = false }) => {
  const [isOpen, setIsOpen] = useState(open);
  const isDragging = useSelector((state) => state.draggable.isDragging);

  return (
    <div className="dropdown">
      <button className="dropdown__handle" onClick={() => setIsOpen(!isOpen)}>
        {handle}
      </button>
      {isOpen && !isDragging && (
        <div className="dropdown__content">{children}</div>
      )}
    </div>
  );
};
