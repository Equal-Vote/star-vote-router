import { useParams } from "react-router";

export default () => {
    const { slug } = useParams();

    window.location.href = `https://star.vote/${slug}`;
    return <p>redirecting...</p>
}