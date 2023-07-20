import learnerSVG from "../images/Home/customer_learner.svg";
import parentsSVG from "../images/Home/customer_parents.svg";
import teacherSVG from "../images/Home/customer_teacher.svg";

export const customerTypesData = [
    {
        _id: 1,
        name: "Language Learners",
        image: learnerSVG,
        msg: "I can’t have conversation after three years of learning.",
        subMsg: "Discover our class materials ensuring that you retain what you learn in class.",
        link: "/",
    },
    {
        _id: 2,
        name: "Parents",
        image: parentsSVG,
        msg: "It’s hard to teach Korean to my kid with boring materials.",
        subMsg: "Discover our class materials ensuring that you retain what you learn in class.",
        link: "/",
    },
    {
        _id: 3,
        name: "Korean Teachers",
        image: teacherSVG,
        msg: "There are too many grammar problem in Korean books.",
        subMsg: "Discover our class materials ensuring that you retain what you learn in class.",
        link: "/",
    },
];
