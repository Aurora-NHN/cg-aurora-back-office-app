import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"
import "~/assets/vendors/mdi/css/materialdesignicons.min.css"
import "~/assets/scss/style.scss"
function GlobalStyle({children}){

    return(
        <>
            {children}
        </>
    )
}
export default GlobalStyle