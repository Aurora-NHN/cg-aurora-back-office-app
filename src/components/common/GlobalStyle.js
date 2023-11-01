import "bootstrap/dist/js/bootstrap.min"
import "bootstrap/dist/css/bootstrap.min.css"
import "~/assets/vendors/mdi/css/materialdesignicons.min.css"
import "~/assets/scss/style.scss"
import "react-quill/dist/quill.snow.css"
import 'react-toastify/dist/ReactToastify.css';
import "primereact/resources/themes/lara-dark-indigo/theme.css";
function GlobalStyle({children}){

    return(
        <>
            {children}
        </>
    )
}
export default GlobalStyle