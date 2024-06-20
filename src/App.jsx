import Form from "./components/Form";
import useForm from "./hook/useForm";

function App() {
    const { file, setFile, talks } = useForm();
    return (
        <>
            <main>
                <Form />
            </main>
        </>
    );
}

export default App;
