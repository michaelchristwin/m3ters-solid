import type { Component } from "solid-js";
import {
  Arturito,
  Bulging,
  Dizzy,
  Eva,
  Frame1,
  Frame2,
  Glow,
  Hal,
  Happy,
  Hearts,
  Robocop,
  Round,
  RoundFrame1,
  RoundFrame2,
  Sensor,
  Shade,
} from "../parts/Eyes";
import { Dynamic } from "solid-js/web";

// Define the types object with explicit type
const types = {
  Arturito,
  Bulging,
  Dizzy,
  Eva,
  Frame1,
  Frame2,
  Glow,
  Hal,
  Happy,
  Hearts,
  Robocop,
  Round,
  RoundFrame1,
  RoundFrame2,
  Sensor,
  Shade,
} as const;

// Get the keys as a tuple
const typeKeys = Object.keys(types) as (keyof typeof types)[];

interface EyesProps {
  type: number; // The index in the typeKeys array
}

export const Eyes: Component<EyesProps> = (props) => {
  return (
    <g id="eyes_part" transform="translate(38, 76)">
      <Dynamic component={types[typeKeys[props.type]]} />
    </g>
  );
};
