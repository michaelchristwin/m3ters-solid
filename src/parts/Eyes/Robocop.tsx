import type { Component } from "solid-js";

export const Robocop: Component = () => {
  return (
    <>
      <rect
        x="7"
        y="16"
        width="91"
        height="16"
        rx="4"
        fill="black"
        fill-opacity="0.8"
      />
      <mask
        id="eyemask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="7"
        y="16"
        width="91"
        height="16"
      >
        <rect x="7" y="16" width="91" height="16" rx="4" fill="white" />
      </mask>
      <g mask="url(#eyemask)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M76 7H94L82 37H64L76 7Z"
          fill="white"
          fill-opacity="0.8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M52 7H61L49 37H40L52 7Z"
          fill="white"
          fill-opacity="0.8"
        />
      </g>
    </>
  );
};
