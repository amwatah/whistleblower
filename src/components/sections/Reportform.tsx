import {
  Button,
  FileInput,
  Loader,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { openConfirmModal } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { GlobalStore } from "../../stores";
import cameraIcon from "@iconify/icons-mdi/camera";
import { api } from "../../utils/api";
import {
  corruptionCases,
  COUNTYNAMES,
  findConstituencyByName,
  positions,
} from "../../utils/datapoints";
import ConsentDetails from "./ConsentDetails";
import { Icon } from "@iconify/react";

function Reportform() {
  const flagCase = api.CASES_ENDPOINT.createCase.useMutation();
  const caseform = useForm({
    initialValues: {
      case_title: "",
      case_describtion: "",
      case_type: "",
      case_county: "",
      case_constituency: "",
      alleged_name: "",
      alleged_position: "",
      case_image_url: "",
    },
    validate: {
      case_title: (val) => (val.length < 5 ? "Too Short" : null),
      case_describtion: (val) =>
        val.length < 20 ? "Too Short , give more details" : null,
      alleged_name: (val) => (val.length < 5 ? "Enter full names" : null),
      case_image_url: (val) =>
        val.length < 5 ? "Too Short , give more details" : null,
    },
  });
  function handleCase() {
    openConfirmModal({
      children: (
        <>
          <p>
            We encourage you to report any suspected corruption that you have
            witnessed or become aware of. However, we ask that you be truthful
            and accurate in your reporting. False or misleading information can
            damage the reputation of innocent individuals and organizations and
            undermine the credibility of the reporting system.
          </p>
        </>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onConfirm: () =>
        flagCase.mutate({
          county: caseform.values.case_county,
          constituency: caseform.values.case_constituency,
          title: caseform.values.case_title.toUpperCase(),
          case_type: caseform.values.case_type,
          describtion: caseform.values.case_describtion,
          alleged: caseform.values.alleged_name.toUpperCase(),
          alleged_role: caseform.values.alleged_position,
          flagged_by: GlobalStore.userId || crypto.randomUUID(),
          image_url: caseform.values.case_image_url || "default",
        }),
      onCancel: () => console.log("Confirmed"),
      centered: true,
    });
    if (flagCase.data) {
      showNotification({
        title: "SUCESS",
        message: "Your case has been added",
      });
    }
    if (flagCase.error) {
      showNotification({
        title: "SUCESS",
        message: flagCase.error.message,
      });
    }
  }
  if (flagCase.isLoading) {
    return (
      <div className=" flex h-full w-full flex-col items-center justify-center ">
        <Loader variant="bars" size="lg" />
      </div>
    );
  }

  return (
    <Stack spacing="xs" className="  m-3 mx-auto sm:w-[50vw] ">
      <form
        onSubmit={caseform.onSubmit(() => {
          handleCase();
        })}
      >
        <Button
          fullWidth
          onClick={() =>
            openConfirmModal({
              children: <ConsentDetails />,
              labels: { confirm: "Confirm", cancel: "Cancel" },
              onCancel: () => console.log("Cancel"),
              onConfirm: () => console.log("Confirmed"),
              centered: true,
            })
          }
        >
          DISCLAIMER
        </Button>

        <TextInput
          label="Allegation title"
          placeholder="title"
          {...caseform.getInputProps("case_title")}
        />
        <TextInput
          label="Alleged Name"
          placeholder="Alleged Name"
          {...caseform.getInputProps("alleged_name")}
        />
        <Select
          label="Alleged Position"
          placeholder="Select one"
          {...caseform.getInputProps("alleged_position")}
          data={positions}
        />

        <Select
          label="Corruption Case type"
          data={corruptionCases.map((corruptionCase) => corruptionCase.title)}
          {...caseform.getInputProps("case_type")}
        />
        <Select
          label=" County  of incidence"
          placeholder="Nairobi County"
          searchable
          {...caseform.getInputProps("case_county")}
          data={COUNTYNAMES}
        />
        {caseform.values.case_county.length > 3 && (
          <Select
            label="Constituency of incedence"
            placeholder="Langata Constituency"
            searchable
            {...caseform.getInputProps("case_constituency")}
            data={findConstituencyByName(caseform.values.case_county) || []}
          />
        )}
        <TextInput
          label="Useful links"
          placeholder="eg.video evidence"
          {...caseform.getInputProps("case_image_url")}
        />

        <Textarea
          label="Detailed describtion"
          autosize
          minRows={7}
          placeholder="Be as detailed as possible .Revelance is based on info provided"
          {...caseform.getInputProps("case_describtion")}
        />
        <FileInput
          placeholder="Upload Image"
          size="xl"
          className=" my-2"
          icon={<Icon icon={cameraIcon} className=" text-4xl" />}
        />

        <Button type="submit" fullWidth>
          FLAG SCANDAL
        </Button>
      </form>
    </Stack>
  );
}

export default Reportform;
