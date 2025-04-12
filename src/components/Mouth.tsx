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
  const currentMouth = () => {
    return types[typeKeys[props.index]];
  };

  return (
    <g id="mouth_part" transform="translate(52, 124)">
      <Show when={currentMouth()}>
        {(() => {
          const MouthComponent = currentMouth()!;
          return <MouthComponent />;
        })()}
      </Show>
    </g>
  );
};
