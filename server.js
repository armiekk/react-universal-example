import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// redux settings
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

//app
import todoApp from './public/redux/reducers';
import App from './public/components/App';

//webpack settings
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.dev';

var app = express();

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stat: { colors: true }
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));



const handleRender = (req, res) => {

  const store = createStore(todoApp);

  var html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  var initialState = store.getState();

  res.send(renderFullPage(html, initialState));
}

const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Todo List Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}

app.use(handleRender);


module.exports = app;
