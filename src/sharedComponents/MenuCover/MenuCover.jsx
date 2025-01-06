const MenuCover = ({img, title, description}) => {
    return (
        <div className="hero md:h-[500px]" style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="hero-content px-10 md:px-16 py-10 bg-slate-800 bg-opacity-65 text-center text-white">
                <div className="max-w-md">
                    <h1 className=" text-3xl md:text-6xl font-bold">{title}</h1>
                    <p className="py-6">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MenuCover