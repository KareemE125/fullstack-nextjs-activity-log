'use client'
import { useUsersEmails } from "@/services/queryHooks"
import IEvent  from "@/types/Event"
import { exportToCSV } from "@/utils/events-csv"
import { useState } from "react"
import toast from "react-hot-toast"


let searchTimeoutRef: string | number | NodeJS.Timeout | undefined = undefined

type TableOptionsProps = {
  events: IEvent[],
  searchTerm: string,
  filterValues: string[], 
  setFilterValues: (values: string[]) => void,
  setSearchTerm: (searchTerm: string) => void,
  setLiveMode: (isLive: boolean) => void
}

export default function TableOptions({events, filterValues, setFilterValues, searchTerm, setSearchTerm, setLiveMode}: TableOptionsProps) {

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { 
    clearTimeout(searchTimeoutRef)

    searchTimeoutRef = setTimeout(async () => {
      setSearchTerm(e.target.value)
    }, 500)
    
  }

  // Export Option
  const exportHandler = () => {
    exportToCSV(events)
    toast.success('Events exported successfully')
  }


  // Live Option
  const [isLive, setIsLive] = useState<boolean>(false)
  const toggleLiveHandler = () => {
    setIsLive(!isLive)
    setLiveMode(!isLive)
    toast.success(`Live mode is ${!isLive ? 'enabled' : 'disabled'}`)
  }

  return (
    <section className='p-8 pb-3 bg-gray-1 flex flex-col lg:flex-row'>
        <input 
            className='w-full px-4 py-2.5 bg-transparent border-2 border-gray-2 rounded-lg placeholder:text-gray-3
                       rounded-t-none border-t-0 lg:border-r-0 lg:border-t-2 lg:rounded-tl-lg lg:rounded-r-none order-2
                       outline-none text-gray-5'
            type="text" 
            placeholder='Search name, email or action...' 
            defaultValue={searchTerm}
            onChange={handleSearch}
        />
        <section                 
            className='w-full bg-transparent border-2 border-gray-2 rounded-lg placeholder:text-gray-3
                       flex items-stretch gap-2 divide-x-2 rounded-b-none lg:rounded-br-lg lg:w-fit lg:rounded-l-none lg:order-2'
        >  
            <button className='w-full relative group px-3 py-2.5 flex justify-center items-center gap-2'>
                <svg className={`w-5 h-5  ${filterValues.length > 0 ? 'text-green-500' : 'text-gray-5'}`}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z"/>
                </svg>
                <span className={filterValues.length > 0 ? 'font-medium text-gray-4' : ''}>Filter</span>
                <div className=" ">
                  <FilterListDropMenu filterValues={filterValues} setFilterValues={setFilterValues}/>
                </div>
            </button>
            <button className='w-full px-3 py-2.5 flex justify-center items-center gap-1.5' onClick={exportHandler}>
                <svg className={`w-[22px] h-[22px] ${events? 'text-green-500' : 'text-gray-5'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clipRule="evenodd"/>
                    <path fillRule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clipRule="evenodd"/>
                </svg>
                <span className={events ? 'font-medium text-gray-4' : ''}>Export</span>
            </button>
            <button className='w-full px-3 py-2.5 flex justify-center items-center gap-2' onClick={toggleLiveHandler}>
                <div className={`w-4 h-4  rounded-full ${isLive ? 'bg-green-500 shadow-md animate-pulse' : 'bg-gray-5'}`}></div>
                <span className={isLive ? 'font-medium text-gray-4' : ''}>Live</span>
            </button>
        </section>
    </section>
  )
}


function FilterListDropMenu({filterValues, setFilterValues}: {filterValues:string[], setFilterValues: (values: string[]) => void}) {
  const { data: emails } = useUsersEmails()

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {    
    const isChecked = e.currentTarget.checked
    const value = e.currentTarget.value
    
    let newSelectedActors = [...filterValues]
    
    if(isChecked){
      newSelectedActors.push(value)      
    } else {
      newSelectedActors = newSelectedActors.filter((actor) => actor !== value)
    }
    setFilterValues(newSelectedActors)
  }
  
  return (
    <div className="absolute hidden group-focus-within:block top-10 right-1/2 translate-x-1/2 z-10 w-fit min-w-56 p-3 pb-4 bg-white rounded-lg shadow">
      <p className="mb-3 text-sm font-medium text-gray-900 uppercase">Actor</p>
      <ul className="h-60 overflow-y-auto pr-2 py-1 space-y-2 text-sm ">
        {
          emails?.map((email) => (
            <li key={email} className="flex items-center pb-1">
              <input 
                id={email} type="checkbox" value={email} 
                onChange={handleFilter}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 inline " 
              />
              <label htmlFor={email} className="ml-2 text-sm font-medium text-gray-900">
                {email}
              </label>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
