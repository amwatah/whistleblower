/* eslint-disable @next/next/no-img-element */
import { Group, Paper, Rating } from "@mantine/core";
import type { Cases } from "@prisma/client";
import { useRouter } from "next/router";
import React from "react";
import { STATSPAGE } from "../../utils/routepaths";

interface CaseCardMiniProps {
  id: string;
  title: string;
  county: string;
  constituency: string;
  case_type: string;
  describtion: string;
  image: string;
  seconders: string[] | null;
  status: string;
  alleged: string;
  alleged_Role: string;
  flaggerId: string;
  validity: number;
}
function CaseCardMini(caseItem: CaseCardMiniProps) {
  const router = useRouter();
  return (
    <Paper onClick={() => void router.push(`${STATSPAGE}/${caseItem.id}`)}>
      <div className=" m-2 flex w-full flex-col leading-[5px]  shadow-2xl">
        <img
          src={caseItem.image}
          alt="image"
          className="  h-52 w-full object-cover"
        />

        <Group position="apart" className=" px-2">
          <p className=" text-[12px] font-bold">{caseItem.title}</p>
        </Group>
        <Rating defaultValue={caseItem.validity} readOnly />
        <Group position="apart" className=" px-2">
          <p className="text-[12px]">{caseItem.alleged}</p>
          <p className="text-[12px]">{caseItem.alleged_Role}</p>
        </Group>
        <Group position="apart" className=" px-2">
          <p className="text-[12px]">{caseItem.county}</p>
          <p className="text-[12px]"> {caseItem.constituency}</p>
        </Group>
      </div>
    </Paper>
  );
}

export default CaseCardMini;
