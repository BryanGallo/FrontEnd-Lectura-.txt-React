import { useState } from "react";

const useForm = () => {
    const [file, setFile] = useState(null);
    const [talks, setTalks] = useState({
        morningTopic: [],
        afternoonTopic: [],
    });

    return { file, setFile, talks };
};

export default useForm;
