import IEvent from "@/types/Event";
import EventQueryParams from "@/types/EventQueryParams";



class InstaLog {
  private secretKey: string;
  private apiUrl: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
    this.apiUrl = "/api/events";
  }

  async createEvent(eventObject: IEvent) {
    const response = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.secretKey}`,
      },
      body: JSON.stringify(eventObject),
    });

    if (!response.ok) {
      return { status: false, message: "Failed to create event" };
    }

    return response.json();
  }

  async listEvents(params: EventQueryParams) {
    const queryParams = new URLSearchParams(params as any).toString();
    const response = await fetch(`${this.apiUrl}?${queryParams}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.secretKey}`,
      },
    });

    if (!response.ok) {
      return { status: false, message: "Failed to fetch events" };
    }

    return response.json();
  }
}

export default InstaLog;
