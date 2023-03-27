import { Carousel } from "@mantine/carousel";

import { Loader, SegmentedControl } from "@mantine/core";
import React, { useState } from "react";
import CaseCardMini from "../../components/sections/CaseCardMini";
import CaseNotFound from "../../components/sections/CaseNotFound";
import { api } from "../../utils/api";
import {
  corruptionCases,
  COUNTYNAMES,
  positions,
} from "../../utils/datapoints";

function StatsPage() {
  const allCases = api.CASES_ENDPOINT.getAllCases.useQuery();
  const [selectedCounty, setSelectedCounty] = useState("Nairobi County");
  const [selectedcaseType, setselectedcaseType] = useState("Embezzlement");
  const [selectedPosition, setSelectedPosition] = useState("MP");

  if (allCases.isLoading) {
    return (
      <div className=" flex h-full w-full flex-col items-center justify-center ">
        <Loader variant="bars" size="lg" />
      </div>
    );
  }
  return (
    <div>
      {/* counties */}
      <section className="Counties">
        <div className="   ml-0 w-[90vw] overflow-x-scroll ">
          <SegmentedControl
            value={selectedCounty}
            onChange={setSelectedCounty}
            data={COUNTYNAMES}
            transitionDuration={500}
            transitionTimingFunction="linear"
          />
        </div>
        {/* case types  */}
        <section className="">
          <Carousel
            slideSize="30%"
            breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
            slideGap="xs"
            controlSize={30}
            loop
            withIndicators
            align="start"
          >
            {allCases.data
              ?.filter((caseitem) => caseitem.county === selectedCounty)
              .map((singlecase) => (
                <Carousel.Slide key={singlecase.id} className=" h-full">
                  <CaseCardMini {...singlecase} />
                </Carousel.Slide>
              ))}
          </Carousel>

          {allCases.data?.filter(
            (caseitem) => caseitem.county === selectedCounty
          ).length === 0 && (
            <>
              <CaseNotFound title={selectedCounty} />
            </>
          )}
        </section>
      </section>
      {/* case types */}
      <section className="Counties">
        <div className="   m-3 ml-0 w-[90vw] overflow-x-scroll ">
          <SegmentedControl
            value={selectedcaseType}
            onChange={setselectedcaseType}
            data={corruptionCases.map((caseitem) => caseitem.title)}
            transitionDuration={500}
            transitionTimingFunction="linear"
          />
        </div>
        <section className="">
          <Carousel
            slideSize="30%"
            breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
            slideGap="xs"
            controlSize={30}
            loop
            withIndicators
            align="start"
          >
            {allCases.data
              ?.filter((caseitem) => caseitem.case_type === selectedcaseType)
              .map((singlecase) => (
                <Carousel.Slide key={singlecase.id}>
                  <CaseCardMini {...singlecase} />
                </Carousel.Slide>
              ))}
          </Carousel>

          {allCases.data?.filter(
            (caseitem) => caseitem.case_type === selectedcaseType
          ).length === 0 && (
            <>
              <CaseNotFound title={selectedcaseType} />
            </>
          )}
        </section>
      </section>
      {/* positions */}
      <section className="Counties">
        <div className="   ml-0 w-[90vw] overflow-x-scroll ">
          <SegmentedControl
            value={selectedPosition}
            onChange={setSelectedPosition}
            data={positions}
            transitionDuration={500}
            transitionTimingFunction="linear"
          />
        </div>

        <section className="">
          <Carousel
            slideSize="30%"
            breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
            slideGap="xs"
            controlSize={30}
            loop
            withIndicators
            align="start"
          >
            {allCases.data
              ?.filter((caseitem) => caseitem.alleged_Role === selectedPosition)
              .map((singlecase) => (
                <Carousel.Slide key={singlecase.id}>
                  <CaseCardMini {...singlecase} />
                </Carousel.Slide>
              ))}
          </Carousel>

          {allCases.data?.filter(
            (caseitem) => caseitem.alleged_Role === selectedPosition
          ).length === 0 && (
            <>
              <CaseNotFound title={selectedPosition} />
            </>
          )}
        </section>
      </section>
    </div>
  );
}

export default StatsPage;
