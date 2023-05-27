import handlebars from 'vite-plugin-handlebars';
import data from './data.json' assert {type: 'json'};
import { defineConfig } from 'vite';

export default defineConfig ({
    build: {
        rollupOptions:{
            input:{
                main: 'index.html',
                sub1: 'index-bootstrap.html',
                sub2: 'index-materialize.html'
            }
        },
    },
    base: '/responsive_webpages/',
    plugins: [handlebars({
      context : 
          /*
          previous setup here
          */
          data   // add this
      
    })],
  })