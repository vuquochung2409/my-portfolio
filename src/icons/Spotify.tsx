import * as React from "react";
import type { SVGProps } from "react";
const SvgSpotify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    className="spotify_svg__spotify"
    viewBox="0 0 64 64"
    {...props}
  >
    <radialGradient
      id="spotify_svg__a"
      cx={33.34}
      cy={572.064}
      r={43.888}
      gradientTransform="translate(0 -534)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#f4e9c3" />
      <stop offset={0.219} stopColor="#f8eecd" />
      <stop offset={0.644} stopColor="#fdf4dc" />
      <stop offset={1} stopColor="#fff6e1" />
    </radialGradient>
    <path
      fill="url(#spotify_svg__a)"
      d="M51.03 37.34c.16.98 1.08 1.66 2.08 1.66h5.39c2.63 0 4.75 2.28 4.48 4.96-.24 2.34-2.34 4.04-4.69 4.04H49c-1.22 0-2.18 1.08-1.97 2.34.16.98 1.08 1.66 2.08 1.66h8.39c1.24 0 2.37.5 3.18 1.32.82.81 1.32 1.94 1.32 3.18 0 2.49-2.01 4.5-4.5 4.5h-49A5.495 5.495 0 0 1 3 55.5C3 52.46 5.46 50 8.5 50H14c1.22 0 2.18-1.08 1.97-2.34-.16-.98-1.08-3.66-2.08-3.66H5.5c-2.63 0-4.75-2.28-4.48-4.96C1.26 36.7 3.36 35 5.71 35H8c1.71 0 3.09-1.43 3-3.16C10.91 30.22 9.45 29 7.83 29H4.5C1.87 29-.25 26.72.02 24.04.26 21.7 2.37 20 4.71 20H20c.83 0 1.58-.34 2.12-.88S23 17.83 23 17c0-1.66-1.34-3-3-3h-1.18c-.62-.09-1.43 0-2.32 0h-9A5.495 5.495 0 0 1 2 8.5C2 5.46 4.46 3 7.5 3h49c3.21 0 5.8 2.79 5.47 6.06-.29 2.86-1.86 4.94-4.73 4.94H52c-2.76 0-5 2.24-5 5 0 1.38.56 2.63 1.46 3.54.91.9 2.16 1.46 3.54 1.46h6.5c3.21 0 5.8 2.79 5.47 6.06-.29 2.86-2.86 4.94-5.73 4.94H53c-1.22 0-2.18 1.08-1.97 2.34"
    />
    <linearGradient
      id="spotify_svg__b"
      x1={32}
      x2={32}
      y1={530.096}
      y2={590.253}
      gradientTransform="translate(0 -534)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#42d778" />
      <stop offset={0.428} stopColor="#3dca76" />
      <stop offset={1} stopColor="#34b171" />
    </linearGradient>
    <path
      fill="url(#spotify_svg__b)"
      d="M57 32c0 12.837-9.663 23.404-22.115 24.837-.943.105-1.914.163-2.885.163a24.8 24.8 0 0 1-4.808-.471C15.683 54.298 7 44.163 7 32 7 18.192 18.192 7 32 7s25 11.192 25 25"
    />
    <path
      fill="#fff"
      d="M41.683 44.394c-.365 0-.731-.181-1.096-.365-3.471-2.009-7.674-3.105-12.24-3.105-2.559 0-5.116.364-7.491.912-.365 0-.914.183-1.096.183-.914 0-1.461-.732-1.461-1.462 0-.913.547-1.463 1.279-1.643a36.3 36.3 0 0 1 8.951-1.096c5.116 0 9.866 1.276 13.885 3.655.548.364.914.73.914 1.642-.183.732-.914 1.279-1.645 1.279m2.558-6.213c-.547 0-.912-.18-1.279-.364-3.835-2.375-9.135-3.839-15.163-3.839-2.924 0-5.664.366-7.674.916-.549.18-.731.18-1.096.18-1.096 0-1.827-.912-1.827-1.826 0-1.096.549-1.645 1.461-2.009 2.74-.73 5.481-1.279 9.317-1.279 6.213 0 12.241 1.463 16.991 4.384.73.364 1.096 1.096 1.096 1.826.002 1.099-.73 2.011-1.826 2.011m2.924-7.305c-.548 0-.731-.182-1.279-.364-4.385-2.559-10.961-4.021-17.356-4.021-3.289 0-6.577.366-9.5 1.096-.366 0-.731.182-1.279.182-1.279.183-2.193-.912-2.193-2.192 0-1.279.731-2.009 1.644-2.192 3.471-1.096 7.125-1.462 11.327-1.462 6.943 0 14.25 1.462 19.731 4.567.73.366 1.278 1.096 1.278 2.193-.181 1.278-1.096 2.193-2.373 2.193"
    />
  </svg>
);
export default SvgSpotify;
