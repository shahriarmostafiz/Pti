import Nav from './Components/navbar/Nav'
import Banner from './Components/banner/Banner'
import Footer from './Components/footer/Footer'
import Product from './Components/Products/Product'
// import './App.css'

function App() {

  return (
    <div className='bg-slate-50'>
      <div className='max-w-7xl mx-auto space-y-4'>
        <Nav></Nav>
        <Banner></Banner>
        <div className='mb-10'>

          <Product type={"IsPopular"}></Product>
        </div>
        <div className='mt-10'>
          <Product type={"IsRecommended"}></Product>
        </div>
      </div>
      <Footer></Footer>
      {/* <button className='btn btn-primary btn-accent'>Hello </button> */}
    </div>
  )
}

export default App
