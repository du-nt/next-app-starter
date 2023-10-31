import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function JapanFlagIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="256"
        height="256"
        viewBox="0 0 256 256"
        xmlSpace="preserve"
      >
        <defs />
        <g
          stroke="none"
          strokeWidth={0}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="none"
          fillRule="nonzero"
          opacity={1}
          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        >
          <circle
            cx="45"
            cy="45"
            r="45"
            stroke="none"
            strokeWidth={1}
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit={10}
            fill="rgb(243, 244, 245)"
            fillRule="nonzero"
            opacity={1}
            transform="  matrix(1 0 0 1 0 0) "
          />
          <circle
            cx="45"
            cy="45"
            r="17.5"
            stroke="none"
            strokeWidth={1}
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit={10}
            fill="rgb(211, 0, 0)"
            fillRule="nonzero"
            opacity={1}
            transform="  matrix(1 0 0 1 0 0) "
          />
        </g>
      </svg>
    </SvgIcon>
  )
}
