
import './App.css'

function App() {
  function col(props) {
    document.body.style.background='#'+props;
  }

  return (
    <>
      <div className="btns">
        <button className="c1" onClick={()=>col('4ADC2A')}>Button</button>
        <button className="c2" onClick={()=>col('1B1BE6')}>Button</button>
        <button className="c3" onClick={()=>col('BA1B1B')}>Button</button>
      </div>
    </>
  )
}

export default App
