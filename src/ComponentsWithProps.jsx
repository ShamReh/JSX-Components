import PropTypes from 'prop-types';

// const ComponentsWithProps = (props) => {
//     return (
//         <>
// <h1>I and my followers are props: {props.Header}</h1>
// <p>We shall use {props.content}</p>
// <p>I am number: {props.number}</p>
// <p>I am just chilling here {props.nonexistent}</p>
//         </>
//     );
// }

const ComponentsWithProps = ({Header,content,number,nonexistent}) => {
    return (
        <>
<h1>I and my followers are props: {Header}</h1>
<p>We shall use {content}</p>
<p>I am number: {number}</p>
<p>I am just chilling here {nonexistent}</p>
        </>
    );
}

ComponentsWithProps.propTypes={
    Header:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    number:PropTypes.number.isRequired,
    nonexistent:PropTypes.string.isRequired,
};

export default ComponentsWithProps;