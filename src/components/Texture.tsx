import { Show, type Component } from "solid-js";
import { Camo1, Camo2, Dirty1, Dirty2, Dots } from "../parts/Textures";

const types = {
  None: null,
  Camo1,
  Camo2,
  Dirty1,
  Dirty2,
  Dots,
} as const;

const typeKeys = Object.keys(types) as (keyof typeof types)[];

type TextureProps = {
  index: number;
};

export const Texture: Component<TextureProps> = (props) => {
  // Get the current texture component
  const currentTexture = () => {
    return types[typeKeys[props.index]];
  };

  return (
    <g id="texture_part" transform="translate(-10, 25) scale(1.3)">
      <Show when={currentTexture()}>
        {(() => {
          const TextureComponent = currentTexture()!;
          return <TextureComponent />;
        })()}
      </Show>
    </g>
  );
};
