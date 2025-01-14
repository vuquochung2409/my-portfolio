import * as React from "react";
import type { SVGProps } from "react";
const SvgVolume = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={20}
    fill="currentColor"
    className="volume_svg__volume_button"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11.26 3.691A1.2 1.2 0 0 1 12 4.8v14.4a1.199 1.199 0 0 1-2.048.848L5.503 15.6H2.4a1.2 1.2 0 0 1-1.2-1.2V9.6a1.2 1.2 0 0 1 1.2-1.2h3.103l4.449-4.448a1.2 1.2 0 0 1 1.308-.26Zm6.328-.176a1.2 1.2 0 0 1 1.697 0A11.97 11.97 0 0 1 22.8 12a11.97 11.97 0 0 1-3.515 8.485 1.2 1.2 0 0 1-1.697-1.697A9.56 9.56 0 0 0 20.4 12a9.57 9.57 0 0 0-2.812-6.788 1.2 1.2 0 0 1 0-1.697m-3.394 3.393a1.2 1.2 0 0 1 1.698 0A7.18 7.18 0 0 1 18 12a7.18 7.18 0 0 1-2.108 5.092 1.2 1.2 0 1 1-1.698-1.698A4.78 4.78 0 0 0 15.6 12a4.78 4.78 0 0 0-1.406-3.394 1.2 1.2 0 0 1 0-1.698"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVolume;
