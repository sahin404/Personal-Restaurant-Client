const ShowList = ({ menu }) => {
    const { image, name, recipe, price } = menu;

    return (
        <div className="flex flex-col md:flex-row gap-5 bg-gray-200 p-5 rounded-lg">
            <img className="h-20 w-20 rounded-full rounded-tl-none" src={image} alt={name} />
            <div className="flex flex-col justify-center">
                <h1 className="font-bold">{name}</h1>
                <p>{recipe}</p>
                <h1 className="text-[#BB8506]">${price}</h1>
            </div>
        </div>
    );
}

export default ShowList;
