import Form from "./components/Form";
import Topics from "./components/Topics";
import useForm from "./hook/useForm";


function App() {
    const { file, setFile, talks, sendFile } = useForm();
    return (
        <>
            <main>
                <Form file={file} setFile={setFile} sendFile={sendFile} />
                <Topics talks={talks} />
            </main>
        </>
    );
}

export default App;
