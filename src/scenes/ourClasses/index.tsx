import { ClassType, SelectedPage } from '@/shared/types';
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from '@/shared/component/HText';
import Class from "./Class";


const classes: Array <ClassType> = [
    {
        id: 1,
        name: "Weight training classes",
        descripton : "alsdkd;askfad;f;dakf",
        image: image1,
    },
    {
        id: 2,
        name: "Weight training classes",
        image: image2,
    },
    {
        id: 3,
        name: "Weight training classes",
        descripton : "alsdkd;askfad;f;dakf",
        image: image3,
    },
    {
        id: 4,
        name: "Weight training classes",
        descripton : "alsdkd;askfad;f;dakf",
        image: image4,
    },
    {
        id: 5,
        name: "Weight training classes",
        descripton : "alsdkd;askfad;f;dakf",
        image: image5,
    },
    {
        id: 6,
        name: "Weight training classes",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
    return (
        <section
        className=' w-full bg-primary-100 py-40'
        id='ourclasses'
        >
            <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                className='mx-auto w-5/6'
                initial = "hidden"
                    whileInView="visible"
                    viewport={ {once: true , amount: 0.5}}
                    transition={{duration: 0.7}}
                    variants={{
                        hidden: {opacity: 0 , x:-50},
                        visible: {opacity: 1 , x: 0},
                    }}
                >
                    <div className='md:w-3/5'>
                        <HText>
                            OUR CLASSES
                        </HText>
                        <p className=' py-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nemo aspernatur dicta, sed quasi eos omnis quam accusamus necessitatibus? Perferendis quas quibusdam doloremque, dignissimos maxime culpa similique corporis harum deleniti.
                        </p>
                    </div>
                </motion.div>
                <div className=' mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className=' w-[2800px] whitespace-nowrap'>
                        {classes.map((item: ClassType, index) =>(
                            <Class key={`${item.name}-${index}`}
                            name={item.name}
                            descripton={item.descripton}
                            image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses;