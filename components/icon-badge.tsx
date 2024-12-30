import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const backgroundVariants = cva(
  "rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        defualt: "bg-sky-100",
        success: "bg-emerald-100",
      },
      iconVariant: {
          default: "text-sky-700",
          success: "text emerald-700",
      },
      size: {
        defualt: "p-2",
        sm: "p-1",
      },
      defaultVariants:{
        variant:'default',
        size:"default"
      }
    },
  }
);

const iconVariants = cva(
    "",
    {
        variants:{
            variant:{
                default:"text-sky-"
            }
        }
    }
)
