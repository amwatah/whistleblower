import React from "react";
import whistleIcon from "@iconify/icons-mdi/whistle";
import { ActionIcon, Center, Stack } from "@mantine/core";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { CREATEPAGE } from "../../utils/routepaths";
interface CaseNotFoundProps {
  title: string;
}
function CaseNotFound({ title }: CaseNotFoundProps) {
  return (
    <div className=" m-4 flex animate-tada flex-col  items-center justify-center">
      <h5>
        NO CASES IN <span className=" uppercase">{title}</span>
      </h5>
      <p>Witnessed one ?</p>
      <Link href={CREATEPAGE}>
        <Icon icon={whistleIcon} className=" text-3xl " />
      </Link>
    </div>
  );
}

export default CaseNotFound;
