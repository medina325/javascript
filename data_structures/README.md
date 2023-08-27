# Data Structures
Através de um app React, vamos mostrar exemplos em que diferentes estruturas de dados tornam
as implementações mais convenientes.

## Steps

- npm init -y
- npm install react react-dom
- npm install @babel/core @babel/preset-react babel-loader
- Create file .babelrc in the root dir, and add the following content:
```babelrc
{
    "presets": ["@babel/preset-react", {"runtime": "automatic"}]
}
```
- Create a webpack.config.js file and configure the bundle pipeline (just take a look at the file)
- npm i -D webpack
- npm install -D webpack-cli

## How Reload
- npm in -D webpack-dev-server
- Adiciona no webpack.config.js:
```js
devServer: {
    contentBase: './dist',
    hot: true,
},
```
- npx webpack serve

## How to Run
- npm install
- npx webpack