import { Component } from "react";
import Support from "./Support";

class Store extends Component {

 

  render() {
   
    return (
      <>
      
      <div className='flex items-center mt-2  justify-center '>
          <h1>Get up to 24 months No Cost EMI on all iPhone models from most leading banks. Learn more</h1>
        </div>
        <div className="border h-[30rem] mt-4 bg-blue-50 ">
           <div>
            <h1 className="text-6xl font-semibold text mt-[6rem] ms-[6rem] text-blue-600" > <span className="text-orange-400">Store.</span>The best way to buy <br/> the products you love.</h1>
           </div>
           <div className="flex justify-center gap-16 mt-[3.5rem]">
           <div className="text-center mt-2 font-semibold">
            <img className="w-[8rem]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666" alt="" />Mac
            </div>
            <div  className="text-center mt-2 font-semibold">
            <img className="w-[8rem]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1692971740071" alt="" />iPhone
            </div>
            <div  className="text-center mt-2 font-semibold">
            <img className="w-[8rem]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875" alt="" />iPad
            </div>
            <div  className="text-center mt-2 font-semibold">
            <img className="w-[8rem]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_IN?wid=400&hei=260&fmt=png-alpha&.v=1693703814407" alt="" />Watch
            </div>
            <div  className="text-center mt-2 font-semibold">
            <img className="w-[8rem]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885" alt="" />AirPods
            </div>
           </div>
        </div>
        <div className="">
        <video className="mt-[2rem] rounded-xl "   controls autoPlay loop muted>
      <source
        src="https://videos.pexels.com/video-files/8126640/8126640-hd_1920_1080_25fps.mp4"
        type="video/mp4"/>
    </video>
        <div className='mt-[4rem] justify-center'>
    

        </div>
        </div>
        <div className='flex justify-center items-center gap-4 flex-wrap mt-[15px]  '>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="iphone.jpg" alt="" />
            </div>
            <h1 className='font-bold'>iPhone</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 63,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="iphone1.jpeg" alt="" />
            </div>
            <h1 className='font-bold'>iPhone</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 65,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="iphone2.jpeg" alt="" />
            </div>
            <h1 className='font-bold'>iPhone</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 67,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Mac.webp" alt="" />
            </div>
            <h1 className='font-bold'>MacBook</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 1,84,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="mac1.jpeg" alt="" />
            </div>
            <h1 className='font-bold'>MacBook</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 1,87,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="mac2.jpg" alt="" />
            </div>
            <h1 className='font-bold'>MacBook</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 1,89,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md mt-[10px]' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Ipad.webp" alt="" />
            </div>
            <h1 className='font-bold'>iPad</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 86,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="ipad1.jpg" alt="" />
            </div>
            <h1 className='font-bold'>iPad</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 88,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="ipad2.webp" alt="" />
            </div>
            <h1 className='font-bold'>iPad</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 89,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Watch.jpg" alt="" />
            </div>
            <h1 className='font-bold'>Watch</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 22,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Watch3.jpg" alt="" />
            </div>
            <h1 className='font-bold'>Watch</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 29,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Watch4.jpg" alt="" />
            </div>
            <h1 className='font-bold'>Watch</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 21,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="AirPods.jpg" alt="" />
            </div>
            <h1 className='font-bold'>AirPods</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 19,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="AirPods1.jpg" alt="" />
            </div>
            <h1 className='font-bold'>AirPods</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 21,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="AirPods2.jpg" alt="" />
            </div>
            <h1 className='font-bold'>AirPods</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 24,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
        </div>
        <div>
        <Support/>
          </div>
      </>
    )
  }
}
export default Store;