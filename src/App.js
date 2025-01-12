import './static/App.css';
import adLogo from './static/ad-image.png'

function App() {
  return (
    <div className="App">
      <div className='row m-3'>
        <div id='info-section' className='col col-lg-8 col-md-12 col-sm-12 bg-warning rounded'>
          <p className='text-center'><i>Graph comes here...</i></p>
        </div>

        <div id='ad-section' className='col col-lg-4 col-md-0 col-sm-0'>
          <div className='container bg-primary rounded p-3'>
            <h3 className='text-center text-white'>Get started with CryptoX for FREE</h3>
            <p className='text-white text-center '>With our range of features that you can equip for free, CryptoX allows you to be more educated and aware of your tax reports.</p>
            <div className='container d-flex flex-column justify-content-center align-items-center'>
              <img src={adLogo} height={100} width={100} alt='cryptoX-logo' />
              <button className='btn btn-success p-2'>
                <div className='d-flex flex-row'>
                  <p className='m-0'>Get started for FREE</p>
                  <i class="bi bi-arrow-right-short"></i>
                </div>
              </button>
            </div>
          <div className='container'>
            <h4 className=''>Trending Coins (24h)</h4>
            <ul>
              <li>Track your transactions</li>
              <li>Generate tax reports</li>
              <li>Get insights on your portfolio</li>
              <li>Get alerts on market changes</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

