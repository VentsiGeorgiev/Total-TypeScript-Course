const addClickEventListener = (listener: () => void) => {
  document.addEventListener("click", listener);
};

addClickEventListener(() => {
  console.log("Clicked!");
});

addClickEventListener(
  // @ts-expect-error
  "abc",
);

// =========== ###### ============
// IF function accepts event:
// Rule of Thumb
// Mouse -> MouseEvent
// Keyboard -> KeyboardEvent
// Form -> SubmitEvent / InputEvent
// Focus -> FocusEvent
// Drag -> DragEvent
// Touch -> TouchEvent
// Everything else -> often just Event
// =========== ###### ============
