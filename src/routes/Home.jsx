import Activities from "../components/Activities";
import News from "../components/News";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <main className="text-gray-900">
        <img src="/hero.jpg" alt="" />
        <div className="container mx-auto px-4 py-10">
          <News />
          <Activities />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
