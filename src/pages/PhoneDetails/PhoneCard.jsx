import React from 'react';
import swal from 'sweetalert';

const PhoneCard = ({phone}) => {
    // console.log(phone);
    const {id, phone_name, brand_name, rating, price, image} = phone || {};

    const handleAddFav = () => {
        // console.log(phone);
        const addToFavourite = [];

        const getSavedPhones = JSON.parse(localStorage.getItem('favourites'));

        // jodi getSavedPhone e kisu na thake
        if (!getSavedPhones) {
            addToFavourite.push(phone)
            localStorage.setItem('favourites', JSON.stringify(addToFavourite));
            swal("Good job!", "Product Added Successfully!", "success");
        }
        
        else {
            const isExists = getSavedPhones.find(phone => phone.id === id)

            if (!isExists) {
                addToFavourite.push(...addToFavourite, phone);
                localStorage.setItem('favourites', JSON.stringify(addToFavourite))
                swal("Good job!", "Product Added Successfully!", "success");
            }
            else {
                swal("Already Exist!", "No Duplicate Added!", "error");
            }
            
        }

        // localStorage.setItem("favourites", JSON.stringify([{name: 'batashi'}, {prof: 'nursing'}]))
    }
    

    return (
        <div className="flex justify-center items-center h-[70vh]">
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-slate-500 bg-clip-border text-gray-700">
                    <img
                    src={image}
                    alt="image"
                    className="h-full w-full object-cover"
                    />
                </div>

                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {brand_name}
                    </h6>

                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {phone_name}
                    </h4>
    
                    <a className="inline-block" href="#">
                        <button
                            onClick={handleAddFav}
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            Add to Favourites
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3">
                                </path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;