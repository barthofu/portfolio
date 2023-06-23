const styles = {

    global: (props: any) => ({

        // html
        'html': {
            scrollBehavior: 'smooth',
        },

        // body
        'body': {
            padding: 0,
	        margin: 0,
	        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            fontWeight: 'light',
            backgroundColor: 'background.primary',
            backgroundImage: 'url(https://kawsar.design/wp-content/uploads/2023/02/BG-Tx-1.svg)',
        },

        // resets
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
        
        'a': {
            color: 'inherit',
            textDecoration: 'none',
        },

        // scrollbar

        '::-webkit-scrollbar': {
            width: '5px'
        },
        '::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            background: 'background.tertiary',
        },
        '::-webkit-scrollbar-track': {
            background: 'rgba(0, 0, 0, 0)'
        }

    })
}

export default styles