import HText from "@/shared/component/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon , UserGroupIcon , AcademicCapIcon } from "@heroicons/react/24/solid";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import Button from "@/shared/component/Button";


const benefits: Array<BenefitType> = [
    {
        id: 1,
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the art facilities",
        des: "Neque adipiscing amet enim."
    },
    {
        id: 2,
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "State of the art facilities",
        des: "Neque adipiscing amet enim."
    },
    {
        id: 3,
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "State of the art facilities",
        des: "Neque adipiscing amet enim."
    },
];

const container ={
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
    return (
        <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20 "
        >
            <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            className="mt-5"
            >
                {/* Header */}
                <motion.div
                initial = "hidden"
                whileInView="visible"
                viewport={ {once: true , amount: 0.5}}
                transition={{duration: 0.7}}
                variants={{
                    hidden: {opacity: 0 , x:-50},
                    visible: {opacity: 1 , x: 0},
                }}
                className="md:my-5 md:w-3/5">
                    <HText>
                        MORE THAN JUST A GYM.
                    </HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to 
                        get you ultimate fitness goals with ease. We provide true care into 
                        each and every member.
                    </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true , amount: 0.5}}
                variants={container}
                className="md:flex items-center justify-between gap-8 mt-5">
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit 
                        key={benefit.id}
                        icon= {benefit.icon}
                        title= {benefit.title}
                        des= {benefit.des}
                        setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* Graphics and Desciption */}
                <div className=" mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* Graphic */}
                    <img className=" mx-auto " alt="benefits-page-graphic" src={BenefitsPageGraphic}/>

                    {/* Description */}
                    <div>
                        <div className="relative ">
                            <div className=" before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                                <motion.div
                                initial = "hidden"
                                whileInView="visible"
                                viewport={ {once: true , amount: 0.5}}
                                transition={{duration: 0.7}}
                                variants={{
                                    hidden: {opacity: 0 , x:50},
                                    visible: {opacity: 1 , x: 0},
                                }}
                                >
                                    <HText>
                                        Millions of happy members gettin{" "}
                                        <span className=" text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                        initial = "hidden"
                        whileInView="visible"
                        viewport={ {once: true  , amount: 0.5}}
                        transition={{delay:0.2, duration: 0.7}}
                        variants={{
                            hidden: {opacity: 0 , x:50},
                            visible: {opacity: 1 , x: 0},
                        }}
                        >
                            <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum minus pariatur reprehenderit nulla quibusdam? Culpa a tempora, cupiditate blanditiis eum temporibus ducimus voluptas possimus veniam doloremque eaque voluptatibus! Ut, ipsum.</p>
                            <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ab aliquid voluptas hic perspiciatis dolore sapiente voluptatum tempora eaque! Vitae dolorem placeat ab nesciunt consequatur eum quibusdam voluptatem iusto culpa.</p>
                        </motion.div>

                        <div className=" relative mt-16 ">
                            <div className=" before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <Button setSelectedPage={setSelectedPage}>
                                    Join Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits;