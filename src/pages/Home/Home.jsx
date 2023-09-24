import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Hea/Banner/Banner";
import Phones from "../../components/Phones/Phones";


const Home = () => {

    const phones = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Phones key={phones.id} phones={phones}></Phones>
        </div>
    );
};

export default Home;