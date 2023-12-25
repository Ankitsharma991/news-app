type Category =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";

type Pagination = {
  count: Int16Array;
  limit: Int16Array;
  offset: Int16Array;
  total: Int16Array;
};

type Article = {
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};
