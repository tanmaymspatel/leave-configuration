import { Navbar, Group, Code, ScrollArea, createStyles, rem, Title, MediaQuery } from '@mantine/core';

import { LinksGroup } from './LinksGroup';
import { IconArrowBadgeLeft, IconArrowRight } from '@tabler/icons-react';

const mockdata = [
    {
        label: 'Leave',
        initiallyOpened: true,
        links: [
            { label: 'Dashboard', link: '/' },
            { label: 'My Leave Requests', link: '/' },
            { label: 'Leave Approvals', link: '/' },
            { label: 'Holiday List', link: '/' },
            { label: 'Work-Time Configuration', link: '/' },
            { label: 'Leave Configuration', link: '/' },
            { label: 'Policy Configuration', link: '/' },
        ],
    },
    {
        label: 'Attendance',
        initiallyOpened: false,
        links: [
            { label: 'Upcoming releases', link: '/' },
            { label: 'Previous releases', link: '/' },
            { label: 'Releases schedule', link: '/' },
        ],
    },
];

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
        position: "static",
        marginRight: 0,
        transition: "0.3s all",
        // [theme.fn.smallerThan('md')]: {
        // }
    },

    links: {
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },


}));
function LeaveNavbar() {
    const { classes } = useStyles();
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

    return (
        <Navbar height={"100%"} p="md" className={classes.navbar}>
            <Navbar.Section>
                <Title order={5}>PERSONNEL</Title>
            </Navbar.Section>

            <Navbar.Section grow className={classes.links} component={ScrollArea}>
                <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>

            <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
                <Navbar.Section>
                    <Group position='right'>
                        <IconArrowBadgeLeft size="40px" style={{ cursor: "pointer" }} />
                    </Group>
                </Navbar.Section>
            </MediaQuery>
            <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
                <label className="toggle-arrow" htmlFor="toggleLeaveSidebar">
                    <IconArrowRight size={"32px"} />
                </label>
            </MediaQuery>
        </Navbar>
    );
}


export default LeaveNavbar; 