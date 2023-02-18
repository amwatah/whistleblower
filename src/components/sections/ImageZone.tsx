import { Group, Text, useMantineTheme } from "@mantine/core";

import type { DropzoneProps } from "@mantine/dropzone";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import cloudUpload from "@iconify/icons-mdi/cloud-upload";
import closeOutline from "@iconify/icons-mdi/close-outline";
import imageIcon from "@iconify/icons-mdi/image";
import { Icon } from "@iconify/react";

export function ImageZone(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();
  return (
    <Dropzone
      onDrop={(files) => console.log("accepted files", files)}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group
        position="center"
        spacing="xl"
        style={{ minHeight: 220, pointerEvents: "none" }}
      >
        <Dropzone.Accept>
          <Icon icon={cloudUpload} />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <Icon icon={closeOutline} />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <Icon icon={imageIcon} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag any images that may be relevant to your case here.
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}
