import Filters from "./components/Filters";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import RepoList from "./components/Repo-list";
import Search from "./components/Search";

const repoList = [
  {
    name: "mi primer proyecto con React",
    id: 123,
  },
  {
    name: "Mi segundo Proyecto con React",
    id: 124,
  },
];

function App() {
  return (
    <Layout>
      <Profile />
      <Filters />
      <RepoList repoList={repoList} />
      <Search />
    </Layout>
  );
}

export default App;
