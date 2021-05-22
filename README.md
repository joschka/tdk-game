# Spiel Klimakanzler:in

https://www.klimakanzler.in

Skip Intro: https://www.klimakanzler.in/?intro=0

## Development

You need `node` and `npm` installed.

```
  git clone git@github.com:tagdesklimas/tdk-game.git
  cd tdk-game
  npm start
```

Go to `localhost:4444`.

## Tasks

### Production build

```
  npm run build
```

### Analyze bundle

Will open browser window.

```
  ANALYZE_BUNDLE=true npm run build
```

### Prettify

```
  prettier --write .
```

### Upgrade npm packages

```
  ncu -u
```

### Zip dist folder

Zip file created in `/tmp`.

```
  npm run zip
```
