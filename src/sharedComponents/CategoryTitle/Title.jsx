
const Title = ({ h1, h2 }) => {
    return (
        <div className=" my-5 flex items-center justify-center ">
            <div className="text-center">
                <h1 className="text-[#D99904] text-lg font-semibold">{h1}</h1>
                <h1 className="text-4xl border-y-2 p-5 border-black my-2">{h2}</h1>
            </div>
        </div>

    )
}

export default Title