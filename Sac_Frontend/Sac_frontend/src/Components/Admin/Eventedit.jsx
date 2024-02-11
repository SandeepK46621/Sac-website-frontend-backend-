
export default function Eventedit( {title, description, imagelink ,_id }){
  async function handleDelete() {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3000/admin/events/delete/${_id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': token
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  }
  
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
<div className="flex max-h-12 m-10">
    <button class="bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700" onClick={handleDelete}><p className="text-white">Delete</p></button>
</div>
</div>  
    </>
}