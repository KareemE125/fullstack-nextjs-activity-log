import useSWR from "swr"
import { IEvent } from "@/types/Event"

export function useUsersEmails(options?: object){
    return useSWR<string[]>('/api/users/emails', {...options})
}

export function useEvents(options?: object){
    return useSWR<{events: IEvent[]}>('/api/events',{...options})
}


// STEP(1): in src/app/page.tsx
// STEP(2): use this hook instead to prefetch events data (Hydration)
// export function useEvents(){
//     return useSWR<{events: IEvent[]}>('/events', {revalidateOnMount: false})
// }