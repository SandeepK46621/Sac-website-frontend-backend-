
export default function Eventcard({title,description,imagelink}){

    return <>
        <div class=" m-4 relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[100rem] flex-row">
  <div
    class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={imagelink}
      alt="card-image" class="object-cover w-full h-full" />
  </div>
  <div class="p-6">
    <h6
      class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      {title}
    </h6>
   
    <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {description}
    </p>
    
  </div>
</div>  
    </>
}