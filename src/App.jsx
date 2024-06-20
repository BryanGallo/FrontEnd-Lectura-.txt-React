import Form from "./components/Form";
import useForm from "./hook/useForm";

function App() {
    const { file, setFile, talks, sendFile } = useForm();
    return (
        <>
            <main>
                <Form file={file} setFile={setFile} sendFile={sendFile} />
            </main>
        </>
    );
}

export default App;
