export default function Footer() {

    const footerStyle = {
        color: 'rgb(107, 114, 128)',
        fontSize: '.75rem',
        lineHeight: '1rem', // Corrected 'lineheight' to 'lineHeight'
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace', // Corrected 'fontfamily' to 'fontFamily'
        display: 'flex',
        textAlign: 'center', // Corrected 'textalign' to 'textAlign'
        marginTop: '0.75rem', // Corrected 'margin-top' to 'marginTop'
        paddingTop: '0.75rem', // Corrected 'padding-top' to 'paddingTop'
        paddingBottom: '1.5rem' // Corrected 'padding-bottom' to 'paddingBottom'
      };
      


    return (
        <footer style={footerStyle}>
            <div>
                Made by Benjamin
            </div>
        </footer>
    )
}