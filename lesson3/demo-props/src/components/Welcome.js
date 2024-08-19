function Welcome(props) {
    console.log(props);
    return (
        <>
            <h1>Hello: {props.name} {props.id}</h1>
        </>
    );
}

export default Welcome;