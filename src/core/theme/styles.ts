const styles = {

    global: (props: any) => ({

        // body
        'body': {
            padding: 0,
	        margin: 0,
	        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            fontWeight: 'light',
            backgroundColor: 'background.primary',
            backgroundImage: 'url(https://kawsar.design/wp-content/uploads/2023/02/BG-Tx-1.svg)'
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

    })
}

export default styles