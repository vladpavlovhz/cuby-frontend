import { PUBLIC_VITE_API_BASE_URL } from '$env/static/public';
export const load = async ({ params }) => {

    const fetchEvent = async() => {
        const response = await fetch(`${PUBLIC_VITE_API_BASE_URL}/events/${params.id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch event data: ${response.statusText}`);
        }
        
        const eventData = await response.json();
        return eventData;
    };

    return {
        event: fetchEvent(),
    };
};
