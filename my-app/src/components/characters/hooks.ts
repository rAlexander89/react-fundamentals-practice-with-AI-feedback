import { useState, useEffect } from 'react';
import { type StarWarsCharacter, type Pages, type StarWarsApiResponse } from './characters';

export function useCharacters() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [characters, setCharacters] = useState<StarWarsCharacter[]>([]);
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const [pages, setPages] = useState<Pages>({ previous: null, next: null });

  useEffect(() => {
    const abortController = new AbortController();
    const MAX_RETRIES = 3;

    const fetchData = async (attempts = 0) => {
      try {
        setLoading(true);
        setError(null);

        let url = 'https://swapi.dev/api/people';
        if (currentPage) {
          url = currentPage;
        }

        const response = await fetch(url, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          const error = `${response.status}: ${response.statusText}`;
          const httpError = new Error(error);
          httpError.cause = response.status;
          throw httpError;
        }

        const data: StarWarsApiResponse = await response.json();

        setPages({
          previous: data.previous,
          next: data.next,
        });
        setCharacters(data.results);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== 'AbortError') {
          const status = err.cause as number;
          if (status >= 400 && status < 500) {
            setError(err.message);
            return;
          }
          if (attempts >= MAX_RETRIES) {
            setError(err.message);
            return;
          }

          const delay = Math.pow(2, attempts) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
          await fetchData(attempts + 1);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [currentPage]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error]);

  const setPage = (page: string | null) => {
    if (!page) {
      return;
    }
    setCurrentPage(page);
  };

  return {
    error,
    loading,
    characters,
    pages: {
      previous: pages.previous,
      current: currentPage,
      next: pages.next,
    },
    setPage,
  };
}
