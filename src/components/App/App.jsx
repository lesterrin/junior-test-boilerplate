import ImageListContainer from '../ImageList';
import {useEffect} from "react";
import {unsplashAuthorize} from "../../api/api";

function App() {

    useEffect(() => {
        unsplashAuthorize();
    }, []);

    return (
        <>
            <header>
                <h1>Тестовое задание</h1>
            </header>
            <main>
                <section>
                    <ImageListContainer/>
                </section>
            </main>
        </>
    );
}

export default App;
