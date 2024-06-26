import { IEvent } from '@/types/Event';
import { DummyEvents } from '@/utils/constants';
import { generateRandomCode } from '@/utils/helpers';
import { NextRequest } from 'next/server';


export async function POST(request: NextRequest) {
  try {
    const eventData = await request.json(); // Assuming JSON body data for event creation

    const newEvent: IEvent = 
    {
      id: 'evt_'+generateRandomCode(),
      object: "event",
      actor_id: "user_3VG74289PUA2",
      actor_name: "Ali Salah",
      group: "instatus.com",
      action: {
        id: "evt_action_"+generateRandomCode(13),
        object: "event_action",
        name: "user.login_succeeded"
      },
      target_id: "user_DOKVD1U3L030",
      target_name: "ali@instatus.com",
      location: "105.40.62.95",
      occurred_at: new Date().toISOString(),
      metadata: {
        redirect: "/setup",
        description: "User login succeeded.",
        x_request_id: "req_W1Y13QOHMI5H"
      }
    }

    return new Response(JSON.stringify({ status: true, message: 'Event created successfully', event: newEvent }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ status: false, message: 'Failed to create event' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}




interface EventQueryParams {
  page?: number; // Pagination: Page number
  limit?: number; // Pagination: Items per page
  searchTerm?: string; // Search: searchTerm from search bar
  emails?: string; // Filter: event.target_name
}

export async function GET(request: NextRequest) {
  try {
    const queryParams: EventQueryParams = Object.fromEntries(new URL(request.url).searchParams);

    // Pagination
    const page = queryParams.page ? parseInt(queryParams.page.toString(), 10) : 1;
    const limit = queryParams.limit ? parseInt(queryParams.limit.toString(), 10) : 5;
    const offset = (page - 1) * limit;

    // Filtering and Searching
    let filteredEvents : IEvent[] = DummyEvents;

    if (queryParams.searchTerm) {
      const searchQuery = queryParams.searchTerm.toLowerCase();
      filteredEvents = filteredEvents.filter(event => 
        event.actor_name.toLowerCase().includes(searchQuery) ||
        event.target_name.toLowerCase().includes(searchQuery) ||
        event.action.name.toLowerCase().includes(searchQuery)
      );
    }

    if (queryParams.emails) {
      const emails: string[] = queryParams.emails.split(',');
      filteredEvents = filteredEvents.filter(event => emails.includes(event.target_name));
    }

    const paginatedEvents = filteredEvents.slice(offset, offset + limit);

    return new Response(JSON.stringify(paginatedEvents), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ status: false, message: 'Failed to fetch events' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
