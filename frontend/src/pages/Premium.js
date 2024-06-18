import qris from '../assets/qris.jpg'

const Premium = () => {
  return (
    <div className="flex items-center justify-center text-center min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col items-center bg-[#0f0f0f] px-24 py-8 rounded-md mt-14" data-aos="fade-down">
            <h1 className="font-bold text-6xl mt-10">Premium Content</h1>
            <p className="text-white text-lg mt-4">Access exclusive premium content here with <strong>DANA</strong></p>
            <img src={qris} className='h-[500px] mt-10 mb-6'></img>
            <p className="text-white text-lg mt-4">Upgrade your experience with Premium features.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;