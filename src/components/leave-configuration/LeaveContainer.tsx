import { ActionIcon, Button, Card, Grid, Group, Menu, Switch, Text, createStyles, useMantineTheme } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import LeaveData from "./leaveData";
import { IconArrowRight } from "@tabler/icons-react";

const useStyle = createStyles((theme) => ({
    'card': {
        position: "relative",
    },
    'menu': {
        position: "absolute",
        right: "0px",
        top: "5px"
    },
    'leave-btn': {
        color: theme.black,
        backgroundColor: "#ff764c14",
        borderColor: "#FF764C",
        fontSize: theme.fontSizes.xs,
        height: "1.5rem"
    },

}))

function LeaveContainer() {
    const theme = useMantineTheme();
    const { classes } = useStyle();

    const leaves = LeaveData.map((leave: any) => (
        <Grid.Col sm={6} key={leave?.id}>
            <Card className={classes.card} withBorder shadow="sm" radius="md" py="1rem" px="1.5rem">
                <Group position="right" className={classes.menu}>
                    <Menu withinPortal position="bottom-end" shadow="sm">
                        <Menu.Target>
                            <ActionIcon>
                                <IconDotsVertical size="1rem" />
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item>Download zip</Menu.Item>
                            <Menu.Item>Preview all</Menu.Item>
                            <Menu.Item color="red">
                                Delete all
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
                <Card.Section withBorder inheritPadding py="sm" style={{ borderTop: "0px" }}>
                    <Group>
                        <Group spacing="4px">
                            <Text weight={700}>{leave?.name}</Text>
                            <Text weight={500} color="gray">|</Text>
                            <Text weight={700}>{leave?.duration}</Text>
                        </Group>
                        <Button variant="light" color="violet" size="xs" radius="sm" h={"1.5rem"}>
                            <Text weight={700}>{leave?.tag}</Text>
                        </Button>
                    </Group>
                    <Text color={theme.colors.gray[5]} size="xs" pt="8px" pb="4px">L{leave?.description}</Text>
                    <Group spacing="4px" py="4px">
                        <Group spacing="4px">
                            <Text size="xs" color={theme.colors.gray[6]}>Leave Code:</Text>
                            <Text size="xs" weight={600}>{leave?.code}</Text>
                        </Group>
                        <Text size="xs" weight={500} color="gray">|</Text>
                        <Group spacing="4px">
                            <Text size="xs" color={theme.colors.gray[6]}>Leave Type:</Text>
                            <Text size="xs" weight={600}>{leave?.type}</Text>
                        </Group>
                        <Text size="xs" weight={500} color="gray">|</Text>
                        <Group spacing="4px">
                            <Text size="xs" color={theme.colors.gray[6]}>Applicable To:</Text>
                            <Text size="xs" weight={600} color="blue">VIEW</Text>
                        </Group>
                    </Group>
                    <Text size="xs" pt="4px" pb="8px" weight={600}>Leave can not be Clubbed with:</Text>
                    {
                        leave.cantClubWith
                            ? <Group>
                                {
                                    leave?.cantClubWith?.map((item: any) => (
                                        <Button className={classes["leave-btn"]} size={"xs"} variant="outline" color="orange">{item}</Button>
                                    ))
                                }
                            </Group>
                            : <Text>None</Text>
                    }
                </Card.Section>
                <Card.Section inheritPadding py="sm">
                    <Group position="apart">
                        <Group spacing={"4px"}>
                            <Group spacing={"4px"}>
                                <Text size={"sm"} color={theme.colors.gray[6]}>Updated:</Text>
                                <Text size={"sm"}>{leave?.updatedBy}</Text>
                            </Group>
                            <Text size={"sm"} color="gray">|</Text>
                            <Text size={"sm"}>{leave?.date}</Text>
                        </Group>
                        <Switch
                            labelPosition="left"
                            label="ACTIVE"
                            style={{ fontWeight: 500 }}
                            checked
                            size="xs"
                        />
                    </Group>
                </Card.Section>
            </Card>
        </Grid.Col>
    ))
    return (
        <Grid h={"100%"}>

            {leaves}
        </Grid >
    )
};

export default LeaveContainer;
