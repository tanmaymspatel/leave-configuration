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
                'html,body,#root,.app': {
                    height: "100%"
                },
                'html,body': {
                    overflow: "hidden"
                }
            })}
        />
    )
};

export default GlobalStyles;
