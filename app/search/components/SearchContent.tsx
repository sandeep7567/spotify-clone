"use client";

import React from 'react';
import { Song } from '@/types';
import MediaItem from '@/components/MediaItem';
import LikeButton from '@/components/LikeButton';
import useOnPlay from '@/hooks/useOnPlay';


interface SearchContentProps {
  songs: Song[];
};

const SearchContent: React.FC<SearchContentProps> = ({
  songs,
}) => {
  const onPlay = useOnPlay(songs);
  if (songs.length === 0) {
    <div className='flex flex-col px-6 gap-y-2 text-neutral-400 w-full'>
      No Songs Found
    </div>
  }
  
  return (
    <div
      className='flex flex-col gap-y-2 w-full px-6'
    >
      {songs.map((song) => (
        <div
          key={song.id}
          className='flex items-center gap-x-4 w-full'
        >
          <div className='flex-1'>
            <MediaItem
              onClick={(id: string) => {onPlay(id)}}
              data={song}
            />
          </div>
          {/* add like button here */}
          <LikeButton
            songId={song.id}
          />
        </div>
      ))}
    </div>
  )
};

export default SearchContent;