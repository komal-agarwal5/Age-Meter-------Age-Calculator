// import logo from './logo.svg';
import "./App.css";
import bg from "./bg.jpg";
function App() {
  return (
    <div className="container">
      {/* <div className="bgimg" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", height:600,width:1300}}> */}
      <h1 className="heading">AGE CALCULATOR</h1>
      <div className="minicont">
      <h2 className="ask">Enter your date of birth</h2>
      <form action="">
        <input type="date" name="date" id="datei" required />
      </form>
      <button className="btn">Calculate</button>
      <div className="output">
        <h2>You are </h2>
        <div className="opcont">
          <div className="box">
            <p>20</p>
            <p>10</p>
            <p>10</p>
          </div>
          <div className="cont">
            <p>years</p>
            <p>months</p>
            <p>days</p>
          </div>
        </div>
        <h4>old</h4>
      </div>
      <div className="footer">
        <p>Made with <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" fill="white" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg> by <a href="">Komal Agarwal</a></p>
      </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
