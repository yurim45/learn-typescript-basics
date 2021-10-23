{
  // Pick Type ⛏
  // 기존 type에서 일부만 Pick해서 type을 만들수 있다

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, 'id' | 'title'>;  // 기존 type Video에서 일부만 Pick해서 type VideoMetadata을 정의

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
