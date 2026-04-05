"use client";

import * as React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import Image from "next/image";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  className?: string;
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select items...",
  className,
}: MultiSelectProps) {
  const handleSelect = (selectedValue: string) => {
    const newSelection = value.includes(selectedValue)
      ? value.filter((item) => item !== selectedValue)
      : [...value, selectedValue];
    onChange(newSelection);
  };

  const displayLabel =
    value.length === 0
      ? placeholder
      : value.length === 1
      ? options.find((opt) => opt.value === value[0])?.label
      : `${value.length} items selected`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex h-[48px] w-full items-center justify-between rounded-xl border border-line px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:bg-gray disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 data-[state=open]:bg-gray",
            className
          )}
        >
          <span className="truncate">{displayLabel}</span>
          <Image src="/icons/down.svg" alt="down" width={7.5} height={3.75} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="relative z-50 max-h-96 w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onSelect={(e) => e.preventDefault()}
            className="flex items-center p-2 text-sm cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            <Checkbox.Root
              id={`check-${option.value}`}
              checked={value.includes(option.value)}
              onCheckedChange={() => handleSelect(option.value)}
              className="flex items-center justify-center w-4 h-4 mr-2 border border-gray-400 rounded data-[state=checked]:bg-primary data-[state=checked]:text-white"
            >
              <Checkbox.Indicator>
                <CheckIcon className="w-3 h-3" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label
              htmlFor={`check-${option.value}`}
              className="flex-1 cursor-pointer select-none"
            >
              {option.label}
            </label>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
