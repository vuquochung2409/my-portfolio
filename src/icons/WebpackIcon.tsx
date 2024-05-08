import * as React from "react";
import type { SVGProps } from "react";
const SvgWebpackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={2500}
    height={2500}
    viewBox="0 0 1200 1200"
    {...props}
  >
    <path fill="#fff" d="m600 0 530.3 300v600L600 1200 69.7 900V300z" />
    <path
      fill="#8ed6fb"
      d="m1035.6 879.3-418.1 236.5V931.6L878 788.3zm28.6-25.9V358.8l-153 88.3V765zm-901.5 25.9 418.1 236.5V931.6L320.3 788.3zm-28.6-25.9V358.8l153 88.3V765zM152 326.8 580.8 84.2v178.1L306.1 413.4l-2.1 1.2zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2z"
    />
    <path
      fill="#1c78c0"
      d="m580.8 889.7-257-141.3v-280l257 148.4zm36.7 0 257-141.3v-280l-257 148.4zM341.2 436l258-141.9 258 141.9-258 149z"
    />
  </svg>
);
export default SvgWebpackIcon;
