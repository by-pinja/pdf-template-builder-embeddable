import PdfTemplateBuilder from './PdfTemplateBuilder';
import React from 'react';
import ReactDOM from 'react-dom';

class Builder {
  render(to = document.getElementById('root')) {
    ReactDOM.render(
      <PdfTemplateBuilder ref={ref => this.ref = ref} />,
      to
    );
  }

  configure(config) {
    this.ref.configure(config);
  }

  importTemplate(template) {
    this.ref.importTemplate(template);
  }
}

export default Builder;