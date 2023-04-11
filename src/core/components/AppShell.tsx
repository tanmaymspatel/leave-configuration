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
import MainHeader from './MainHeader';

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
                <MainHeader opened={opened} setOpened={setOpened} />
            }
            layout='alt'
        >
            <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
    );
}

export default AppShellLayout;