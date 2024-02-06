import {
  HomeWrapper,
  PostList,
  PostPagination,
} from '@modules/main/components';
import React from 'react';

export const HomePage = () => {
  return (
    <HomeWrapper>
      <PostList />
      <PostPagination />
    </HomeWrapper>
  );
};
