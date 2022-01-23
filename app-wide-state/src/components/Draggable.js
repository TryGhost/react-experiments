import { useDispatch } from "react-redux";
import { startDragging, stopDragging } from "../store/draggable";

export const Draggable = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="drag-handle"
      draggable="true"
      onDragStart={() => dispatch(startDragging())}
      onDragEnd={() => dispatch(stopDragging())}
    >
      {children}
    </div>
  );
};
