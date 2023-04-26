import { Navbar, Group, Code, ScrollArea, createStyles, rem, Title } from '@mantine/core';

import { LinksGroup } from './LinksGroup';

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

            <Navbar.Section>
                leave-footer
            </Navbar.Section>
        </Navbar>
    );
}


export default LeaveNavbar; 