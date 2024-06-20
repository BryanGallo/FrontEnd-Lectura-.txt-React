import { useState } from "react";

const useForm = () => {
    const [file, setFile] = useState(null);
    const [talks, setTalks] = useState({
        morningTopic: [],
        afternoonTopic: [],
    });

    const sendFile = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/upload`, {
            method: "POST",
            body: formData,
        });
        console.log(res);
        const data = await res.json();
        console.log(data);
        setTalks(data);
    };

    return { file, setFile, talks, sendFile };
};

export default useForm;
