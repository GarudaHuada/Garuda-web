import Activities from "../components/Activities";
import News from "../components/News";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <main className="text-gray-900">
        <div className="bg-[url('/new2.png')] h-[700px] bg-cover bg-top"></div>
        <div className="container mx-auto px-4 py-10">
          <News />
          <Activities />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
