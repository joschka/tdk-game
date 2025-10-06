# Spiel Klimakanzler:in

**Wenn keine Änderungen gemacht werden sollen, den Code aus dem `/dist` auf einen Webserver kopieren. Die `index.html`-Datei ist der Einstieg. Von da werden dann die JS-Dateien und Bilder etc. geladen. Es funktioniert nicht, wenn das Spiel in einem Ordner liegt, also z.B. "http://lala.de/spiel/" geht nicht. "http://spiel.lala.de" geht.**




https://gesetzesspiel.germanzero.de

## Development

You need `node` and `npm` installed.

```
  git clone git@github.com:joschka/tdk-game.git
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
