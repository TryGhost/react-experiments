import { Draggable, Dropdown } from "./components";

export const App = () => (
  <div className="columns">
    <Dropdown handle="Click to toggle dropdown">
      Hello, I am an open dropdown
    </Dropdown>

    <Draggable>Drag me, and I'll close open dropdowns!</Draggable>

    <Dropdown handle="A second dropdown" open>
      Hi there, I am a different dropdown, and I'm open by default
    </Dropdown>
  </div>
);
