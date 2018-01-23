import Template from '../Template';
import html from './app.html';
import './app.css';
import Header from './Header';
import Home from '../home/Home.js';
import { removeChildren } from '../dom';

const template = new Template(html);

// Hash Navigation
const map = new Map();
// map.set('#techface', Techface);


export default class App {
  
  constructor() {
    window.onhashchange = () => {
      this.setPage();
    };
  }
  
  setPage() {
    const Component = map.get(window.location.hash) || Home;
    const component = new Component();
    removeChildren(this.main);
    this.main.appendChild(component.render());
  }
  
  render() {
    const dom = template.clone();   
      
    dom.querySelector('header').appendChild(new Header().render());
    this.main = dom.querySelector('main');
    this.setPage();
  
    return dom;
  }
}