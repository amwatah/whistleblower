import { Button, Center, Stack } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useSnapshot } from "valtio";
import Reportform from "../../components/sections/Reportform";
import { GlobalStore } from "../../stores";
import { AUTHPAGE } from "../../utils/routepaths";

function CreatePage() {
  const snapshot = useSnapshot(GlobalStore);
  return (
    <div>
      <div className="">
        {snapshot.userCode && (
          <>
            <Reportform />
          </>
        )}
        {snapshot.userCode === undefined && (
          <Center className="  h-screen w-screen ">
            <Stack className=" text-center">
              <p>Flagging Cases is limited to members with accounts only</p>
              <Link href={AUTHPAGE}>
                <Button>LOGIN</Button>
              </Link>
            </Stack>
          </Center>
        )}
      </div>
    </div>
  );
}

export default CreatePage;
