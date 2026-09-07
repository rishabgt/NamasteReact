import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Ooops an error has been encountered!!</h1>
            <h2>{error.status + " : " + error.statusText}</h2>
        </div>
    )
}

export default Error;