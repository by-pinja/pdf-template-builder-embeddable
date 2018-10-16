import React, { Component } from 'react';
import { PdfTemplateBuilder as PdfTemplateBuilderComponent } from '@protacon/pdf-template-builder/dist';

class PdfTemplateBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: {
        onSave: null,
        onPreview: null
      },
      language: 'en',
      template: null
    };
  }

  render() {
    return (
      <PdfTemplateBuilderComponent
        template={this.state.template}
        schema={this.state.config.schema}
        onSave={this.state.config.onSave}
        onPreview={this.state.config.onPreview}
        language={this.state.language}
      />
    );
  }

  configure(config) {
    this.setState({ config: config, language: config.language });
  }

  importTemplate(template) {
    this.setState({ template })
  }
}

export default PdfTemplateBuilder;