import React from "react";
import { Button } from "@/components/ui/button.tsx";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const OauthButton = ({ children, onClick }: Props) => {
  return (
    <Button size={"lg"} variant={"outline"} onClick={onClick}>
      {children}
    </Button>
  );
};
export default OauthButton;
