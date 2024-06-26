'use client'
import { useEvents } from '@/services/queryHooks'
import TableOptions from "@/components/activity-table/TableOptions";
import TableRecord from '@/components/activity-table/TableRecord'
import PlaceHolder from '@/components/shared/Placeholder'
import { createArrayOfSize, formatDate } from '@/utils/helpers';
import TableRecordSkeleton from './TableRecordSkeleton';
import { useEffect, useState } from 'react';
import { CACHE_INVALIDATION_TIME } from '@/utils/constants';
import { IEvent } from '@/types/Event';
import toast from 'react-hot-toast';
import useSWRInfinite from 'swr/infinite';


const PAGE_SIZE = 5;

export default function ActivityTable() {
  
  const [swrOptions, setSwrOptions] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [filterValues, setFilterValues] = useState<string[]>([])

  const { data, isLoading, error, size, setSize, isValidating } 
  = useSWRInfinite(
    (index) => `/api/events?page=${index + 1}&limit=${PAGE_SIZE}&searchTerm=${searchTerm}&emails=${filterValues.toString()}`,
    swrOptions
  )

  const events: IEvent[] = data ? [].concat(...data) : [];
  const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;
  

  const setLiveMode = (isLive: boolean) => {
    if(isLive) {
      setSwrOptions({refreshInterval: 1000})
    } else {
      setSwrOptions({refreshInterval: CACHE_INVALIDATION_TIME})
    }
  }

  if(error) {
    toast.error(error.toString())
    return <PlaceHolder text='Something went wrong!' />
  }

  return (
    <section className="max-w-6xl mx-auto border-2 border-gray-1 rounded-lg">
    {
      <section>
        <TableOptions 
          events={events} 
          setLiveMode={setLiveMode}
          filterValues={filterValues}
          setFilterValues={setFilterValues} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        {
          isLoading 
          ? <TableLayout>
              {createArrayOfSize(6).map(index => <TableRecordSkeleton key={index}/>)} 
            </TableLayout>
          : isEmpty 
            ? <PlaceHolder text='No Activities Yet!' /> 
            : <TableLayout>
                {events.map((event) => <TableRecord key={event.id} event={event} />)}
                {isLoadingMore && createArrayOfSize(3).map(index => <TableRecordSkeleton key={index}/>)}
              </TableLayout>
        }
        <button 
          className={`w-full bg-gray-1 uppercase text-center p-4 ${isReachingEnd? ' text-gray-2' : ' text-gray-4 font-semibold'}`}
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {
            isLoadingMore 
            ? "loading . . ."
            : isReachingEnd ? "no more events" : "load more"
          }
        </button>
      </section>
   
    }
    </section>
  )
}

function TableLayout({children}){
  return(
    <table className="w-full">
      <thead className="bg-gray-1">
      <tr>
          <th className="p-4 pl-8 text-left uppercase text-gray-4">Actor</th>
          <th className="p-4 text-left uppercase text-gray-4">Action</th>
          <th className="p-4 pr-8 text-left uppercase text-gray-4">Date</th>
      </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}
