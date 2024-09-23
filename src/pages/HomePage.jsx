import PostList from "../components/PostList";

function HomePage() {
    return(
        <section class="mobile-block">
            <div class="mobile-block__header is-secondary">
                Все группы
            </div>
            <PostList />
        </section>
    );
}

export default HomePage;