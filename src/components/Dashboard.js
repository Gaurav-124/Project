import React, {useState, useEffect} from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import { writeDashboardData, getDashboardReports } from '../lib/firebaseSetup';
import Modal from './Modal';
import AddReport from './AddReport';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(() => {
    getDashboardReports().then((snapshot) => {
      if(snapshot.exists()){
        const data = snapshot.val();
        setData(data);
        setLoading(false);
      }
    });
  }, []);
  const [tab, setTab] = useState(0);
  const handleSearch = (searchTerm) => {
    const filteredReports = data.filter((report) => {
      return report.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setData(filteredReports);
  }
  const addReport = (report) => {
    writeDashboardData([...data, report]);
  }
  return (
    <div>
    <Header authenticated={true}/>
    <div className='sm:w-3/4 mx-auto mt-10 w-5/6'>
        <div className='w-full flex items-center justify-between'>
            <h1 className='sm:text-4xl text-2xl font-bold'>Dashboard</h1>
            <button className='bg-blue-400 rounded-3xl px-4 py-2 text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-200' onClick={() => {setShow(true)}}>New upload</button>
        </div>
        <div className='w-full flex bg-slate-200 rounded-lg px-4 py-2 items-center gap-4 mt-8 shadow-sm'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 50 50" fill='rgb(100, 116, 139)'>
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
            <input placeholder='Search by patient or report ID' className='placeholder:text-slate-500 bg-transparent w-full outline-none' onChange={(e) => {handleSearch(e.target.value)}}/>
        </div>
        <div className='w-full border-b border-slate-400 flex gap-6 mt-2 overflow-x-auto'>
            <button className={`font-bold py-5 text-center ${tab === 0 ? 'text-blue border-b-3 border-blue-600' : 'text-slate-500 hover:text-black transition-colors duration-100'}`} onClick={() => {setTab(0)}}>All</button>
            <button className={`font-bold py-5 text-center ${tab === 1 ? 'text-blue border-b-3 border-blue-600' : 'text-slate-500 hover:text-black transition-colors duration-100'}`} onClick={() => {setTab(1)}}>Unreviewed</button>
            <button className={`font-bold py-5 text-center ${tab === 2 ? 'text-blue border-b-3 border-blue-600' : 'text-slate-500 hover:text-black transition-colors duration-100'}`} onClick={() => {setTab(2)}}>Reviewed</button>
            <button className={`font-bold py-5 text-center ${tab === 3 ? 'text-blue border-b-3 border-blue-600' : 'text-slate-500 hover:text-black transition-colors duration-100'}`} onClick={() => {setTab(3)}}>Flagged</button>
            <button className={`font-bold py-5 text-center ${tab === 4 ? 'text-blue border-b-3 border-blue-600' : 'text-slate-500 hover:text-black transition-colors duration-100'}`} onClick={() => {setTab(4)}}>Archived</button>
        </div>
        {tab === 0 ? (
            <div className='border rounded-xl border-slate-300 w-full my-6 overflow-x-auto shadow-lg'>
            <table className='w-full overflow-hidden border-spacing-3'>
                <tr className='border-b border-slate-300 text-left bg-slate-100'>
                    <th className='font-semibold p-2 w-1/12 mr-2'>Patient</th>
                    <th className='font-semibold w-1/12'>Eye</th>
                    <th className='font-semibold w-[12%]'>Uploaded</th>
                    <th className='font-semibold w-1/6 text-center md:text-left'>AI insights</th>
                    <th className='font-semibold w-2/5'>Detections</th>
                    <th className='font-semibold w-1/12'>Actions</th>
                </tr>
                {
                    loading ? <tr>
                    <td className='text-2xl text-slate-600 text-center py-2' colSpan={5}>Loading...</td>
                    </tr> : data.map((report, index) => {
                      const diff = Math.floor((Date.now() - report.uploaded)/(1000*60*60*24))
                      console.log(report.uploaded);
                      return(
                        <tr key={index} className={`${index !== data.length-1 ? 'border-b border-slate-300' : ''} text-sm`}>
                            <td className='px-4 py-6'>{report.name}</td>
                            <td className='pr-4'><p className='bg-slate-200 rounded-lg px-4 py-2 block text-center font-semibold'>{report.eye}</p></td>
                            <td className='text-slate-500 pr-4'>{
                              diff < 1 ? 'Today' : diff === 1 ? '1  day ago' : diff > 9 ? `${new Date(report.uploaded).toLocaleDateString()}` : `${diff} days ago`
                            }</td>
                            <td className='pr-6'><p className='bg-slate-200 rounded-lg px-4 py-2 block text-center font-semibold'>{report.insights}</p></td>
                            <td className='pr-4'><p className='bg-slate-200 rounded-lg py-2 block text-center font-semibold'>{report.Detections.join(', ')}</p></td>
                            <td><Link to='/reports' className='text-slate-900 font-bold hover:text-black transition-colors duration-200'>Review</Link></td>
                        </tr>
                      )
                    })
                }
            </table>
            </div>
        ) : (
            <p>{tab}</p>
        )}
    </div>
    <Modal show={show} onClose={() => {setShow(false)}} title='Add new report'>
        <AddReport addReport={addReport}/>
    </Modal>
</div>

  )
}

export default Dashboard