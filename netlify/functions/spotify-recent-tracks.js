const SpotifyWebApi = require("spotify-web-api-node")

const toNumberInRange = (value, fallback, min, max) => {
  const parsed = Number.parseInt(value, 10)
  if (Number.isNaN(parsed)) return fallback
  return Math.min(Math.max(parsed, min), max)
}

exports.handler = async event => {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

  if (!clientId || !clientSecret || !refreshToken) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message:
          "Spotify env vars are missing. Set SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET and SPOTIFY_REFRESH_TOKEN.",
      }),
    }
  }

  const spotifyApi = new SpotifyWebApi({
    clientId,
    clientSecret,
  })
  spotifyApi.setRefreshToken(refreshToken)

  const limit = toNumberInRange(event.queryStringParameters?.limit, 50, 1, 50)

  try {
    const tokenResponse = await spotifyApi.refreshAccessToken()
    spotifyApi.setAccessToken(tokenResponse.body.access_token)

    const recentlyPlayed = await spotifyApi.getMyRecentlyPlayedTracks({ limit })

    const tracks = recentlyPlayed.body.items.map(item => {
      const artists = (item.track.artists || [])
        .map(artist => artist.name)
        .join(", ")
      const playedAt = item.played_at
      const playedAtLabel = new Date(playedAt).toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })

      return {
        name: item.track.name,
        artist: artists,
        playedAt,
        playedAtLabel,
      }
    })

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tracks }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message:
          "Spotify request failed. Check token permissions and env vars, then retry.",
        detail: error?.message || "Unknown error",
      }),
    }
  }
}
