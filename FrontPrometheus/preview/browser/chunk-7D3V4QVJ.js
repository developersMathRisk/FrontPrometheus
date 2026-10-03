import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-HWBKIOGC.js";

// src/app/shared/animations/transiciones.ts
var fadeSlideIn = trigger("fadeSlideIn", [
  transition(":enter", [
    style({ opacity: 0, transform: "translateY(14px)" }),
    animate("340ms cubic-bezier(0.16, 1, 0.3, 1)", style({ opacity: 1, transform: "translateY(0)" }))
  ])
]);
var fadeIn = trigger("fadeIn", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("220ms ease-out", style({ opacity: 1 }))
  ])
]);
var popIn = trigger("popIn", [
  transition(":enter", [
    style({ opacity: 0, transform: "scale(0.96)" }),
    animate("220ms cubic-bezier(0.16, 1, 0.3, 1)", style({ opacity: 1, transform: "scale(1)" }))
  ])
]);

export {
  fadeSlideIn,
  fadeIn
};
//# sourceMappingURL=chunk-7D3V4QVJ.js.map
