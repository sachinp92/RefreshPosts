import {FlatList, RefreshControl} from 'react-native';
import React, {memo, useRef} from 'react';

import PostPreview from '../../components/PostPreview';
import {usePosts, useThemeState} from '../../redux/hooks/useReduxSelectors';
import {IPost} from '../../types';
import useFeed from '../../hooks/useFeed';
import {FeedContainer, ScrollToTopText} from './styles';

const MemoizedPostPreview = memo(PostPreview);

const FeedPost = () => {
  const {posts} = usePosts();
  const {getNewerPosts, getOlderPosts, refreshing} = useFeed();
  const flatListRef = useRef<FlatList<any>>(null);

  const currentTheme = useThemeState();

  return (
    <FeedContainer themeValue={currentTheme}>
      <FlatList
        ref={flatListRef}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getNewerPosts} />
        }
        data={posts}
        keyExtractor={item => 'post-' + item.id.toString()}
        renderItem={({item}: {item: IPost}) => (
          <MemoizedPostPreview
            id={item.id}
            title={item.title}
            body={item.body}
            userId={item.userId}
          />
        )}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={21}
        onEndReached={getOlderPosts}
        onEndReachedThreshold={0.6}
        showsVerticalScrollIndicator={false}
      />

      <ScrollToTopText
        themeValue={currentTheme}
        onPress={() => {
          flatListRef.current?.scrollToOffset({offset: 0, animated: true});
        }}>
        Back To Top
      </ScrollToTopText>
    </FeedContainer>
  );
};

export default FeedPost;
