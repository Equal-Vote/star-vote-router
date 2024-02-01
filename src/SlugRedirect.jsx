import { useParams } from "react-router";
import { targetDomains } from "./App";

export default () => {
    const { slug } = useParams();

    window.location.href = `${targetDomains.old}/${slug}`;
    return <p>redirecting...</p>
}