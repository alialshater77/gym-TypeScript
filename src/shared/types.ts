export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
}

export interface BenefitType {
    id: number;
    icon: JSX.Element;
    title: string;
    des: string;
}

export interface ClassType {
    name: string;
    descripton?: string;
    image: string;
    id: number;
}