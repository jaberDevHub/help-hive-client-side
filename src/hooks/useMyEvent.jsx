import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const useMyEvent = () => {
  const { user } = useContext(AuthContext);

  const fetchMyEvents = async () => {
    const res = await fetch(`${API_BASE}/api/events/user/${user.email}`);
    if (!res.ok) {
      throw new Error('Failed to fetch events');
    }
    return res.json();
  };

  const { data = [], isLoading, error, refetch } = useQuery({
    queryKey: ['mt event', user?.email],
    queryFn: fetchMyEvents,
    enabled: !!user?.email,
    staleTime: 0,
    cacheTime: 0,
    refetchOnWindowFocus: true,
  });

  return { events: data, isLoading, error, refetch };
};

export default useMyEvent;
