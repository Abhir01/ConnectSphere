import type { SVGProps } from 'react'
import React from 'react'

export const ForbiddenOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25ZM1.75 11C1.75 5.89137 5.89137 1.75 11 1.75C13.2845 1.75 15.3756 2.57817 16.9894 3.95066C16.9827 3.95685 16.9762 3.96319 16.9697 3.96967L3.96969 16.9694C3.96317 16.976 3.95679 16.9826 3.95056 16.9893C2.57813 15.3755 1.75 13.2845 1.75 11ZM5.0105 18.0492C6.62432 19.4218 8.71544 20.25 11 20.25C16.1086 20.25 20.25 16.1086 20.25 11C20.25 8.7155 19.4218 6.62442 18.0493 5.01062C18.0431 5.01728 18.0368 5.02386 18.0303 5.03034L5.03034 18.0301C5.02382 18.0366 5.0172 18.043 5.0105 18.0492Z"
      fill="currentColor"
    />
  </svg>
)
