
export default function TableRecordSkeleton() {
  return (
    <tr className="animate-pulse">
      <td className='p-5 pl-8'>
        <div className="w-full flex items-center gap-2">
          <div className='w-[26px] h-[26px] rounded-full bg-gray-1'></div>
          <div className='w-3/4 h-5 rounded pr-6 bg-gray-1'></div>
        </div>
      </td>
      <td className='p-5'><div className='w-3/4 h-5 rounded pr-6 bg-gray-1'></div></td>
      <td className='p-5 pr-8'><div className='w-3/4 h-5 rounded pr-6 bg-gray-1'></div></td>
    </tr>
  )
}
