/*
============
Write out the component itself
============
*/
const Header = (props) => {
    return (
        <header>
            <h1 style={classStyles}>{props.title}</h1>
        </header>
    )
}

/*
============
Write out default Props in case something fails
============
*/
Header.defaultProps = {
    title: 'Task Tracker'
}

/*
============
Write out specific styles in case of dynamic styling
============
*/
const classStyles = {
    color: 'red'
}

export default Header
