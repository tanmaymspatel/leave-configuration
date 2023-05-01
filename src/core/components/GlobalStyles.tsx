import '../../assets/icons/style.css';
import { Global } from '@mantine/core';
/**
 * @returns Global styles for the application
 */
function GlobalStyles() {
    return (
        <Global
            styles={() => ({
                '*, *::before, *::after': {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                },
                'html,body,#root,.app, .mantine-AppShell-body': {
                    height: "100%"
                },
                'html,body': {
                    overflow: "hidden"
                },
                '.flex-grow-1': {
                    flexGrow: 1
                },
                '.h-100': {
                    height: "100%"
                },
                '.w-100': {
                    width: "100%"
                },
            })}
        />
    )
};

export default GlobalStyles;
