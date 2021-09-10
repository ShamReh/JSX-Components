import Footer from './Footer';
import ComponentsWithProps from './ComponentsWithProps';

const MyComponent = () => {

    return (
        <>
            <h1>Hello World</h1>
            <ComponentsWithProps Header= "Do you see me" content= "JSX" number={1} nonexistent= "Not!"/>
            <Footer />
        </>
    );
}

export default MyComponent;