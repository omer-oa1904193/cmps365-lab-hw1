const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement)


const Hello = (props) => <h1>Hello, {props.name}!</h1>
root.render(<>

<Hello name="React"></Hello>


</>)
