import { useId } from "react";
import { Input } from "@/components/ui/input";

type Props = {
  label: string;
  placeholder: string;
  side?: "right" | "left";
};

export default function OverlappingInput({
  label,
  placeholder,
  side = "left",
}: Props) {
  const id = useId();
  return (
    <div className="group relative w-full">
      <label
        htmlFor={id}
        className={`bg-background text-foreground ${
          side === "left" ? "start-1" : "end-1"
        } absolute top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50`}
      >
        {label}
      </label>
      <Input
        id={id}
        className="h-10 w-full text-xs"
        placeholder={placeholder}
      />
    </div>
  );
}
