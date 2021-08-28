export default {
  youtubeDLConfig: {
    quality: 'highestaudio',
  },
  flags: {
    cacheFile: '.spdlcache',
    cookieFile: 'cookies.txt',
    downloadReport: true,
    output: process.cwd(),
    extraSearch: '',
    password: '',
    username: '',
    savedAlbums: false,
    savedPlaylists: false,
    savedTracks: false,
    savedShows: false,
    outputOnly: false,
  },
};
