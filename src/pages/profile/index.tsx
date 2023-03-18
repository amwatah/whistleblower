/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import { Avatar, Button } from "@mantine/core";
import React from "react";
import { GlobalStore } from "../../stores";

function ProfilePage() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        style={{
          fontFamily: "Montserrat",
        }}
        className=" flex h-screen items-center justify-center  font-medium"
      >
        <section className="mx-auto  w-fit rounded-2xl bg-[#20354b] px-8 py-6 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">
              {GlobalStore.userCode ? (
                <p className=" text-green-500">ACTIVE</p>
              ) : (
                <p className=" text-red-500">INACTIVE</p>
              )}
            </span>
            <span className="text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </span>
          </div>
          <div className="mx-auto mt-6 w-fit">
            <Avatar
              size="xl"
              className="w-28 rounded-full "
              alt="profile picture"
            />
          </div>

          <div className="mt-8 ">
            <h2 className="text-2xl font-bold tracking-wide text-white">
              SECRET CODE <br /> {GlobalStore.userCode}
            </h2>
          </div>
          <p className="mt-2.5 font-semibold text-emerald-400">
            COUNTY : <p className="">{GlobalStore.userCounty}</p>
          </p>
          <p className="mt-2.5 font-semibold text-emerald-400">
            CONSTITUENCY : <p className="">{GlobalStore.userCounty}</p>
          </p>

          <Button
            fullWidth
            onClick={() => {
              GlobalStore.userCode = undefined;
              GlobalStore.userConstituency = undefined;
              GlobalStore.userCounty = undefined;
              GlobalStore.userId = undefined;
            }}
          >
            LOGOUT
          </Button>

          <div className="mt-3 text-sm text-white"></div>
        </section>
      </section>
    </div>
  );
}

export default ProfilePage;
