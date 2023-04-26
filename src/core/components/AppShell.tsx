import { useState } from 'react';
import {
    AppShell,
    Header,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Navbar,
    createStyles,
    Group,
    Stack,
    Grid,
} from '@mantine/core';

import LeaveNavbar from '../../components/leave-configuration/LeaveNavbar'
import MainNavbar from './MainNavbar';
import MainHeader from './MainHeader';
import LeaveHeader from '../../components/leave-configuration/LeaveHeader';

const useStyle = createStyles(() => ({
    'navbar': {
        position: "static",
        borderRight: "0px",
        backgroundColor: "green"
    },
    'nav-hamburger': {
        position: "absolute",
        top: "1rem",
        left: "1rem"
    },
    'wrapper': {
        border: "1px solid"
    },
    'grow1': {
        flexGrow: 1
    }
}))

function AppShellLayout() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const { classes } = useStyle();
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                    padding: "70px 0px 0px 0px"
                },
            }}
            navbarOffsetBreakpoint="sm"
            navbar={
                <Navbar
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ base: "100%", sm: 80 }}
                    className={classes.navbar}
                >
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}
                    >
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={theme.black}
                            className={classes['nav-hamburger']}
                        />
                    </MediaQuery>
                    <MainNavbar />
                </Navbar>
            }
            header={
                <MainHeader opened={opened} setOpened={setOpened} />
            }
            layout='alt'
        >
            <Grid gutter={0} h={"100%"}>
                <Grid.Col sm={2}>
                    <LeaveNavbar />
                </Grid.Col>
                <Grid.Col sm={10}>
                    <Stack h="100%">
                        <LeaveHeader />
                        <main className={classes.grow1}>main content</main>
                    </Stack>
                </Grid.Col>
            </Grid>
        </AppShell>
    );
}

export default AppShellLayout;