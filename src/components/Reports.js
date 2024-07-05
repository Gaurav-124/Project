import React, {useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import { writeReportData, getReports } from '../lib/firebaseSetup'

const Reports = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getReports().then((snapshot) => {
      if(snapshot.exists()){
        setData(snapshot.val());
        setLoading(false);
      }
      else{
        setData([]);
      }
    }).catch((e) => {
      console.log(e);
    })
  }, []);
  const handleSearch = (searchTerm) => {
    const newData = data.filter((report) => {
      return report.name.toLowerCase().includes(searchTerm.toLowerCase()) || report.id.includes(searchTerm);
    })
    setData(newData)
  }
  const addReport = (report) => {
    writeReportData([...data, {...report, dateCreated: Date.now()}]);
  }
  return (
    <div className='flex w-full'>
    <Sidebar addReport={addReport}/>
    <div className='md:w-[73%] w-full py-8 px-6 h-screen overflow-y-auto'>
        <h1 className='text-5xl font-extrabold text-gray-900'>Reports</h1>
        <p className='my-4 text-gray-900 text-lg'>View detailed reports on patients' retinal images and AI analysis.</p>
        <div className='w-full flex bg-gray-300 rounded-lg px-4 py-2 items-center gap-4 shadow-md'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 50 50" fill='rgb(100, 116, 139)'>
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
            <input placeholder='Search by patient or report ID' className='placeholder:text-gray-600 bg-transparent w-full outline-none' onChange={(e) => {handleSearch(e.target.value)}}/>
        </div>
        <div className='border rounded-xl border-gray-400 w-full mt-6 overflow-x-auto shadow-lg'>
            <table className='w-full overflow-hidden'>
                <thead>
                    <tr className='border-b border-gray-300 text-left bg-gray-100'>
                        <th className='font-semibold p-4 text-lg text-gray-900'>Report ID</th>
                        <th className='font-semibold text-lg text-gray-900'>Patient Name</th>
                        <th className='font-semibold text-lg text-gray-900'>Date Created</th>
                        <th className='font-semibold text-lg text-gray-900'>AI Analysis</th>
                        <th className='font-semibold text-lg text-gray-900'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? <tr>
                            <td className='text-2xl text-gray-600 text-center py-2' colSpan={5}>Loading...</td>
                        </tr> : data.map((report, index) => {
                            const diff = Math.floor((Date.now() - report.dateCreated)/(1000*60*60*24))
                            return(
                                <tr key={report.id} className='border-b border-gray-400 text-sm hover:bg-gray-200 transition-colors duration-200'>
                                    <td className='text-gray-700 px-4 py-6 text-base'>#{report.id}</td>
                                    <td className='text-base font-medium text-gray-900'>{report.name}</td>
                                    <td className='text-gray-700 text-base'>{
                                        diff < 1 ? 'Today' : diff === 1 ? '1 day ago' : diff > 9 ? `${new Date(report.dateCreated).toLocaleDateString()}` : `${diff} days ago`
                                    }</td>
                                    <td>
                                        <Link to='/' className='bg-gray-300 rounded-lg py-2 w-5/6 block text-center text-base text-gray-900'>{report.analysis}</Link>
                                    </td>
                                    <td>
                                        <Link to='/' className='font-bold text-gray-900 hover:text-gray-900 transition-colors duration-200 text-base'>View details</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
</div>

  )
}

export default Reports