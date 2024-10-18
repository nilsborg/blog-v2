import { client } from '$lib/sanity';
import groq from 'groq';

const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "date": _createdAt,
    images[] {
      _key,
      alt,
      asset-> {
        url,
        metadata {
          lqip,
          dimensions {
            width,
            height,
            aspectRatio
          },
        }
      }
    }
  }
`;

export async function load() {
	const posts = await client.fetch(POSTS_QUERY);

	return {
		posts
	};
}
