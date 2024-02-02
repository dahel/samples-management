import * as React from "react"

import  cn  from "app/_utils/cn"

export interface SelectProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
    error: boolean;
  }

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <select
        className={cn(
          "select select-bordered w-full max-w-xs text-base",
          error && 'select-error',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Select.displayName = "Select"

export default Select;

