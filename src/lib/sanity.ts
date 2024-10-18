import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'qtkuiz6y',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2024-10-18'
});
