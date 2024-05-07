
import { Footer } from "./_HomeComp/Footer";
import { Header } from "./_HomeComp/Header"
import { Heading } from "./_HomeComp/Heading";

export default function Home() {
    return (
        <div>
            <header className=" container m-auto">
                <Header/>
            </header>
            <div className=" container">
                <Heading/>
                <Footer/>
            </div>
        </div>
    );
}