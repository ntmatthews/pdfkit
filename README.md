# pdfkit

PDF kit is a free online PDF reader and editor.

## Development

Install dependencies:

```
npm install
```

Start the server:

```
npm start
```

Run tests:

```
npm test
```
Copy `.env.example` to `.env` to configure the port or other environment variables:

```
cp .env.example .env
```

The application serves a simple PDF reader at `http://localhost:3000` (or the port you configure) where users can upload a PDF file and view the first page directly in the browser.
