import Filters from "./components/Filters";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import RepoList from "./components/Repo-list";
import Search from "./components/Search";
// import repoData from "./components/repo-data";
import { useState, useEffect } from "react";
import { getUser, getRepos } from "./services/users";
import { useParams } from "react-router-dom";
import Modal from "./components/Modal";

function App() {
  const params = useParams();
  let username = params.user;
  if (!username) {
    username = "leonidasesteban";
  }
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  useEffect(() => {
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log("no hemos encontrado a este crack");
        return;
      }
      setUser(data);
    });
    getRepos(username).then(({ data, isError }) => {
      if (isError) {
        console.log("no hemos encontrado los repos de este crack");
        return;
      }
      setRepos(data);
    });
  }, [username]);
  return (
    <Layout>
      <Modal isActive={modal} setModal={setModal} />
      <Profile {...user} />
      <Filters
        language={language}
        setLanguage={setLanguage}
        setSearch={setSearch}
        repoListCount={repos.length}
      />
      <RepoList language={language} search={search} repoList={repos} />
      <Search setModal={setModal} />
    </Layout>
  );
}

export default App;
