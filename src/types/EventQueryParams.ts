export default interface EventQueryParams {
  page?: number; // Pagination: Page number
  limit?: number; // Pagination: Items per page
  searchTerm?: string; // Search: searchTerm from search bar
  emails?: string; // Filter: event.target_name
}
