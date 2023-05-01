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
    Checkbox,
} from '@mantine/core';

import LeaveNavbar from '../../components/leave-configuration/LeaveNavbar'
import MainNavbar from './MainNavbar';
import MainHeader from './MainHeader';
import LeaveHeader from '../../components/leave-configuration/LeaveHeader';
import LeaveContainer from '../../components/leave-configuration/LeaveContainer';

const useStyle = createStyles((theme) => ({
    'navbar': {
        position: "static",
        borderRight: "0px",
    },
    'nav-hamburger': {
        position: "absolute",
        top: "1rem",
        left: "1rem",
        [theme.fn.largerThan('md')]: {
            display: "none",
        }
    },
    'wrapper': {
        border: "1px solid"
    },
    'main': {
        flexGrow: 1,
        padding: "1.5rem",
        height: "100%",
        overflowY: "auto",
        position: "relative"
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
                    padding: "70px 0px 0px 0px",
                    height: "100%"
                },
            }}
            h={"100%"}
            navbarOffsetBreakpoint="md"
            navbar={
                <Navbar
                    hiddenBreakpoint="md"
                    hidden={!opened}
                    width={{ base: "100%", md: 80 }}
                    className={classes.navbar}
                >
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        color={theme.black}
                        className={classes['nav-hamburger']}
                    />
                    <MainNavbar />
                </Navbar>
            }
            header={
                <MainHeader opened={opened} setOpened={setOpened} />
            }
            layout='alt'
        >
            <Grid gutter={0} h={"100%"} grow>
                <input type="checkbox" id="toggleLeaveSidebar" />
                <Grid.Col md={3} className="leave-navbar">
                    <LeaveNavbar />
                </Grid.Col>
                <Grid.Col md={9} h={"100%"}>
                    <Stack h="100%">
                        <LeaveHeader />
                        <main className={classes.main}>
                            <LeaveContainer />
                        </main>
                    </Stack>
                </Grid.Col>
            </Grid>
        </AppShell>
    );
}

export default AppShellLayout;