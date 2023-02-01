import Menu from '../Menu/Menu';
/* import Footer from '../Footer/Footer'; */
export default function TemplateBasic({ children }) {

    return (

        <>
            <Menu />
                <main>
                    {
                        children
                    }
                </main>
           {/*  <Footer/> */}
        </>
    )

}