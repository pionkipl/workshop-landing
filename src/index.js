import { Header } from './app/header';
import { Footer } from './app/footer';
import '../src/style.css';
import './styles/scss/main.scss';
import webpackgif from './assets/images/webpack.gif';

let footer = new Footer();
let footerText = footer.getFooterText();
console.log(footerText);
let header = new Header();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);
console.log('works');

document.getElementById('webpack-gif').setAttribute('src', webpackgif);
