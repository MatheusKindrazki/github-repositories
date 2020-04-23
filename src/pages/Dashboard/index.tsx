import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoGithub from '../../assets/github-logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [error, setError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if(storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {

    event.preventDefault();

    if(!newRepo) {
      return setError('Digite o autor/nome do repositório!');
    }

    try {

      const response = await api.get(`/repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepo('');
    } catch (error) {
      setError('Erro na busca por este repositório!') ;
    }
  }

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  },[repositories]);

  return (
    <>
      <img src={logoGithub} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form onSubmit={handleAddRepository} hasError={!!error} >
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {error && <Error>{error}</Error> }

      <Repositories>
        {repositories?.map(repository =>(
        <a href="teste" key={repository.full_name}>
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
          <FiChevronRight size={20} color="#cbcbd6" />
        </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
