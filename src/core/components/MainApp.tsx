import { Flex, Navbar, Stack, createStyles, } from "@mantine/core"
import MainNavbar from "./MainNavbar";

const useStyle = createStyles(() => ({
    header: {
        height: "50px"
    }
}))

function MainApp() {
    const { classes } = useStyle();
    return (
        <Flex className="h-100" direction={{ base: 'column', sm: 'row' }}>
            <Navbar
                width={{ base: 80 }}
            >
                <MainNavbar />
            </Navbar>
            <main className="h-100 flex-grow-1">
                <Stack>
                    <header className={classes.header}>header</header>
                    <main>main</main>
                </Stack>
            </main>
        </Flex>
    )
}

export default MainApp
