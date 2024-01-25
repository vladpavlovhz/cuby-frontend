<script>
  import { PUBLIC_VITE_API_BASE_URL } from "$env/static/public";
  export let events = [];

  export async function load() {
    try {
      const response = await fetch(`${PUBLIC_VITE_API_BASE_URL}/events`, {
        headers: {
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        },
      });

      if (!response.ok) {
        console.error('Error fetching events:', response.status, response.statusText);
        throw new Error('Failed to fetch events');
      }

      events = await response.json();
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  }
</script>

<main>
{events}
</main>
