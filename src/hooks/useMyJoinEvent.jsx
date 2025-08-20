import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const useMyJoinEvent = () => {
  const { user } = useContext(AuthContext);

  const fetchMyEvents = async () => {
    const res = await fetch(`${API_BASE}/api/events/user/${user.email}/joined`);
    if (!res.ok) {
      throw new Error('Failed to fetch events');
    }
    return res.json();
  };

  const { data = [], isLoading, error, refetch } = useQuery({
    queryKey: ['myJoinedEvents', user?.email],
    queryFn: fetchMyEvents,
    enabled: !!user?.email,
    staleTime: 0,
    cacheTime: 0,
    refetchOnWindowFocus: true
  });

  return { events: data, isLoading, error, refetch };
};

export default useMyJoinEvent;
