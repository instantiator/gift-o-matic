# puzzle-matic

Puzzle-matic is a general purpose puzzle app.

It is a React web application that's optimised for server side rendering.

The screen layout is heavily optimised for mobile dimensions. It's not tested or ready for desktop.

## Test, build, and deploy

| Script | Purpose |
|-|-|
| `run-dev.sh` | Serve a local instance of the app using NextJS |
| `build.sh` | Build a static release of the app in `puzzle-matic/out` |
| `run-build.sh` | Build a static release of the app and serve it with a static web server |

Both `run-dev.sh` and `run-build.sh` serve the site at http://localhost:3000 by default.

You can host the static release from `puzzle-matic/out` with any static web server. ([GitHub pages](https://pages.github.com) is simple to use, for example.)

## Configuration

`src/app/page.tsx` includes a `GameProvider` which generates the context from the `src` file specified in its parameters.

```tsx
<GameProvider src="/game.json">
    <Machine />
</GameProvider>
```

By default that's `game.json`, which is found in the `public` folder and contains a very simple sample game.

You can provide any url for the `src` parameter - and so you can host your game content alongside the application or elsewhere as you please.
