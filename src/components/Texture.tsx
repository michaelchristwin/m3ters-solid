import { Show, type Component } from "solid-js";
import { Camo1, Camo2, Dirty1, Dirty2, Dots } from "../parts/Textures";
import { Dynamic } from "solid-js/web";

const types = {
  None: null,
  Camo1,
  Camo2,
  Dirty1,
  Dirty2,
  Dots,
};
const typeKeys = Object.keys(types) as (keyof typeof types)[];

interface TextureProps {
  type: number;
}

export const Texture: Component<TextureProps> = (props) => {
  return (
    <g id="texture_part" transform="translate(-10, 25) scale(1.3)">
      <Show when={types[typeKeys[props.type]]}>
        <Dynamic component={types[typeKeys[props.type]] || undefined} />
      </Show>
    </g>
  );
};
