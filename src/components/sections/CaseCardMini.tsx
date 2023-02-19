/* eslint-disable @next/next/no-img-element */
import { Center, Group, Rating, Stack } from "@mantine/core";
import type { Cases } from "@prisma/client";
import React from "react";

function CaseCardMini(caseItem: Cases) {
  return (
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
  );
}

export default CaseCardMini;
