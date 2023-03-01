// button.tsx
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

const button = cva(
  "select-none rounded-md px-2 py-2 text-center font-medium duration-150",
  {
    variants: {
      intent: {
        fill: "w-fit text-sm bg-blue-400 text-neutral-900 hover:bg-blue-500",
        outline:
          "w-fit border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white",
        "solid-grey":
          "w-28 bg-neutral-800 border border-neutral-700 text-sm text-neutral-200 hover:bg-neutral-400/40",
        navigation:
          "flex items-center justify-start space-x-2 rounded-md px-3.5 py-2.5 hover:bg-neutral-700",
        transparent: "text-neutral-100 w-fit hover:text-neutral-200 ",
      },
    },
    compoundVariants: [{ intent: "fill", className: "uppercase" }],
    defaultVariants: {
      intent: "fill",
    },
  },
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  text: string
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  ...props
}) => (
  <button className={button({ intent, className })} {...props}>
    {props.text}, {props.children}
  </button>
)
