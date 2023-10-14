import {BrowserRouter} from "react-router-dom";
import AppRoutes from "~/routes/AppRoutes";
import GlobalStyle from "~/components/common/GlobalStyle";
import {Provider} from "react-redux";
import store from "~/app/store";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <GlobalStyle>
            <Provider store={store}>
                <BrowserRouter>
                    <AppRoutes/>
                    <ToastContainer/>
                </BrowserRouter>
            </Provider>
        </GlobalStyle>

    );
}

export default App;
