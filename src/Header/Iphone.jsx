import React from 'react'

class Iphone extends React.Component {
  render() {
    return (
      <>
        <div className='border h-[30rem]  bg-blue-50 '>
          <h1 className='text-6xl font-semibold text mt-[8rem] text-center text-blue-600'>Designed to be loved.</h1>
          <h1 className='text-center text-9xl mt-[4rem]'>iPhone</h1>
        </div>
        <div>
        <video className="mt-[2rem] "   controls autoPlay loop muted>
      <source
        src="https://www.apple.com/105/media/ww/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge_2x.mp4"
        type="video/mp4" 
      />
    </video>
        </div>
        <div className='flex justify-center items-center gap-4 flex-wrap mt-[4rem] '>
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
              <img className='w-[300px] h-[300px]' src="iphone3.jpg" alt="" />
            </div>
            <h1 className='font-bold'>iPhone</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 57,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Iphone4.jpg" alt="" />
            </div>
            <h1 className='font-bold'>iPhone</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 53,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Iphone5.jpg" alt="" />
            </div>
            <h1 className='font-bold'>iPhone</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 74,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='mt-[4rem]'>
            <img src="https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River15pro/R1809_3._CB575355692_.jpg" alt="" />
          </div>
          </div>
    </>
    )
  }
}
export default Iphone;