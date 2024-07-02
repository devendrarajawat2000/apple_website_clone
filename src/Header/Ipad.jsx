import React from 'react'

class Ipad extends React.Component {
  render() {
    return (
      <>
        <div className='border h-[30rem]  bg-blue-50 '>
          <h1 className='text-6xl font-semibold text mt-[8rem] text-center text-blue-600'> Touch, draw and type on<br/> <span className='text-orange-400'>
           one magical device.</span>
          </h1>
          <h1 className='text-center text-9xl mt-[4rem]'>iPad</h1>
        </div>
        <div>
        <video className="mt-[2rem] "   controls autoPlay loop muted>
      <source
        src="https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/xlarge_2x.mp4"
        type="video/mp4" 
      />
    </video>
        </div>
        <div className='flex justify-center items-center gap-4 flex-wrap mt-[4rem] '>
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
              <img className='w-[300px] h-[300px]' src="ipad3.jpeg" alt="" />
            </div>
            <h1 className='font-bold'>iPad</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 82,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="ipad4.webp" alt="" />
            </div>
            <h1 className='font-bold'>iPad</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 84,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="ipad5.webp" alt="" />
            </div>
            <h1 className='font-bold'>iPad</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 79,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md mt-[10px]' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
           <div>
            <img src="https://m.media-amazon.com/images/G/31/img22/Tablets/Ipad_10gen/r1606_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_01._CB605480890_.jpg" alt="" />
           </div>
        </div>
      </>
    )
  }
}
export default Ipad;