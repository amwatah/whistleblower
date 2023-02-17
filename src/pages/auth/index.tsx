import React, { useState } from "react";
import { useForm } from "@mantine/form";
import {
  Button,
  Group,
  NumberInput,
  PasswordInput,
  SegmentedControl,
  Select,
} from "@mantine/core";
import { CONTITUENCIES, COUNTIES, COUNTYNAMES } from "../../utils/datapoints";

function AuthPage() {
  const [authState, setAuthState] = useState<"login" | "register">("login");
  const regiterform = useForm({
    initialValues: {
      code: 0,
      password: "",
      county: "Nairobi",
      constituency: "Langata constituency",
      termsOfService: false,
    },

    validate: {
      code: (val) =>
        val.toString().length < 10 ? "Too short , must be 10 digits" : null,
      password: (val) =>
        val.toString().length < 10 ? "Too short , must be 10 digits" : null,
    },
  });
  const loginform = useForm({
    initialValues: {
      code: 0,
      password: "",
    },

    validate: {
      code: (val) =>
        val.toString().length < 10 ? "Too short , must be 10 digits" : null,
      password: (val) =>
        val.toString().length < 10 ? "Too short , must be 10 digits" : null,
    },
  });
  return (
    <div>
      {authState === "login" && (
        <div className="">
          <form onSubmit={loginform.onSubmit((values) => console.log(values))}>
            <NumberInput
              {...regiterform.getInputProps("code")}
              label="10 DIGIT SECRET CODE"
              placeholder="1234567890"
            />
            <PasswordInput
              {...regiterform.getInputProps("password")}
              label="10 DIGIT SECRET CODE"
              placeholder="1234567890"
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>
      )}
      {authState === "register" && (
        <div className="">
          <form onSubmit={loginform.onSubmit((values) => console.log(values))}>
            <NumberInput
              {...regiterform.getInputProps("code")}
              label="10 DIGIT SECRET CODE"
              placeholder="1234567890"
            />
            <Select
              {...regiterform.getInputProps("county")}
              label="YOUR COUNTY"
              placeholder="Pick one"
              searchable
              nothingFound="No options"
              data={COUNTYNAMES}
            />
            <Select
              {...regiterform.getInputProps("constituency")}
              label="YOUR CONTITUENCY"
              placeholder="Pick one"
              searchable
              nothingFound="No options"
              data={CONTITUENCIES}
            />
            <PasswordInput
              {...regiterform.getInputProps("password")}
              label="10 DIGIT SECRET CODE"
              placeholder="1234567890"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AuthPage;
