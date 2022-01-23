import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Dropdown = ({ handle, children, open = false }) => {
  // This is some standard React state that allows us to determine (and set)
  // whether or not this specific instance of the Dropdown component is open
  // without interacting with the application-wide store.
  const [isOpen, setIsOpen] = useState(open);

  // This uses react-redux's useSelector hook to get the `isDragging` state
  // out of the store; it'll also cause the component to be re-rendered whenever
  // it changes.
  const isDragging = useSelector((state) => state.draggable.isDragging);

  // This is an effect that's run every time the value of `isDragging` changes –
  // if it changes to `true`, we close the dropdowns by updating the value of
  // `isOpen` to false.
  useEffect(() => {
    if (isDragging) {
      setIsOpen(false);
    }
  }, [isDragging]);

  return (
    <div className="dropdown">
      <button
        className="dropdown__handle"
        // This updates this specific component's state whenever the "handle" of
        // the dropdown is clicked, toggling whether or not the dropdown content
        // is visible.
        onClick={() => setIsOpen(!isOpen)}
      >
        {handle}
      </button>

      {isOpen && <div className="dropdown__content">{children}</div>}
    </div>
  );
};
