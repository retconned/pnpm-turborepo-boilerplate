import { FC } from 'react'

interface GradientProps {
  fillColor?: string
  stopColor?: string
  stopColor2?: string
  rotateDegrees?: string
  position?: 'top' | 'bottom'
  childPosition?: string
}

const Gradient: FC<GradientProps> = ({
  fillColor = 'ee0717bf',
  stopColor = '4034ee',
  stopColor2 = '339c46',
  rotateDegrees = '30',
  position = 'top',
  childPosition = 'calc(100%-180rem)'
}) => {
  const positionVariant = {
    top: 'top-[-10rem]',
    bottom: 'top-[calc(100%-14rem)]'
    // sm:left-[calc(50% - 30rem)] sm:h-[42.375rem]
  }

  const rotate = `rotate-[${rotateDegrees}deg]`

  return (
    <>
      <div
        className={`absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl ${positionVariant[position]}`}>
        <svg
          className={`relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%-30rem)] sm:h-[42.375rem] ${rotate} `}
          viewBox='0 0 1155 678'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fill={`url(#${fillColor})`}
            fillOpacity='.3'
            d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
          />
          <defs>
            <linearGradient
              id={`${fillColor}`}
              x1='1155.49'
              x2='-78.208'
              y1='.177'
              y2='474.645'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor={`#${stopColor}`} />
              <stop offset={1} stopColor={`#${stopColor2}`} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  )
}

export default Gradient
