import { Link, useParams } from "react-router-dom";
import backIcon from "../assets/images/back.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingDetail from "../components/LoadingDetail";
import Error from "../components/Error";

function PostDetailPage() {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://8234966059dc0e8c.mokky.dev/post-pop${id}`);
                setPost(response.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, [id] );

    if (isError) {
        return <Error />;
    }

     return(
        <section class="mobile-block">
            <Link to="/" class="back-button">
                <div class="container">
                    <img src={backIcon} alt="back" />
                    Назад
                </div>
            </Link>
            {isLoading ? (<LoadingDetail />) : (
                <div class="container">
                    <div class="post-detail-block">
                        <h3 class="news-card__title">{post.title }</h3>
                        <span class="news-card__date">{post.date}</span>
                        <p class="description">
                            {post.description}
                        </p>
                        <img src={post.imageUrl} alt={post.title} />
                        <span class="author">Источник: <strong class="light-success-text">{post.author}</strong></span>
                        <button class="tag-button">{post.category}</button>
                    </div>
                </div>
            )}
        </section>
     );
}

export default PostDetailPage;