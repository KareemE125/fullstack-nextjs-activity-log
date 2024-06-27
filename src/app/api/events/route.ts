export const dynamic = 'force-dynamic'

import IEvent  from '@/types/Event';
import EventQueryParams from '@/types/EventQueryParams';
import { generateRandomCode } from '@/utils/helpers';
import { NextRequest } from 'next/server';
import prisma from '../../../../prisma/client';


export async function POST(request: NextRequest) {
  try {
    const event: IEvent = await request.json();
    
    // Create the Action object
    const action = await prisma.action.create({
      data: {
        id: `evt_action_${generateRandomCode(11)}`, // Example ID generation
        object: event.action.object,
        name: event.action.name
      },
    });

    // Create the Metadata object
    const metadata = await prisma.metadata.create({
      data: {
        redirect: event.metadata.redirect,
        description: event.metadata.description,
        x_request_id: `req_${generateRandomCode(12)}`,
      },
    });

    // Create the Event object using the IDs of Action and Metadata
    const fullEvent = await prisma.event.create({
      data: {
        id: `evt_${generateRandomCode(12)}`, // Example ID generation
        object: event.object,
        actor_id: `user_${generateRandomCode(12)}`,
        actor_name: event.actor_name,
        group: event.group,
        actionId: action.id,
        target_id: `user_${generateRandomCode(12)}`,
        target_name: event.target_name,
        location: event.location,
        occurred_at: new Date().toISOString(),
        metadataId: metadata.id, 
      },
    });
    
    const newEvent: IEvent = {
      ...fullEvent,
      action: action,
      metadata: metadata,
    }

    return new Response(JSON.stringify({ status: true, message: 'Event created successfully', event: newEvent }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ status: false, message: 'Failed to create event', error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function GET(request: NextRequest) {
  try {
    const queryParams: EventQueryParams = Object.fromEntries(new URL(request.url).searchParams);

    let filteredEvents : IEvent[] = await prisma.event.findMany({
      include: {
        action: true,
        metadata: true
      },
      orderBy: {
        occurred_at: 'desc'
      }
    })
    
    // Pagination
    const page = queryParams.page ? parseInt(queryParams.page.toString(), 10) : 1;
    const limit = queryParams.limit ? parseInt(queryParams.limit.toString(), 10) : 5;
    const offset = (page - 1) * limit;

    // Filtering and Searching
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
    return new Response(JSON.stringify({ status: false, message: 'Failed to fetch events', error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
