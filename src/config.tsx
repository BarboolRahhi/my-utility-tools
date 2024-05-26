import { RouteObject } from "react-router-dom";
import AddQuoteToText from "./pages/AddQuoteToText";
import JsonFormatter from "./pages/JsonFormatter";
import TextCompare from "./pages/TextCompare";
import TextToArray from "./pages/TextToArray";
import SipCalculator from "./pages/SipCalculator";
import EmiCalculator from "./pages/EmiCalculator";
import JsonToTsConverter from "./pages/JsonToTsConverter";
import HomePage from "./pages/HomePage";
import HRAExemptionCalculator from "./pages/HRAExemptionCalculator";

type SectionItem = {
  name: string;
  link: string;
  component: React.ReactNode;
};

type SideSection = {
  sectionName: string;
  sectionItems: SectionItem[];
  section_svg_icon?: React.ReactNode;
};

type SideMenuConfig = {
  sideSections: SideSection[];
};

export const sideMenuConfig: SideMenuConfig = {
  sideSections: [
    {
      sectionName: "Converter",
      sectionItems: [
        {
          name: "Add Quote to text",
          link: "/add-quote-to-text",
          component: <AddQuoteToText />,
        },
        {
          name: "Text to Array",
          link: "/text-to-array",
          component: <TextToArray />,
        },
        {
          name: "Json to Any Language",
          link: "/json-to-code",
          component: <JsonToTsConverter />,
        },
      ],
      section_svg_icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 .037C5.373.037 0 5.394 0 12c0 6.606 5.373 11.963 12 11.963 6.628 0 12-5.357 12-11.963C24 5.394 18.627.037 12 .037zm-.541 4.8c1.91-.13 3.876.395 5.432 1.934 1.426 1.437 2.51 3.44 2.488 5.317h2.133l-4.444 4.963-4.445-4.963h2.313c-.001-1.724-.427-2.742-1.78-4.076-1.325-1.336-2.667-2.11-4.978-2.303a9.245 9.245 0 013.281-.871zM6.934 6.95l4.445 4.963H9.066c0 1.724.426 2.742 1.778 4.076 1.326 1.336 2.667 2.112 4.978 2.305-2.684 1.268-6.22 1.398-8.71-1.064-1.427-1.437-2.512-3.44-2.489-5.317H2.488L6.934 6.95z" />
        </svg>
      ),
    },
    {
      sectionName: "Compare",
      sectionItems: [
        {
          name: "Text",
          link: "/text-compare",
          component: <TextCompare />,
        },
      ],
      section_svg_icon: (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
          />
        </svg>
      ),
    },
    {
      sectionName: "Formatter",
      sectionItems: [
        {
          name: "Json",
          link: "/json-format",
          component: <JsonFormatter />,
        },
      ],
      section_svg_icon: (
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
          />
        </svg>
      ),
    },
    {
      sectionName: "Calculator",
      sectionItems: [
        {
          name: "Sip/Lumpsum",
          link: "/sip-calculator",
          component: <SipCalculator />,
        },
        {
          name: "Loan EMI",
          link: "/emi-calculator",
          component: <EmiCalculator />,
        },
        {
          name: "HRA Exemption",
          link: "hra-exemption",
          component: <HRAExemptionCalculator />,
        },
      ],
      section_svg_icon: (
        <svg fill="currentColor" viewBox="0 0 16 16" height="22" width="22">
          <path d="M12 1a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1h8zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z" />
          <path d="M4 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-2zm0 4a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm0 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm0 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm3-6a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm0 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm0 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm3-6a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm0 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-4z" />
        </svg>
      ),
    },
  ],
};

const routes: RouteObject[] = sideMenuConfig.sideSections
  .flatMap((section) => section.sectionItems)
  .map((item) => {
    return { path: item.link, element: item.component };
  });

export const sideBarRoutes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  ...routes,
];
