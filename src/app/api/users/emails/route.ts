import { DummyEvents } from "@/utils/constants";

export async function GET() {
    try {
      let emails : string[] = DummyEvents.map(event => event.target_name);

    
      return new Response(JSON.stringify(emails), {
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