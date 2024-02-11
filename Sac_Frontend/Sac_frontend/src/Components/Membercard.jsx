export default function Membercard({name,position,imagelink}){

    return <>
   <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
    <img src={imagelink} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {name}
    </h4>
    <p
      className=" text-gray-900 block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr ">
        {position}
    </p>
  </div>
  
</div>
  
    </>
}