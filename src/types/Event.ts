export default interface IEvent {
  id?: string;
  object: string;
  actor_id?: string;
  actor_name: string;
  group: string;
  action: {
    id?: string;
    object: string;
    name: string;
  }
  target_id?: string;
  target_name: string;
  location: string;
  occurred_at: Date | string;
  metadata: {
    redirect: string;
    description: string;
    x_request_id?: string;
  }
}
