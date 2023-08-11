# eddie.id

`eddie.id` is my private website. Here's how to get started with the project setup and build process.

## Prerequisites

Before you start, ensure you have [Node.js](https://nodejs.org/) installed on your system.

## Installation

1. **Clone the repository**:
   ```bash
   gh repo clone mashayev/eddie.id
   cd eddie.id
   ```

2. **Install the required dependencies**:
   ```bash
   npm install
   ```

3. **Install Hugo Framework**:
   Hugo is used for building the website. Follow the [official installation guide](https://gohugo.io/installation/) to install it on your system.

## Development

To compile the code for development, run:

```bash
hugo server -D
```
This command starts a local development server and enables draft mode, allowing you to preview changes as you make them.

## Production Build

To compile and minify the code for production, run:

```bash
hugo server
```
This command builds the site for production, optimizing for performance.

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.
