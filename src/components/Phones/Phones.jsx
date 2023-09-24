import Phone from "./Phone";



const Phones = ({phones}) => {

    console.log(phones);
    return (
        <div className="md:py-8">
            <h1 className="md:text-xl md:font-bold text-center">All Categories Phone</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-2 md:py-4 lg:py-8">
                {
                    phones?.map( phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;