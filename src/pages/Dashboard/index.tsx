import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoGithub from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoGithub} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/36010251?s=460&u=eef0e52ce9fe815e5237f3e2fcdc2f09e2f231f6&v=4"
            alt="Matheus"
          />
          <div>
            <strong>MatheusKindrazki/repositorio</strong>
            <p>Teste matheus kindrazki 123</p>
          </div>
          <FiChevronRight size={20} color="#cbcbd6" />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/36010251?s=460&u=eef0e52ce9fe815e5237f3e2fcdc2f09e2f231f6&v=4"
            alt="Matheus"
          />
          <div>
            <strong>MatheusKindrazki/repositorio</strong>
            <p>Teste matheus kindrazki 123</p>
          </div>
          <FiChevronRight size={20} color="#cbcbd6" />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/36010251?s=460&u=eef0e52ce9fe815e5237f3e2fcdc2f09e2f231f6&v=4"
            alt="Matheus"
          />
          <div>
            <strong>MatheusKindrazki/repositorio</strong>
            <p>Teste matheus kindrazki 123</p>
          </div>
          <FiChevronRight size={20} color="#cbcbd6" />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
