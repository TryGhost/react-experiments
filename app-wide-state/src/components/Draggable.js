import { useDispatch } from "react-redux";
import { startDragging, stopDragging } from "../store/draggable";

export const Draggable = ({ children }) => {
  // This gives us an instance of react-redux's "dispatch" hook, which we can
  // use to dispatch action creators.
  const dispatch = useDispatch();

  return (
    <div
      className="drag-handle"
      draggable="true"
      // These bind to the `dragstart` and `dragend` events of the div – when
      // those events fire, we "dispatch" the relevant action creator to the
      // store, which in turn causes the reducers attached to them in the
      // slice to be run against the store's state.
      onDragStart={() => dispatch(startDragging())}
      onDragEnd={() => dispatch(stopDragging())}
    >
      {children}
    </div>
  );
};
