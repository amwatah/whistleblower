/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  Badge,
  Button,
  Group,
  Loader,
  Rating,
  Text,
} from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";
import whistleIcon from "@iconify/icons-mdi/whistle";
import { api } from "../../utils/api";
import { Icon } from "@iconify/react";
import { openModal } from "@mantine/modals";
import SecondCaseModal from "../../components/sections/SecondCaseModal";
import stringSimilarity from "string-similarity";
import { GlobalStore } from "../../stores";

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
                className="  h-52 w-full object-cover sm:h-[50vh]"
              />

              <Group position="apart" className=" px-2">
                <p className=" text-[12px] font-bold">{caseItem.title}</p>
              </Group>
              <Rating
                defaultValue={
                  caseItem.seconders.length >= 5
                    ? 5
                    : caseItem.seconders.length === 4
                    ? 4
                    : caseItem.seconders.length === 3
                    ? 5
                    : caseItem.seconders.length === 2
                    ? 2
                    : caseItem.seconders.length === 1
                    ? 1
                    : 0
                }
                readOnly
              />
              <Group position="apart" className=" px-2">
                <p className="text-[12px]">{caseItem.alleged}</p>
                <p className="text-[12px]">{caseItem.alleged_Role}</p>
              </Group>
              <Group position="apart" className=" px-2">
                <p className="text-[12px]">{caseItem.county}</p>
                <p className="text-[12px]"> {caseItem.constituency}</p>
              </Group>
              <Accordion transitionDuration={2000}>
                <Accordion.Item value="primary">
                  <Accordion.Control>
                    <Text color="red" className=" font-bold">
                      PRIMARY WHISTLEBLOWER
                    </Text>
                  </Accordion.Control>
                  <Accordion.Panel></Accordion.Panel>
                  {caseItem.flaggerId == GlobalStore.userId ||
                  caseItem.seconders.includes(GlobalStore.userId!) ? (
                    caseItem.describtion
                  ) : (
                    <p className="">
                      Descriptions can only be seen by Flaggers or Seconders
                    </p>
                  )}
                </Accordion.Item>
                {caseItem.seconders.length > 0 && (
                  <Accordion.Item value="best">
                    <Accordion.Control>
                      <Text color="green" className=" font-bold">
                        WHISTLEBLOWERS : AI BEST MATCH :{" "}
                        <Badge>
                          {stringSimilarity.findBestMatch(
                            caseItem.describtion,
                            caseItem.seconders
                          ).bestMatch.rating * 100}
                          % Match
                        </Badge>
                      </Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      {
                        stringSimilarity.findBestMatch(
                          caseItem.describtion,
                          caseItem.seconders
                        ).bestMatch.target
                      }
                    </Accordion.Panel>
                  </Accordion.Item>
                )}

                {caseItem.seconders?.map((description, index) => (
                  <Accordion.Item value={index.toString()} key={index}>
                    <Accordion.Control>
                      <Text className=" font-bold">
                        ANONYMOUS WHISTLEBLOWER : {index + 1} AI SCORE :{" "}
                        <Badge>
                          {stringSimilarity.compareTwoStrings(
                            caseItem.describtion,
                            description
                          ) * 100}
                          %
                        </Badge>
                      </Text>
                    </Accordion.Control>
                    <Accordion.Panel>{description}</Accordion.Panel>
                  </Accordion.Item>
                ))}

                <Accordion.Item value="tip">
                  <Accordion.Control>JOIN THE WHISTLEBLOWERS</Accordion.Control>
                  <Accordion.Panel>
                    <div className="">
                      <p>
                        False information may degrade the reputation of
                        individual , be sure to be truthful
                      </p>
                      <Group position="center">
                        <Button
                          onClick={() => {
                            openModal({
                              title: "BE AS DETAILED AS POSSIBLE",
                              children: (
                                <SecondCaseModal case_id={caseItem.id} />
                              ),
                            });
                          }}
                          rightIcon={
                            <Icon icon={whistleIcon} className=" text-3xl " />
                          }
                        >
                          SECOND THE CASE
                        </Button>
                      </Group>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </>
      )}
      {!caseItem && <p className="">404</p>}
    </>
  );
}

export default CaseInfoPage;
