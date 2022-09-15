
interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <h1>Hello NLW</h1>
      <Button title="Send 1"></Button>
      <Button title="Send 2"></Button>
      <Button title="Send 3"></Button>
      <Button title="Hello Modafoca"></Button>

    </div>
  )
}

export default App
