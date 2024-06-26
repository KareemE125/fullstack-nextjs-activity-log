import { IEvent } from '@/types/Event'
import { formatDate } from '@/utils/helpers'


type EventDetailsCardProps = {
    event: IEvent, 
    isOpened: boolean,
    closeDetails: () => void
}

export default function EventDetailsCard({event, isOpened, closeDetails}: EventDetailsCardProps) {
  return (
    <section 
        className={`absolute p-8 pt-0 top-16 border-2 border-gray-1 rounded-lg bg-white text-wrap transition-all duration-200 
                    ${isOpened ? 'z-10 table-details-card-h -left-5 -right-5 opacity-100' : '-z-10 h-0 left-0 right-0 opacity-0 '}`}
        onClick={(e) => e.stopPropagation()}
    >
        <div className='flex justify-end mt-2 -mr-6'>
            <button onClick={closeDetails} >
                <svg className="w-5 h-5 text-gray-3 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>
            </button>
        </div>
        <section className='w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 overflow-y-auto '>
            <ActorDetails name={event.actor_name} email={event.target_name} id={event.actor_id}/>
            <ActionDetails name={event.action.name} object={event.action.object} id={event.action.id}/>
            <DateDetails date={formatDate(event.occurred_at)} />
            <MetaDataDetails redirect={event.metadata.redirect} description={event.metadata.description} xRequestId={event.metadata.x_request_id} />
            <TargetDetails name={event.target_name} location={event.location} id={event.target_id} />
        </section>
    </section>
  )
}


function ActorDetails({name, email, id}: {name: string, email: string, id: string}){
    return (
        <div className='text-gray-3'>
                <h3 className='text-gray-4 font-medium uppercase mb-2'>Actor</h3>
                <div>
                    <table className='w-full text-sm'>
                        <tbody>
                            <tr>
                                <td className='py-1'>Name</td>
                                <td className='text-gray-6'>{name}</td>
                            </tr>
                            <tr>
                                <td className='py-1'>Email</td>
                                <td className='text-gray-6'>{email}</td>
                            </tr>
                            <tr>
                                <td className='py-1'>ID</td>
                                <td className='text-gray-6'>{id}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

function ActionDetails({name, object, id}: {name: string, object: string, id: string}){
    return (
        <div className='text-gray-3'>
                <h3 className='text-gray-4 font-medium uppercase mb-2'>Action</h3>
                <div>
                    <table className='w-full text-sm'>
                        <tbody>
                            <tr>
                                <td className='py-1'>Name</td>
                                <td className='text-gray-6'>{name}</td>
                            </tr>
                            <tr>
                                <td className='py-1'>Object</td>
                                <td className='text-gray-6'>{object}</td>
                            </tr>
                            <tr>
                                <td className='py-1'>ID</td>
                                <td className='text-gray-6'>{id}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

function DateDetails({date}: {date: string}){
    return (
        <div className='text-gray-3'>
                <h3 className='text-gray-4 font-medium uppercase mb-2'>Date</h3>
                <div>
                    <table className='w-full text-sm'>
                        <tbody>
                            <tr>
                                <td className='py-1'>Readable</td>
                                <td className='text-gray-6'>{date}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

function MetaDataDetails({redirect, description, xRequestId}: {redirect: string, description: string, xRequestId: string}){
    return (
        <div className='text-gray-3'>
                <h3 className='text-gray-4 font-medium uppercase mb-2'>MetaData</h3>
                <div>
                    <table className='w-full text-sm'>
                        <tbody>
                            <tr>
                                <td className='py-1'>Redirect</td>
                                <td className='text-gray-6'>{redirect}</td>
                            </tr>
                            <tr>
                                <td className='py-1'>Description</td>
                                <td className='text-gray-6'>{description}</td>
                            </tr>
                            <tr>
                                <td className='py-1'>X Request Id</td>
                                <td className='text-gray-6'>{xRequestId}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

function TargetDetails({name, location, id}: {name: string, location: string, id: string}){
    return (
        <div className='text-gray-3'>
                <h3 className='text-gray-4 font-medium uppercase mb-2'>Target</h3>
                <div>
                    <table className='w-full text-sm'>
                        <tbody>
                            <tr>
                                <td className='py-1'>Name</td>
                                <td className='text-gray-6'>{name}</td>
                            </tr>
                            <tr>
                                <td className='py-1'>Location</td>
                                <td className='text-gray-6'>{location}</td>
                            </tr>
                            <tr>
                                <td className='py-1'>ID</td>
                                <td className='text-gray-6'>{id}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}