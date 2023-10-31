import {BrowserRouter, Link} from "react-router-dom";
import AppRoutes from "~/routes/AppRoutes";
import GlobalStyle from "~/components/common/GlobalStyle";
import {Provider} from "react-redux";
import store from "~/app/store";
import {ToastContainer} from "react-toastify";
import {ConfirmPopup} from "primereact/confirmpopup";
import React from "react";
import Authentication from "~/components/authentication/Authentication";

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle>
                <BrowserRouter>
                    <Authentication>
                        <AppRoutes/>
                        <ToastContainer/>
                        <ConfirmPopup/>
                    </Authentication>
                </BrowserRouter>
            </GlobalStyle>
        </Provider>

    );
}

export default App;
