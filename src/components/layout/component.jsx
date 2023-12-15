import { Header } from "../header/component"
import { Footer } from "../footer/component"
import { ThemeProvider } from "../theme/component"

export const Layout = ({ children }) => {
    return (
        <ThemeProvider>
            <Header/>
                {children}
            <Footer/>
        </ThemeProvider>
    )
}