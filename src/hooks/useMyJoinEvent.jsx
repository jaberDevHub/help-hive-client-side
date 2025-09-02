import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useFetch from './useFetch';

const useMyJoinEvent = () => {
  const { user } = useContext(AuthContext);
  const fetch = useFetch();

  const fetchMyEvents = async () => {
    if (!user?.email) return [];
    return fetch.get(`/api/events/user/${user.email}/joined`);
  };

  const { data = [], isLoading, error, refetch } = useQuery({
    queryKey: ['myJoinedEvents', user?.email],
    queryFn: fetchMyEvents,
    enabled: !!user?.email,
  });

  return { events: data, isLoading, error, refetch };
};

export default useMyJoinEvent;