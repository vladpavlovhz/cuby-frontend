<script>
  import { PUBLIC_VITE_API_BASE_URL } from "$env/static/public";
  export let events = [];

  export async function load() {
    try {
      const response = await fetch(`${PUBLIC_VITE_API_BASE_URL}/events`);

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
