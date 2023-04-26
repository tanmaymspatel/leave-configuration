import { Anchor, Breadcrumbs, createStyles } from "@mantine/core";

const items = [
    { title: 'Personnel', href: '#' },
    { title: 'Leave', href: '#' },
    { title: 'Leave Configuration', href: '#' },
].map((item, index) => (
    <Anchor href={item.href} key={index}>
        {item.title}
    </Anchor>
));

const useStyle = createStyles((theme) => ({
    separator: {
        color: theme.colors.gray[6],
        fontWeight: 600,
        fontSize: "12px"
    },
    breadcrumb: {
        color: theme.colors.gray[6],
        fontWeight: 600,
        fontSize: "12px"
    }
}))
function BreadCrumbs() {
    const { classes } = useStyle()
    return (
        <>
            <Breadcrumbs classNames={{
                breadcrumb: classes.breadcrumb,
                separator: classes.separator
            }}
                separator=">"
                mt="xs"
            >{items}</Breadcrumbs>
        </>
    )
}

export default BreadCrumbs;
