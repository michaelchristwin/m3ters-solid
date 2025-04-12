import type { Component } from "solid-js";

export const Dots: Component = () => {
  return (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29.4 63.1034C29.4 64.2652 28.4598 65.2069 27.3 65.2069C26.1402 65.2069 25.2 64.2652 25.2 63.1034C25.2 61.9417 26.1402 61 27.3 61C28.4598 61 29.4 61.9417 29.4 63.1034ZM33.6 71.5172C34.7598 71.5172 35.7 70.5755 35.7 69.4138C35.7 68.2521 34.7598 67.3103 33.6 67.3103C32.4402 67.3103 31.5 68.2521 31.5 69.4138C31.5 70.5755 32.4402 71.5172 33.6 71.5172ZM33.6 84.1379C34.7598 84.1379 35.7 83.1962 35.7 82.0345C35.7 80.8728 34.7598 79.931 33.6 79.931C32.4402 79.931 31.5 80.8728 31.5 82.0345C31.5 83.1962 32.4402 84.1379 33.6 84.1379ZM33.6 96.7586C34.7598 96.7586 35.7 95.8169 35.7 94.6552C35.7 93.4935 34.7598 92.5517 33.6 92.5517C32.4402 92.5517 31.5 93.4935 31.5 94.6552C31.5 95.8169 32.4402 96.7586 33.6 96.7586ZM36.2 107.103C36.2 108.265 35.2598 109.207 34.1 109.207C32.9402 109.207 32 108.265 32 107.103C32 105.942 32.9402 105 34.1 105C35.2598 105 36.2 105.942 36.2 107.103ZM47.1 109.207C48.2598 109.207 49.2 108.265 49.2 107.103C49.2 105.942 48.2598 105 47.1 105C45.9402 105 45 105.942 45 107.103C45 108.265 45.9402 109.207 47.1 109.207ZM29.4 88.3448C29.4 89.5065 28.4598 90.4483 27.3 90.4483C26.1402 90.4483 25.2 89.5065 25.2 88.3448C25.2 87.1831 26.1402 86.2414 27.3 86.2414C28.4598 86.2414 29.4 87.1831 29.4 88.3448ZM27.1 103.207C28.2598 103.207 29.2 102.265 29.2 101.103C29.2 99.9417 28.2598 99 27.1 99C25.9402 99 25 99.9417 25 101.103C25 102.265 25.9402 103.207 27.1 103.207ZM53.2 101.103C53.2 102.265 52.2598 103.207 51.1 103.207C49.9402 103.207 49 102.265 49 101.103C49 99.9417 49.9402 99 51.1 99C52.2598 99 53.2 99.9417 53.2 101.103ZM39.9 90.4483C41.0598 90.4483 42 89.5065 42 88.3448C42 87.1831 41.0598 86.2414 39.9 86.2414C38.7402 86.2414 37.8 87.1831 37.8 88.3448C37.8 89.5065 38.7402 90.4483 39.9 90.4483ZM42 100.966C42 102.127 41.0598 103.069 39.9 103.069C38.7402 103.069 37.8 102.127 37.8 100.966C37.8 99.8038 38.7402 98.8621 39.9 98.8621C41.0598 98.8621 42 99.8038 42 100.966ZM27.3 77.8276C28.4598 77.8276 29.4 76.8858 29.4 75.7241C29.4 74.5624 28.4598 73.6207 27.3 73.6207C26.1402 73.6207 25.2 74.5624 25.2 75.7241C25.2 76.8858 26.1402 77.8276 27.3 77.8276ZM42 75.7241C42 76.8858 41.0598 77.8276 39.9 77.8276C38.7402 77.8276 37.8 76.8858 37.8 75.7241C37.8 74.5624 38.7402 73.6207 39.9 73.6207C41.0598 73.6207 42 74.5624 42 75.7241ZM8.4 96.7586C9.5598 96.7586 10.5 95.8169 10.5 94.6552C10.5 93.4935 9.5598 92.5517 8.4 92.5517C7.2402 92.5517 6.3 93.4935 6.3 94.6552C6.3 95.8169 7.2402 96.7586 8.4 96.7586ZM10.5 82.0345C10.5 83.1962 9.5598 84.1379 8.4 84.1379C7.2402 84.1379 6.3 83.1962 6.3 82.0345C6.3 80.8728 7.2402 79.931 8.4 79.931C9.5598 79.931 10.5 80.8728 10.5 82.0345ZM8.4 109.379C9.5598 109.379 10.5 108.438 10.5 107.276C10.5 106.114 9.5598 105.172 8.4 105.172C7.2402 105.172 6.3 106.114 6.3 107.276C6.3 108.438 7.2402 109.379 8.4 109.379ZM4.2 88.3448C4.2 89.5065 3.2598 90.4483 2.1 90.4483C0.940202 90.4483 0 89.5065 0 88.3448C0 87.1831 0.940202 86.2414 2.1 86.2414C3.2598 86.2414 4.2 87.1831 4.2 88.3448ZM2.1 103.069C3.2598 103.069 4.2 102.127 4.2 100.966C4.2 99.8038 3.2598 98.8621 2.1 98.8621C0.940202 98.8621 0 99.8038 0 100.966C0 102.127 0.940202 103.069 2.1 103.069ZM16.8 88.3448C16.8 89.5065 15.8598 90.4483 14.7 90.4483C13.5402 90.4483 12.6 89.5065 12.6 88.3448C12.6 87.1831 13.5402 86.2414 14.7 86.2414C15.8598 86.2414 16.8 87.1831 16.8 88.3448ZM14.7 103.069C15.8598 103.069 16.8 102.127 16.8 100.966C16.8 99.8038 15.8598 98.8621 14.7 98.8621C13.5402 98.8621 12.6 99.8038 12.6 100.966C12.6 102.127 13.5402 103.069 14.7 103.069ZM10.5 69.4138C10.5 70.5755 9.5598 71.5172 8.4 71.5172C7.2402 71.5172 6.3 70.5755 6.3 69.4138C6.3 68.2521 7.2402 67.3103 8.4 67.3103C9.5598 67.3103 10.5 68.2521 10.5 69.4138ZM2.1 77.8276C3.2598 77.8276 4.2 76.8858 4.2 75.7241C4.2 74.5624 3.2598 73.6207 2.1 73.6207C0.940202 73.6207 0 74.5624 0 75.7241C0 76.8858 0.940202 77.8276 2.1 77.8276ZM16.8 63.1034C16.8 64.2652 15.8598 65.2069 14.7 65.2069C13.5402 65.2069 12.6 64.2652 12.6 63.1034C12.6 61.9417 13.5402 61 14.7 61C15.8598 61 16.8 61.9417 16.8 63.1034ZM14.7 77.8276C15.8598 77.8276 16.8 76.8858 16.8 75.7241C16.8 74.5624 15.8598 73.6207 14.7 73.6207C13.5402 73.6207 12.6 74.5624 12.6 75.7241C12.6 76.8858 13.5402 77.8276 14.7 77.8276ZM23.1 94.6552C23.1 95.8169 22.1598 96.7586 21 96.7586C19.8402 96.7586 18.9 95.8169 18.9 94.6552C18.9 93.4935 19.8402 92.5517 21 92.5517C22.1598 92.5517 23.1 93.4935 23.1 94.6552ZM21 84.1379C22.1598 84.1379 23.1 83.1962 23.1 82.0345C23.1 80.8728 22.1598 79.931 21 79.931C19.8402 79.931 18.9 80.8728 18.9 82.0345C18.9 83.1962 19.8402 84.1379 21 84.1379ZM23.1 107.276C23.1 108.438 22.1598 109.379 21 109.379C19.8402 109.379 18.9 108.438 18.9 107.276C18.9 106.114 19.8402 105.172 21 105.172C22.1598 105.172 23.1 106.114 23.1 107.276ZM33.6 122C34.7598 122 35.7 121.058 35.7 119.897C35.7 118.735 34.7598 117.793 33.6 117.793C32.4402 117.793 31.5 118.735 31.5 119.897C31.5 121.058 32.4402 122 33.6 122ZM29.4 113.586C29.4 114.748 28.4598 115.69 27.3 115.69C26.1402 115.69 25.2 114.748 25.2 113.586C25.2 112.425 26.1402 111.483 27.3 111.483C28.4598 111.483 29.4 112.425 29.4 113.586ZM39.9 115.69C41.0598 115.69 42 114.748 42 113.586C42 112.425 41.0598 111.483 39.9 111.483C38.7402 111.483 37.8 112.425 37.8 113.586C37.8 114.748 38.7402 115.69 39.9 115.69ZM10.5 119.897C10.5 121.058 9.5598 122 8.4 122C7.2402 122 6.3 121.058 6.3 119.897C6.3 118.735 7.2402 117.793 8.4 117.793C9.5598 117.793 10.5 118.735 10.5 119.897ZM2.1 115.69C3.2598 115.69 4.2 114.748 4.2 113.586C4.2 112.425 3.2598 111.483 2.1 111.483C0.940202 111.483 0 112.425 0 113.586C0 114.748 0.940202 115.69 2.1 115.69ZM16.8 113.586C16.8 114.748 15.8598 115.69 14.7 115.69C13.5402 115.69 12.6 114.748 12.6 113.586C12.6 112.425 13.5402 111.483 14.7 111.483C15.8598 111.483 16.8 112.425 16.8 113.586ZM21 122C22.1598 122 23.1 121.058 23.1 119.897C23.1 118.735 22.1598 117.793 21 117.793C19.8402 117.793 18.9 118.735 18.9 119.897C18.9 121.058 19.8402 122 21 122ZM23.1 69.4138C23.1 70.5755 22.1598 71.5172 21 71.5172C19.8402 71.5172 18.9 70.5755 18.9 69.4138C18.9 68.2521 19.8402 67.3103 21 67.3103C22.1598 67.3103 23.1 68.2521 23.1 69.4138Z"
        fill="black"
        fill-opacity="0.2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M119.4 2.10345C119.4 3.26515 118.46 4.2069 117.3 4.2069C116.14 4.2069 115.2 3.26515 115.2 2.10345C115.2 0.941746 116.14 0 117.3 0C118.46 0 119.4 0.941746 119.4 2.10345ZM123.6 10.5172C124.76 10.5172 125.7 9.5755 125.7 8.41379C125.7 7.25209 124.76 6.31034 123.6 6.31034C122.44 6.31034 121.5 7.25209 121.5 8.41379C121.5 9.5755 122.44 10.5172 123.6 10.5172ZM123.6 23.1379C124.76 23.1379 125.7 22.1962 125.7 21.0345C125.7 19.8728 124.76 18.931 123.6 18.931C122.44 18.931 121.5 19.8728 121.5 21.0345C121.5 22.1962 122.44 23.1379 123.6 23.1379ZM123.6 35.7586C124.76 35.7586 125.7 34.8169 125.7 33.6552C125.7 32.4935 124.76 31.5517 123.6 31.5517C122.44 31.5517 121.5 32.4935 121.5 33.6552C121.5 34.8169 122.44 35.7586 123.6 35.7586ZM125.7 46.2759C125.7 47.4376 124.76 48.3793 123.6 48.3793C122.44 48.3793 121.5 47.4376 121.5 46.2759C121.5 45.1142 122.44 44.1724 123.6 44.1724C124.76 44.1724 125.7 45.1142 125.7 46.2759ZM117.3 29.4483C118.46 29.4483 119.4 28.5065 119.4 27.3448C119.4 26.1831 118.46 25.2414 117.3 25.2414C116.14 25.2414 115.2 26.1831 115.2 27.3448C115.2 28.5065 116.14 29.4483 117.3 29.4483ZM119.4 39.9655C119.4 41.1272 118.46 42.069 117.3 42.069C116.14 42.069 115.2 41.1272 115.2 39.9655C115.2 38.8038 116.14 37.8621 117.3 37.8621C118.46 37.8621 119.4 38.8038 119.4 39.9655ZM129.9 29.4483C131.06 29.4483 132 28.5065 132 27.3448C132 26.1831 131.06 25.2414 129.9 25.2414C128.74 25.2414 127.8 26.1831 127.8 27.3448C127.8 28.5065 128.74 29.4483 129.9 29.4483ZM132 39.9655C132 41.1272 131.06 42.069 129.9 42.069C128.74 42.069 127.8 41.1272 127.8 39.9655C127.8 38.8038 128.74 37.8621 129.9 37.8621C131.06 37.8621 132 38.8038 132 39.9655ZM117.3 16.8276C118.46 16.8276 119.4 15.8858 119.4 14.7241C119.4 13.5624 118.46 12.6207 117.3 12.6207C116.14 12.6207 115.2 13.5624 115.2 14.7241C115.2 15.8858 116.14 16.8276 117.3 16.8276ZM132 14.7241C132 15.8858 131.06 16.8276 129.9 16.8276C128.74 16.8276 127.8 15.8858 127.8 14.7241C127.8 13.5624 128.74 12.6207 129.9 12.6207C131.06 12.6207 132 13.5624 132 14.7241ZM98.4 35.7586C99.5598 35.7586 100.5 34.8169 100.5 33.6552C100.5 32.4935 99.5598 31.5517 98.4 31.5517C97.2402 31.5517 96.3 32.4935 96.3 33.6552C96.3 34.8169 97.2402 35.7586 98.4 35.7586ZM100.5 21.0345C100.5 22.1962 99.5598 23.1379 98.4 23.1379C97.2402 23.1379 96.3 22.1962 96.3 21.0345C96.3 19.8728 97.2402 18.931 98.4 18.931C99.5598 18.931 100.5 19.8728 100.5 21.0345ZM98.4 48.3793C99.5598 48.3793 100.5 47.4376 100.5 46.2759C100.5 45.1142 99.5598 44.1724 98.4 44.1724C97.2402 44.1724 96.3 45.1142 96.3 46.2759C96.3 47.4376 97.2402 48.3793 98.4 48.3793ZM94.2 27.3448C94.2 28.5065 93.2598 29.4483 92.1 29.4483C90.9402 29.4483 90 28.5065 90 27.3448C90 26.1831 90.9402 25.2414 92.1 25.2414C93.2598 25.2414 94.2 26.1831 94.2 27.3448ZM104.7 29.4483C105.86 29.4483 106.8 28.5065 106.8 27.3448C106.8 26.1831 105.86 25.2414 104.7 25.2414C103.54 25.2414 102.6 26.1831 102.6 27.3448C102.6 28.5065 103.54 29.4483 104.7 29.4483ZM106.8 39.9655C106.8 41.1272 105.86 42.069 104.7 42.069C103.54 42.069 102.6 41.1272 102.6 39.9655C102.6 38.8038 103.54 37.8621 104.7 37.8621C105.86 37.8621 106.8 38.8038 106.8 39.9655ZM98.4 10.5172C99.5598 10.5172 100.5 9.5755 100.5 8.41379C100.5 7.25209 99.5598 6.31034 98.4 6.31034C97.2402 6.31034 96.3 7.25209 96.3 8.41379C96.3 9.5755 97.2402 10.5172 98.4 10.5172ZM94.2 14.7241C94.2 15.8858 93.2598 16.8276 92.1 16.8276C90.9402 16.8276 90 15.8858 90 14.7241C90 13.5624 90.9402 12.6207 92.1 12.6207C93.2598 12.6207 94.2 13.5624 94.2 14.7241ZM104.7 4.2069C105.86 4.2069 106.8 3.26515 106.8 2.10345C106.8 0.941746 105.86 0 104.7 0C103.54 0 102.6 0.941746 102.6 2.10345C102.6 3.26515 103.54 4.2069 104.7 4.2069ZM106.8 14.7241C106.8 15.8858 105.86 16.8276 104.7 16.8276C103.54 16.8276 102.6 15.8858 102.6 14.7241C102.6 13.5624 103.54 12.6207 104.7 12.6207C105.86 12.6207 106.8 13.5624 106.8 14.7241ZM111 35.7586C112.16 35.7586 113.1 34.8169 113.1 33.6552C113.1 32.4935 112.16 31.5517 111 31.5517C109.84 31.5517 108.9 32.4935 108.9 33.6552C108.9 34.8169 109.84 35.7586 111 35.7586ZM113.1 21.0345C113.1 22.1962 112.16 23.1379 111 23.1379C109.84 23.1379 108.9 22.1962 108.9 21.0345C108.9 19.8728 109.84 18.931 111 18.931C112.16 18.931 113.1 19.8728 113.1 21.0345ZM111 48.3793C112.16 48.3793 113.1 47.4376 113.1 46.2759C113.1 45.1142 112.16 44.1724 111 44.1724C109.84 44.1724 108.9 45.1142 108.9 46.2759C108.9 47.4376 109.84 48.3793 111 48.3793ZM125.7 58.8965C125.7 60.0583 124.76 61 123.6 61C122.44 61 121.5 60.0583 121.5 58.8965C121.5 57.7348 122.44 56.7931 123.6 56.7931C124.76 56.7931 125.7 57.7348 125.7 58.8965ZM129.9 54.6897C131.06 54.6897 132 53.7479 132 52.5862C132 51.4245 131.06 50.4828 129.9 50.4828C128.74 50.4828 127.8 51.4245 127.8 52.5862C127.8 53.7479 128.74 54.6897 129.9 54.6897ZM106.8 52.5862C106.8 53.7479 105.86 54.6897 104.7 54.6897C103.54 54.6897 102.6 53.7479 102.6 52.5862C102.6 51.4245 103.54 50.4828 104.7 50.4828C105.86 50.4828 106.8 51.4245 106.8 52.5862ZM111 61C112.16 61 113.1 60.0583 113.1 58.8965C113.1 57.7348 112.16 56.7931 111 56.7931C109.84 56.7931 108.9 57.7348 108.9 58.8965C108.9 60.0583 109.84 61 111 61ZM113.1 8.41379C113.1 9.5755 112.16 10.5172 111 10.5172C109.84 10.5172 108.9 9.5755 108.9 8.41379C108.9 7.25209 109.84 6.31034 111 6.31034C112.16 6.31034 113.1 7.25209 113.1 8.41379Z"
        fill="black"
        fill-opacity="0.1"
      />
    </>
  );
};
