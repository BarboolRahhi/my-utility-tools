import MainContainer from "../components/MainContainer";

const features = [
  {
    title: "Financial Calculators",
    items: [
      {
        name: "EMI Calculator",
        description:
          "Calculate your Equated Monthly Installment (EMI) for loans.",
      },
      {
        name: "SIP Calculator",
        description: "Plan your Systematic Investment Plan (SIP) with ease.",
      },
      {
        name: "Lump Sum Calculator",
        description: "Calculate the future value of a one-time investment.",
      },
    ],
  },
  {
    title: "Code Converters",
    items: [
      {
        name: "JSON to Java Converter",
        description: "Convert your JSON data into Java classes.",
      },
      {
        name: "JSON to TypeScript Converter",
        description: "Transform your JSON data into TypeScript objects.",
      },
      {
        name: "JSON to Kotlin Converter",
        description: "Generate Kotlin data classes from JSON data.",
      },
    ],
  },
  {
    title: "Text Utilities",
    items: [
      {
        name: "Add Quote to Text",
        description: "Easily add quotes around your text.",
      },
      {
        name: "Text Compare",
        description: "Compare two pieces of text to find differences.",
      },
      {
        name: "JSON Formatter",
        description: "Format and beautify your JSON data.",
      },
    ],
  },
  {
    title: "Comming soon...",
    items: [],
  },
];

const HomePage = () => {
  return (
    <MainContainer className="min-h-screen lg:py-8">
      <div className="container mx-auto lg:px-4">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Welcome to MyUtilityTools.in
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your go-to destination for a wide range of utility tools.
          </p>
        </header>

        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-semibold  mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(({ title, items }) => (
              <div className="card border hover:bg-base-200" key={title}>
                <div className="card-body">
                  <h3 className="card-title text-xl">{title}</h3>
                  <ul className="list-disc list-inside mt-2">
                    {items.map(({ name, description }) => (
                      <li key={name}>
                        <strong>{name}:</strong> {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="card mt-6 py-4 text-center border">
          <p>Made by Rahhi Barbool</p>
          <div className="flex justify-center mt-2">
            <a
              href="https://www.linkedin.com/in/rahhibarbool"
              className="text-blue-400 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0zM7.08 20.45H3.56V9h3.52v11.45zm-1.76-13c-1.14 0-2.08-.93-2.08-2.08s.93-2.08 2.08-2.08c1.14 0 2.08.93 2.08 2.08s-.93 2.08-2.08 2.08zM20.45 20.45h-3.52v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.42V9h3.38v1.56h.05c.47-.89 1.61-1.85 3.32-1.85 3.55 0 4.2 2.34 4.2 5.38v6.35z" />
              </svg>
            </a>
            <a
              href="https://github.com/BarboolRahhi"
              className="text-gray-400 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.17c-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.21.08 1.85 1.25 1.85 1.25 1.08 1.84 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.4 3.01-.41 1.02.01 2.05.14 3.01.41 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.61-2.81 5.63-5.49 5.92.43.38.81 1.12.81 2.26v3.36c0 .32.22.7.82.58A12.504 12.504 0 0024 12.5c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </MainContainer>
  );
};

export default HomePage;
