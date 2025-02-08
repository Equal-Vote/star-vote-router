import { useParams } from "react-router";
import { targetDomains } from "./App";


{/* this slug currently isn't used since github pages doesn't support it, instead 404.html is hacked to account for this */ }
export default () => {
    const { slug } = useParams();

    window.location.href = `${targetDomains.old}/${slug}`;
    return <p>redirecting...</p>
}