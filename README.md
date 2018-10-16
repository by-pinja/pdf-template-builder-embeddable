# What is this

This is the embeddable version of the [Pdf Template Builder](https://github.com/protacon/pdf-template-builder)

# Usage

Add the required js in your app.

```html
<script type="text/javascript" src="path/to/pdf-template-builder.min.js"></script> 
```

Add target element to the DOM.

```html
<div id="target"></div>
```

Initialize and configure builder.

```javascript

// 1. Create instance
const builder = new PdfTemplateBuilder();

// 2. Render to the target DOM element
builder.render(document.getElementById('target'));

// 3. Configure
builder.configure({
  language: 'en',
  schema: [],
  onSave: () => {},
  onPreview: () => {}
});

// 4. Optional. Import your already existing template?
builder.importTemplate({...});
```
