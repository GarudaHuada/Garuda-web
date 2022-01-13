import { useState } from "react";
import ArticleTab from "../components/ArticleTab";
import Layout from "../components/Layout";
import { about } from "../data.json";

const About = () => {
  const [tabIndex, setTabIndex] = useState(about[0].id);

  return (
    <Layout>
      <main className="text-gray-900 min-h-screen">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col gap-7 md:gap-10 lg:flex-row">
            {/* Tabs Navigator */}
            <ul className="shadow-md border font-semibold rounded divide-y shrink-0 md:text-lg lg:self-start">
              {about.map(({ id, title }) => {
                return (
                  <li
                    key={id}
                    className={`py-3 px-5 cursor-pointer ${
                      tabIndex === id ? "bg-gray-200" : ""
                    }`}
                    onClick={() => setTabIndex(id)}
                  >
                    {title}
                  </li>
                );
              })}
            </ul>

            {/* Content */}
            <ArticleTab data={about.find((item) => item.id === tabIndex)} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
