export interface Post {
  slug: string;
  title: string;
  date: string;
  dateGroup: string;
  dateId: string;
  description: string;
  tags: string[];
  category: string;
}

export const posts: Post[] = [
  // Add posts here as you write them
  // Posts will automatically appear on both /writing and home page
];
