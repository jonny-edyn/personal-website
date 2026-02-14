<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="left">
  Jonny Bottomley
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/d807c46f-1984-491c-9b50-7fc2152e53b1/deploy-status)](https://app.netlify.com/sites/dainty-fox-4ec27a/deploys)

This is the repo for my personal website.

## 🚀 Stack

- Gatsby (using React)

<!-- AUTO-GENERATED-CONTENT:END -->

## Run Locally

### 1) Use the project Node version

This repo uses `.nvmrc` (`v19.3.0`).

```bash
nvm install 19.3.0
nvm use
```

### 2) Install dependencies

```bash
npm install
```

### 3) Start the local dev server

```bash
npm run develop
```

Then open: `http://localhost:8000`

### 4) Build and serve production locally (optional)

```bash
npm run build
npm run serve
```

### Useful commands

```bash
npm run clean   # clear Gatsby cache
npm run format  # format JS/TS/JSON/MD files
```

## Spotify Tracks Post (Optional)

The post `My top tracks this month` can show your latest 50 played Spotify tracks.

### Required environment variables

Set these in Netlify (Site settings → Environment variables):

- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REFRESH_TOKEN`

### Notes

- Data is fetched server-side via a Netlify Function at:
  `/.netlify/functions/spotify-recent-tracks`
- The tracks table appears automatically on the
  `my-top-tracks-this-month` post.
