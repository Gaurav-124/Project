
import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Modal from "./Modal"

const Sidebar = ({addReport}) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [report, setReport] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    for(const key in report){
      if(report[key] === ''){
        alert('Please fill all the fields');
        return;
      }
    }
    addReport(report);
    setShow(false);
    window.location.reload();
  }
  return (
    <div className='w-[27%] px-8 py-8 font-medium h-screen justify-between flex-col hidden md:flex bg-gray-50'>
    <div>
        <h1 className='mb-6 text-2xl font-semibold text-gray-700'>Retinoscan AI</h1>
        <ul className='list-none ml-2 space-y-3'>
            <li className={`${location.pathname.includes('dashboard') ? 'bg-slate-200 py-2 rounded-3xl' : ''}`}><Link to='/dashboard' className='ml-2 w-full block text-gray-700 hover:text-gray-900'>Dashboard</Link></li>
            <li className={`${location.pathname.includes('analysis') ? 'bg-slate-200 py-2 rounded-3xl' : ''}`}><Link to='/' className='ml-2 block text-gray-700 hover:text-gray-900'>Analysis</Link></li>
            <li className={`${location.pathname.includes('reports') ? 'bg-slate-200 py-2 rounded-3xl' : ''} flex items-center`}><Link to='/' className='ml-2 text-gray-700 hover:text-gray-950'>Reports</Link></li>
        </ul>
    </div>
    <button className='bg-blue-800 text-white w-full rounded-3xl py-2 mt-6 hover:bg-black-600' onClick={() => {setShow(true)}}>New report</button>
    <Modal show={show} onClose={() => {setShow(false)}} title='New report upload'>
        <form className='px-8 py-4 flex flex-col gap-4'>
            <div className='flex flex-col'>
              <label htmlFor='reportId' className='text-left text-gray-800'>Report ID</label>
              <input type='text' id='reportId' className='w-full p-3 rounded-md border border-gray-300 outline-none' 
              placeholder='Enter report ID' onChange={(e) => {setReport({...report, id: e.target.value})}}/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='name' className='text-left text-gray-800'>Patient name</label>
              <input type='text' id='name' className='w-full p-3 rounded-md border border-gray-300 outline-none' 
              placeholder='Enter patient name' onChange={(e) => {setReport({...report, name: e.target.value})}}/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='analysis' className='text-left text-gray-800'>AI analysis</label>
              <input type='text' id='analysis' className='w-full p-3 rounded-md border border-gray-300 outline-none' 
              placeholder='Enter analysis' onChange={(e) => {setReport({...report, analysis: e.target.value})}}/>
            </div>
            <button className='w-1/3 rounded-md mx-auto bg-blue-500 text-white py-2 hover:bg-blue-600' onClick={handleSubmit}>Upload</button>
        </form>
    </Modal>
</div>
  )
}

export default Sidebar
