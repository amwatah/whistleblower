import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Center, PaperProps } from "@mantine/core";
import { Loader, NumberInput, Select } from "@mantine/core";
import {
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import { COUNTYNAMES, findConstituencyByName } from "../../utils/datapoints";
import { api } from "../../utils/api";
import { showNotification } from "@mantine/notifications";
import { GlobalStore } from "../../stores";
import { useRouter } from "next/router";
import { HOMEPAGE } from "../../utils/routepaths";

export default function AuthenticationForm(props: PaperProps) {
  const register = api.FLAGGERS_ENDPOINT.register.useMutation();
  const login = api.FLAGGERS_ENDPOINT.login.useMutation();
  const [type, toggle] = useToggle(["login", "register"]);
  const router = useRouter();
  const form = useForm({
    initialValues: {
      code: 0,
      county: "",
      constituency: "",
      password: "",
      terms: true,
    },

    validate: {
      code: (val) =>
        val.toString().length <= 9
          ? "Too short must be atleast 10 characters"
          : null,
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });
  function handleAuth() {
    if (type === "register") {
      register.mutate({
        code: form.values.code,
        county: form.values.county,
        constituency: form.values.constituency,
        password: form.values.password,
      });

      if (register.error) {
        showNotification({
          title: "ERROR",
          message: register.error.message,
        });
      }
      if (register.isSuccess && register.data) {
        showNotification({
          title: "Account created  , login",
          message: register.data.code.toString(),
        });
      }
    }
    if (type === "login") {
      login.mutate({
        code: form.values.code,
        password: form.values.password,
      });
      if (login.data?.code) {
        showNotification({
          title: "Welcome back",
          message: login.data.code.toString(),
        });
        GlobalStore.userCode = login.data.code;
        GlobalStore.userConstituency = login.data.constituency;
        GlobalStore.userCounty = login.data.county;
        GlobalStore.userId = login.data.id;
        void router.push(HOMEPAGE);
      } else {
        showNotification({
          title: "Invalid Credetials",
          message: "Try again",
        });
      }
    }
  }

  if (register.isLoading || login.isLoading) {
    return (
      <div className=" flex h-full w-full flex-col items-center justify-center ">
        <Loader variant="bars" size="lg" />
      </div>
    );
  }
  return (
    <Center className=" container mx-auto h-screen w-screen">
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" weight={500}>
          Welcome to Whistle-Kenya, {type}
        </Text>

        <Divider
          label="make sure to save your details securely"
          labelPosition="center"
          my="lg"
        />

        <form
          onSubmit={form.onSubmit(() => {
            handleAuth();
          })}
        >
          <Stack>
            <NumberInput
              required
              label="Your 10 digit secret code"
              placeholder="1234567890"
              {...form.getInputProps("code")}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              {...form.getInputProps("password")}
            />
            {type === "register" && (
              <>
                <Select
                  label="Your County"
                  placeholder="Nairobi County"
                  searchable
                  {...form.getInputProps("county")}
                  data={COUNTYNAMES}
                />
                {form.values.county.length > 7 && (
                  <Select
                    label="Your Constituency"
                    placeholder="Langata Constituency"
                    searchable
                    {...form.getInputProps("constituency")}
                    data={findConstituencyByName(form.values.county) || []}
                  />
                )}
              </>
            )}

            {type === "register" && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue("terms", event.currentTarget.checked)
                }
              />
            )}
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit">{upperFirst(type)}</Button>
          </Group>
        </form>
      </Paper>
    </Center>
  );
}
