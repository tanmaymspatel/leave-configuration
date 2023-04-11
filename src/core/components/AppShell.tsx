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
} from '@mantine/core';
import MainNavbar from './MainNavbar';

const useStyle = createStyles(() => ({
    'nav-hamburger': {
        position: "absolute",
        top: "1rem",
        left: "1rem"
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
                },
            }}
            navbarOffsetBreakpoint="sm"
            navbar={
                <Navbar
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ base: "100%", sm: 80 }}
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
                <MediaQuery smallerThan="sm" styles={!opened ? { left: 0 } : {}}>
                    <Header height={{ base: 50, md: 70 }} p="md" >
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <MediaQuery largerThan="sm" styles={{ display: 'none' }}
                            >
                                <MediaQuery smallerThan="sm" styles={opened ? { display: 'none' } : { display: "block" }}>

                                    <Burger
                                        opened={opened}
                                        onClick={() => setOpened((o) => !o)}
                                        size="sm"
                                        color={theme.colors.gray[6]}
                                        mr="xl"
                                    />
                                </MediaQuery>
                            </MediaQuery>
                            <Text>Application header</Text>
                        </div>
                    </Header>
                </MediaQuery>
            }
            layout='alt'
        >
            <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
    );
}

export default AppShellLayout;