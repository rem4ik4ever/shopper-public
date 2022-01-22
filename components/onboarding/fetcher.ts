export interface FetcherProps {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  url: string;
  body: any;
}
export const fetcher = async ({ method, url, body }: FetcherProps) => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};
