import { ActionIcon, Button, Grid, Group, Image, Stack, Text, TextInput, Title } from "@mantine/core";

import { IconFilter, IconSearch } from "@tabler/icons-react";
import BreadCrumbs from "../../shared/components/ui/BreadCrumbs";

function LeaveHeader() {
    return (
        <Grid p="sm" style={{ backgroundColor: "white" }} align="center">
            <Grid.Col sm={6}>
                <Stack spacing="0">
                    <BreadCrumbs />
                    <Title order={2}>Leave Configurations</Title>
                </Stack>
            </Grid.Col>
            <Grid.Col sm={6}>
                <Group position="right">
                    <TextInput placeholder="Search" icon={<IconSearch size={"20px"} color="black" />} />
                    <ActionIcon variant="outline" size="lg">
                        <IconFilter size={"16px"} />
                    </ActionIcon>
                    <Button variant="outline" color="gray" radius="sm" uppercase>
                        Leave Clubbing
                    </Button>
                    <Button radius="sm" uppercase>
                        <Text mr="sm">+</Text>
                        <Text> Custom Leave</Text>
                    </Button>
                </Group>
            </Grid.Col>
        </Grid>
    )
}

export default LeaveHeader;
