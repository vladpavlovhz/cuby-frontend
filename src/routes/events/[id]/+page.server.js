import { PUBLIC_VITE_API_BASE_URL } from '$env/static/public';
export const load = async ({ params }) => {

    const fetchEvent = async() => {
        const response = await fetch(`${PUBLIC_VITE_API_BASE_URL}/events/${params.id}`, {
            headers: {
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',  
            },  
        });

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
