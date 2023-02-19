/* eslint-disable @next/next/no-img-element */
import { Group, Loader, Rating } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";
import { api } from "../../utils/api";

function CaseInfoPage() {
  const router = useRouter();
  const { caseinfo } = router.query;
  const { data: caseItem, isLoading } = api.CASES_ENDPOINT.getCaseById.useQuery(
    {
      case_id: caseinfo as string,
    }
  );

  if (isLoading) {
    return (
      <div className=" flex h-screen w-screen flex-col items-center justify-center ">
        <Loader variant="bars" size="lg" />
      </div>
    );
  }
  return (
    <>
      {caseItem && (
        <>
          <div>
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
          </div>
        </>
      )}
      {!caseItem && <p className="">404</p>}
    </>
  );
}

export default CaseInfoPage;
