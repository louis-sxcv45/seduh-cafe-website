import BrandPanel from "../../../ui/AdminUI/BrandPanel";
import bg from "../../../../assets/images/brand.png";

const Login = () => {
    return (
        <main className="grid h-screen grid-cols-2 gap-4 bg-ground p-4">
            <section className= "bg-cover bg-center bg-no-repeat w-170 rounded-4xl overflow-hidden" style={{ backgroundImage: `url(${bg})` }}>
                <BrandPanel/>
            </section>
            <section>
                <h1>Hello</h1>
            </section>
        </main>
    );
}

export default Login;