import React, {useState} from "react"

const AddReport = ({addReport}) => {
  const [report, setReport] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    for(const key in report){
      if(report[key] === ''){
        alert('Please fill all the fields');
        return;
      }
    }
    addReport({...report, uploaded: Date.now()});
    window.location.reload();
  }
  return (
    <form className='md:px-8 px-4 flex flex-col gap-4 text-sm bg-white shadow-lg rounded-lg p-6'>
    <div className='flex flex-col'>
        <label htmlFor='name' className='text-left font-medium text-gray-700'>Patient name</label>
        <input type='text' id='name' className='w-full p-3 rounded-lg border border-gray-300 outline-none focus:border-blue-500' 
        placeholder='Enter patient name' onChange={(e) => {setReport({...report, name: e.target.value})}}/>
    </div>
    <div className='flex flex-col'>
        <label htmlFor='eye' className='text-left font-medium text-gray-700'>Eye</label>
        <input type='text' id='eye' className='w-full p-3 rounded-lg border border-gray-300 outline-none focus:border-blue-500' 
        placeholder='Enter the eye' onChange={(e) => {setReport({...report, eye: e.target.value})}}/>
    </div>
    <div className='flex flex-col'>
        <label htmlFor='analysis' className='text-left font-medium text-gray-700'>AI analysis</label>
        <input type='text' id='analysis' className='w-full p-3 rounded-lg border border-gray-300 outline-none focus:border-blue-500' 
        placeholder='Enter analysis' onChange={(e) => {setReport({...report, insights: e.target.value})}}/>
    </div>
    <div className='flex flex-col'>
        <label htmlFor='detections' className='text-left font-medium text-gray-700'>Detections</label>
        <input type='text' id='detections' className='w-full p-3 rounded-lg border border-gray-300 outline-none focus:border-blue-500' 
        placeholder='Enter detections' onChange={(e) => {setReport({...report, Detections: e.target.value.split(',')})}}/>
    </div>
    <button className='w-1/3 rounded-lg mx-auto bg-blue-600 text-white py-2 hover:bg-blue-700 transition duration-300' onClick={handleSubmit}>Upload</button>
</form>

  )
}

export default AddReport