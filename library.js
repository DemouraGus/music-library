const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
       printplaylists: function() {
              for (const playlistId in this.playlists) {
                     const playlist = this.playlists[playlistId];
                     console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
              }
                    
       },
       printTracks: function() {
              for (const trackId in this.tracks) {
                     const track = this.tracks[trackId];
                     console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
              }
       
       },
       printPlaylist: function(playlistId) {
              console.log(`${playlistId}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`)

       for (const trackId of this.playlists[playlistId].tracks) {
              const track = this.tracks[trackId];
              console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
               }
       },
       addTrackToPlaylist: function(trackId, playlistId) {
              this.playlists[playlistId].tracks.push(trackId);

       },
       addTrack: function(name, artist, album) {
              let newTrackId = `t${generateUid()}`;
       
              this.tracks[newTrackId] = { id: newTrackId, name: name, artist: artist, album: album };
       },
       addPlaylist: function(name) {
              let newPlaylistId = `p${generateUid()}`;

              this.playlists[newPlaylistId] = { id: newPlaylistId, name: name, tracks: []};           
       }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
// const printPlaylists = function() {
//        for (const playlistId in library.playlists) {
//               const playlist = library.playlists[playlistId];
//               console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
//        }
// };


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
// const printTracks = function() {
//        for (const trackId in library.tracks) {
//               const track = library.tracks[trackId];
//               console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
//        }
// };


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function(playlistId) {
//        console.log(`${playlistId}: ${library.playlists[playlistId].name} - ${library.playlists[playlistId].tracks.length} tracks`)

//        for (const trackId of library.playlists[playlistId].tracks) {
//               const track = library.tracks[trackId];
//               console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
//        }
// };


// adds an existing track to an existing playlist
// const addTrackToPlaylist = function(trackId, playlistId) {
//        library.playlists[playlistId].tracks.push(trackId);
// }


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
// const addTrack = function(name, artist, album) {
//        let newTrackId = `t${generateUid()}`;
       
//        library.tracks[newTrackId] = { id: newTrackId, name: name, artist: artist, album: album };
// }


// adds a playlist to the library
// const addPlaylist = function(name) {
//        let newPlaylistId = `p${generateUid()}`;

//        library.playlists[newPlaylistId] = { id: newPlaylistId, name: name, tracks: []};
// }


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}

// printPlaylists(library);
// printTracks(library);
// addTrackToPlaylist("t03", "p01");
// printPlaylists(library);
// printPlaylist("p01");
// addTrack("Yoshimi", "Flaming Lips", "Yoshimi");
// printTracks(library);
// addPlaylist("Running");
// printPlaylists(library);