import {useCallback, useEffect, useState} from 'react';

import useAppDispatch from '../redux/hooks/useAppDispatch';
import {fetchNewerPosts, fetchOlderPosts} from '../redux/actions';

const useFeed = () => {
  const [start, setStart] = useState(20);
  const [end, setEnd] = useState(30);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOlderPosts(start, end));
  }, [dispatch, start, end]);

  const getNewerPosts = useCallback(async () => {
    setRefreshing(true);
    try {
      setStart(prevStart => Math.max(prevStart - 10, 0)); // Don't go below 0
      await dispatch(
        fetchNewerPosts(Math.max(start - 10, 0), Math.max(end - 10, 10)),
      );
    } catch (error) {
      console.error('An error occurred while refreshing posts:', error);
      throw new Error('Failed to refresh posts');
    } finally {
      setRefreshing(false);
    }
  }, [dispatch, start, end]);

  const getOlderPosts = useCallback(async () => {
    setRefreshing(true);
    try {
      setEnd(prevEnd => Math.min(prevEnd + 10, 100)); // Don't go over 100
      await dispatch(
        fetchOlderPosts(Math.min(start + 10, 90), Math.min(end + 10, 100)),
      );
    } catch (error) {
      console.error('An error occurred while fetching older posts:', error);
      throw new Error('Failed to fetch older posts');
    } finally {
      setRefreshing(false);
    }
  }, [dispatch, start, end]);

  return {
    getNewerPosts,
    getOlderPosts,
    refreshing,
  };
};

export default useFeed;
