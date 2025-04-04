import { useId } from "react";
import { Input } from "@/components/ui/input";

type Props = {
  label: string;
  placeholder: string;
};

export default function OverlappingInput({ label, placeholder }: Props) {
  const id = useId();
  return (
    <div className="group relative w-full">
      <label
        htmlFor={id}
        className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
      >
        {label}
      </label>
      <Input id={id} className="h-10 w-full" placeholder={placeholder} />
    </div>
  );
}
