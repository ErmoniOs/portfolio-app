

const Services = () => {
  return (
<>

<div className=" mt-10 p-5 flex justify-center">
<blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white p-10">
    <svg aria-hidden="true" className="w-10 h-10 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <p className="text-3xl">"With a passion for clean code and user-centric design, I bring creativity and technical expertise <br /> to deliver tailored solutions that drive businesses forward. Whether it's a freelance gig or an <br /> opportunity to join your team, I am ready to contribute my skills to achieve exceptional results."</p>
</blockquote> 
</div>
<div>
<div className="m-auto grid grid-cols-1 place-content-center bg-slate-800" style={{position: 'relative', width: "1200px", height: "500px" }}>
<div className="text-white text-7xl"><span className="text-pink-500">My</span></div>
    <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full pl-11 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] shadow-blue-500/20 overflow-hidden" style={{position: 'absolute', right:500, top:100, width: "400px", height: "300px" }}>
    <img className="mr-11"src="src/assets/cartoonImage.png" />
</div>
<h1 className="text-white text-7xl">Services</h1>
</div>
</div>

    </>
  )
}

export default Services