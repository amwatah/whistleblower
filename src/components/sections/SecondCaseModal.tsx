import { Button, Center, Loader, Stack, Textarea } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useState } from "react";
import { GlobalStore } from "../../stores";
import { api } from "../../utils/api";

interface SecondCaseModalProps {
  case_id: string;
}
function SecondCaseModal({ case_id }: SecondCaseModalProps) {
  const [allegation, setAllegation] = useState("");
  const secondCase = api.CASES_ENDPOINT.secondCase.useMutation();
  return (
    <Stack>
      <Textarea
        value={allegation}
        onChange={(e) => setAllegation(e.target.value)}
        autosize
        minRows={5}
      />
      <Button
        onClick={() => {
          secondCase.mutate({
            caseId: case_id,
            description: allegation,
          });
          showNotification({
            message: "Your feedback has been added, Thank you",
          });
        }}
      >
        SUBMIT
      </Button>
      {secondCase.isLoading && (
        <Center>
          <Loader size="lg" variant="bars" />
        </Center>
      )}
    </Stack>
  );
}

export default SecondCaseModal;
