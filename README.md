# gatsby-plugin-directory-named-index

A gatsby plugin wrapping
[directory-named-webpack-plugin](https://github.com/shaketbaby/directory-named-webpack-plugin)

allowing you to have the following file structure:

`src/components/MyComp/MyComp.js`

and yet import your files like:

```javascript
import MyComp from '../src/components/MyComp'
```

making editor tab management and clarity simple without cluttering
your file tree with unnecessary stuff.

### Install

```bash
npm install --save gatsby-plugin-directory-named-index
```
or
```bash
yarn add gatsby-plugin-directory-named-index
```

## Use

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-directory-named-index`,
      options: {
        // see https://github.com/shaketbaby/directory-named-webpack-plugin
        // for a full list of config options
        honorIndex: true
      },
    },
  ],
}
```

### License

MIT

