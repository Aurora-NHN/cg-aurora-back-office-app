import {BrowserRouter} from "react-router-dom";
import AppRoutes from "~/routes/AppRoutes";
import GlobalStyle from "~/components/common/GlobalStyle";
import {Provider} from "react-redux";
import store from "~/app/store";

function App() {
    return (
        <GlobalStyle>
            <Provider store={store}>
                <BrowserRouter>
                    <AppRoutes/>
                </BrowserRouter>
            </Provider>
        </GlobalStyle>

    );
}

export default App;
