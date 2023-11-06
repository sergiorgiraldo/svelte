# svelte.kit template + tailwind

`npm create svelte@latest`

### tailwind

`npm install -D tailwindcss@latest postcss@latest`

`npm install -D autoprefixer@latest`

`npx tailwindcss init -p`

> postcss.config.js
```
import tailwind from 'tailwindcss'
import tailwindConfig from './tailwind.config.js'
import autoprefixer from 'autoprefixer'
export default {
    plugins: [tailwind(tailwindConfig),autoprefixer]
}
```
> tailwind.config.js

```
export default {
  plugins: [],
    theme: {
      extend: {},
    },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
}
```

> src/lib/TailwindCSS.svelte

```
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
```

> app.svelte

```
<script>
...
import TailwindCss from '$lib/TailwindCSS.svelte';
...
</script>
...
<TailwindCss/>
...
```