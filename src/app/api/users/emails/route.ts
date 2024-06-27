export const dynamic = 'force-dynamic'
import prisma from "../../../../../prisma/client"

export async function GET() {
    try {
      let emails: string[] = await prisma.event.findMany({
        distinct: ['target_name'],
        select: {
          target_name: true
        }
      }).then((res) => res.map((email) => email.target_name));
    
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