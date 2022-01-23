# App-wide state

This demo is designed to show how Redux, with Redux Toolkit, can be used to manage state across multiple components in an application.

Ghost's current application has behaviour where when some components in the application are dragged about, all the dropdown menus in the application are closed. This demo is designed to mimic that behaviour in React. It does so using:

- A `draggable` store slice, with two reducers – `startDragging` and `stopDragging` – that manipulate the value of a boolean, `isDragging`
- A `Draggable` component, which when dragging starts or stops, dispatches the appropriate action creator created by the `draggable` slice
- A `Dropdown` component, which uses a selector to read the `isDragging` value out of the store, and then closes the dropdowns whenever it's set to `true`

## To run

1. `npm install`
1. `npm start`
