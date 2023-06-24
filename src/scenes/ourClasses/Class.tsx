
type Props = {
    name: string,
    image: string,
    descripton?: string,
}

const Class = ({image , name , descripton}: Props) => {
    const overlaystyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 `;


    return (
        <li className=" relative mx-5 inline-block h-[380px] w-[450px]">
            <div className={overlaystyles}>
                <p className=" text2xl">{name}</p>
                <p className=" mt-5">{descripton}</p>
            </div>
            <img alt={`${image}`} src={image}/>
        </li>
    )
}

export default Class;