class BooksyPriceLab extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const shadow = this.shadowRoot;

    shadow.innerHTML = `
      <style>
        :host {
          all: initial;
          display: block;
          font-family: 'Poppins', sans-serif;
        }
        #root {
          min-height: 100vh;
        }
      </style>
      <div id="root"></div>
    `;

    await this.loadScript("https://cdn.tailwindcss.com");
    await this.loadScript("https://unpkg.com/react@18/umd/react.production.min.js");
    await this.loadScript("https://unpkg.com/react-dom@18/umd/react-dom.production.min.js");

    const appScript = document.createElement("script");
    appScript.textContent = `
      const { useState } = React;

      function App() {
        const [count, setCount] = useState(0);

        return React.createElement(
          "div",
          { className: "min-h-screen bg-slate-50 text-slate-800 p-10" },
          React.createElement(
            "h1",
            { className: "text-4xl font-black mb-6" },
            "Booksy Nail Price Lab"
          ),
          React.createElement(
            "p",
            { className: "mb-6 text-teal-600 font-bold" },
            "Shadow DOM isolated embed – production safe."
          ),
          React.createElement(
            "button",
            {
              className: "bg-teal-600 text-white px-6 py-3 rounded-xl font-bold",
              onClick: () => setCount(count + 1)
            },
            "Clicks: " + count
          )
        );
      }

      const root = ReactDOM.createRoot(
        document.getElementById("root")
      );
      root.render(React.createElement(App));
    `;

    shadow.appendChild(appScript);
  }

  loadScript(src) {
    return new Promise(resolve => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      this.shadowRoot.appendChild(s);
    });
  }
}

customElements.define("booksy-price-lab", BooksyPriceLab);
