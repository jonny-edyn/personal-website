import * as React from "react"

const RecentTracks = () => {
  const [state, setState] = React.useState({
    status: "loading",
    tracks: [],
    message: "",
  })

  React.useEffect(() => {
    let cancelled = false

    const loadTracks = async () => {
      try {
        const response = await fetch(
          "/.netlify/functions/spotify-recent-tracks?limit=50"
        )
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data?.message || "Could not load tracks")
        }

        if (!cancelled) {
          setState({
            status: "success",
            tracks: data.tracks || [],
            message: "",
          })
        }
      } catch (error) {
        if (!cancelled) {
          setState({
            status: "error",
            tracks: [],
            message:
              error?.message ||
              "Spotify data is unavailable right now. Please try again later.",
          })
        }
      }
    }

    loadTracks()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="recent-tracks" aria-label="Recent Spotify tracks">
      <h3>Latest 50 Spotify tracks</h3>
      {state.status === "loading" && <p>Loading tracks...</p>}
      {state.status === "error" && <p>{state.message}</p>}
      {state.status === "success" && state.tracks.length === 0 && (
        <p>No tracks found.</p>
      )}
      {state.status === "success" && state.tracks.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Artist</th>
              <th>Track</th>
              <th>Played</th>
            </tr>
          </thead>
          <tbody>
            {state.tracks.map((track, index) => (
              <tr key={`${track.name}-${track.playedAt}-${index}`}>
                <td>{index + 1}</td>
                <td>{track.artist}</td>
                <td>{track.name}</td>
                <td>{track.playedAtLabel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}

export default RecentTracks
