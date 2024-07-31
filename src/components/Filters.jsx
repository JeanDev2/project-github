import styled from "styled-components";
import InputText from "./Input-text";
import Selector from "./Selector";
import Separator from "./Separator";

const FiltersStyled = styled.div`
  grid-area: filters;
  .count {
    font: var(--headline2-semi-bold);
    color: var(--white);
  }
  .search {
  }
  .action-list {
    display: flex;
    gap: 1rem;
  }

  .select-list {
    display: flex;
    gap: 0.5rem;
  }
`;

function Filters({ repoListCount = 0, setSearch, setLanguage }) {
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <FiltersStyled>
      <h2 className="count">Repositorios {repoListCount}</h2>
      <div className="action-list">
        <InputText
          className="search"
          placeholder="Busca un repositorio"
          type="search"
          onChange={handleChange}
        />
        <div className="select-list">
          <Selector>
            <option value="all">All</option>
            <option value="all">Forks</option>
          </Selector>
          <Selector
            defaultValue="Language "
            setLanguage={setLanguage}
            setSearch={setSearch}
          >
            <option value="">Language</option>
            <option value="HTML">HTML</option>
            <option value="PHP">PHP</option>
            <option value="CSS">CSS</option>
            <option value="JAVASCRIPT">JAVASCRIPT</option>
            <option value="PYTHON">PYTHON</option>
          </Selector>
          <Selector>
            <option value="ordenar">Ordenar</option>
            <option value="stars">stars</option>
          </Selector>
        </div>
      </div>
      <Separator />
    </FiltersStyled>
  );
}

export default Filters;
