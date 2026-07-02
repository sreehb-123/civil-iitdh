import apiClient from './apiClient';

const VISITOR_COUNTER_SESSION_KEY = 'civil_iitdh_visitor_counter_seen';
const VISITOR_COUNTER_ENDPOINT = process.env.REACT_APP_VISITOR_COUNTER_ENDPOINT || '/visitor-counter';

const extractPayload = (responseData) => {
  if (!responseData) {
    return null;
  }

  if (responseData.data !== undefined) {
    return Array.isArray(responseData.data) ? responseData.data[0] ?? null : responseData.data;
  }

  return responseData;
};

const getCountValue = (payload) => {
  const value =
    payload?.count ??
    payload?.visitors ??
    payload?.value ??
    payload?.totalVisitors ??
    payload?.attributes?.count;

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

export const getVisitorCount = async () => {
  const response = await apiClient.get(VISITOR_COUNTER_ENDPOINT);
  return getCountValue(extractPayload(response.data));
};

export const incrementVisitorCount = async (currentCount = 0) => {
  const nextCount = currentCount + 1;
  const response = await apiClient.put(VISITOR_COUNTER_ENDPOINT, {
    data: { count: nextCount },
  });

  const payload = extractPayload(response.data);
  return getCountValue(payload) || nextCount;
};

export const hasRecordedVisitorSession = () => {
  if (typeof window === 'undefined') {
    return true;
  }

  return window.sessionStorage.getItem(VISITOR_COUNTER_SESSION_KEY) === 'true';
};

export const markVisitorSession = () => {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.setItem(VISITOR_COUNTER_SESSION_KEY, 'true');
};