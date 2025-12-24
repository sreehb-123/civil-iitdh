/**
 * Custom Hook: useStrapiData
 * Handles fetching data from Strapi API
 * @param {string} endpoint - API endpoint
 * @param {array} dependencies - React dependencies array
 * @returns {Object} { data, loading, error }
 */

import { useEffect, useState } from 'react';
import apiClient from '../utils/apiClient';
import { LOADING_STATES } from '../utils/constants';

export const useStrapiData = (endpoint, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get(endpoint);
        setData(response.data.data || response.data);
        setError(null);
      } catch (err) {
        console.error(`Error fetching from ${endpoint}:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

/**
 * Custom Hook: useFetchDataWithFallback
 * Fetches data and provides fallback
 */
export const useFetchDataWithFallback = (endpoint, fallbackData = null) => {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(endpoint);
        setData(response.data.data || response.data);
      } catch (err) {
        console.error(`Error fetching from ${endpoint}:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};
