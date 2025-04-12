import { type Component, Show } from "solid-js";
import {
  Arturito,
  Bite,
  Diagram,
  Grill1,
  Grill2,
  Grill3,
  Robocop,
  Smile1,
  Smile2,
  Square1,
  Square2,
} from "../parts/Mouths";
import { Dynamic } from "solid-js/web";

const types = {
  None: null,
  Arturito,
  Bite,
  Diagram,
  Grill1,
  Grill2,
  Grill3,
  Robocop,
  Smile1,
  Smile2,
  Square1,
  Square2,
};
const typeKeys = Object.keys(types) as (keyof typeof types)[];

type MouthProps = {
  index: number;
};

export const Mouth: Component<MouthProps> = (props) => {
  return (
    <g id="mouth_part" transform="translate(52, 124)">
      <Show when={types[typeKeys[props.index]]}>
        <Dynamic component={types[typeKeys[props.index]] || undefined} />
      </Show>
    </g>
  );
};
