export const apiClient = async <T>(endpoint: string): Promise<T> => {
  const res = await fetch(`https://app.wewantwaste.co.uk/api${endpoint}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};
