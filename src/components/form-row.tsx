import * as React from "react";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

const FormContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-6", className)}
    {...props}
  />
));
FormContainer.displayName = "FormContainer";

interface FormContentProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  htmlFor: string;
  error?: string;
}

const FormContent = React.forwardRef<HTMLDivElement, FormContentProps>(
  ({ className, children, error, label, htmlFor }, ref) => (
    <div
      ref={ref}
      className={cn("grid grid-cols-1 md:grid-cols-3 md:gap-3", className)}
    >
      <Label htmlFor={htmlFor} className="mb-1 md:mb-0 md:text-left md:pr-4">
        {label}
      </Label>

      <div className="md:col-span-2 w-full">
        {children}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </div>
  )
);
FormContent.displayName = "FormContent";

export { FormContainer, FormContent };
