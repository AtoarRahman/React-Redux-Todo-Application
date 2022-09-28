import { Provider } from "react-redux";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import FooterTwo from "./components/FooterTwo";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoIncompleteList from "./components/TodoIncompleteList";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {

    return (
        <Provider store={store}>
            <div className="grid place-items-center mt-6 bg-blue-100 px-6 font-sans">
                <Navbar />

                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mt-5">
                    <Filter/>
                </div>

                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mt-4">
                    <Header />

                    <hr className="mt-4" />

                    <TodoIncompleteList/>

                    <hr className="mt-4" />

                    <Footer />
                    
                </div>
                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mt-4">
                    
                    <TodoList />

                    <hr className="mt-4" />

                    <FooterTwo/>
                    
                </div>
            </div>
        </Provider>
    );
}

export default App;
