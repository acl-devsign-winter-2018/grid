import html from './improving.html';
import Template from '../../Template';

const template = new Template(html);

export default class Beginning {

  render() {
    const dom = template.clone();

    return dom;
  }
}