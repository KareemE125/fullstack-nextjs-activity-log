'use client'
import { useMemo, useState } from "react";
import { formatDate } from "@/utils/helpers";
import { IEvent } from "@/types/Event";
import GradientAvatar from "@/components/activity-table/GradientAvatar";
import EventDetailsCard from "@/components/activity-table/EventDetailsCard";
import '@/styles/tableStyles.css'

export default function TableRecord({ event }: { event: IEvent }) {

  const [openDetails, setOpenDetails] = useState<boolean>(false)
  const letter = useMemo(() => event.target_name?.toLocaleUpperCase().slice(0, 1), [event.target_name])


  return (
    <tr id={event.id} className="relative text-gray-6 hover:bg-gray-200" onClick={() => setOpenDetails(!openDetails) }>
      <td className={`p-5 pl-8 transition-all duration-200 ${openDetails && 'table-record-pb'}`}>
        <div className="flex items-center gap-2">
          <GradientAvatar letter={letter} />
          <span>{event.target_name}</span>
        </div>
      </td>
      <td className={`p-5 transition-all duration-200 ${openDetails && 'table-record-pb'}`}>
        {event.action.name}
      </td>
      <td className={`p-5 pr-8 transition-all duration-200 ${openDetails && 'table-record-pb'}`}>
        {formatDate(event.occurred_at)}
        <EventDetailsCard event={event} isOpened={openDetails} closeDetails={() => setOpenDetails(false)} />
      </td>
    </tr>
  )
}
