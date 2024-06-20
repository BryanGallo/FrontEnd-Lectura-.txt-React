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
        try {
            const res = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (!res.ok) {
                const errorResponse = await res.json();
                throw new Error(errorResponse.msg);
            }
            const data = await res.json();
            console.log(data);
            setTalks(data);
        } catch (error) {
            alert(error);
        }
    };

    return { file, setFile, talks, sendFile };
};

export default useForm;
