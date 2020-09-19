import React from 'react';
import './Home.scss';
import {
  Container, Form,Input,
  Button, Alert, InputGroupAddon, 
  InputGroupText, InputGroup, Spinner
} from 'reactstrap';
import { faKey, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import RepoList from '../RepoList/RepoList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      repoName: '',
      errorMsg: '',
      black: true,
      repoList: []
    };
  }

  searchGithub = async e => {
    e.preventDefault();
    const { token, repoName } = this.state;
        this.setState({loading: true});
        axios.get(process.env.REACT_APP_API_URL+"?name=" + repoName, {
          headers: {
            'token': token,
            'Access-Control-Allow-Origin': '*',
          }
         })
        .then(res => {
          const data = res.data;
          this.setState({ repoList: data.repositories });
        }).catch( (error) => {
          this.setState({error: true});
          setTimeout(()=> {
            this.setState({error: false});
          }, 3000)
        }).then( () => {
          this.setState({ loading: false });
        });

      
    
  };


  render() {
    const { error, loading, repoList} = this.state;
    
    return (
      <div className="Login">
     <Container className="App">
        <h3>Search Github Repository</h3>
        <Form className="form" onSubmit={this.searchGithub}>
          <Alert color="danger" isOpen={error}  className="w-50 offset-sm-3">
            Error! Is the token valid?
          </Alert>
          <InputGroup  className="w-50 offset-sm-3" > 
            <InputGroupAddon addonType="prepend" >
              <InputGroupText><FontAwesomeIcon icon={faKey} /></InputGroupText>
            </InputGroupAddon>
            <Input
                type="text"
                name="token"
                id="token"
                placeholder="Github Access Token (Required)" required
                onChange={e => this.setState({ token: e.target.value })}
              />
          </InputGroup>
          <br/>
          <InputGroup  className="w-50 offset-sm-3" > 
            <InputGroupAddon addonType="prepend" >
              <InputGroupText><FontAwesomeIcon icon={faFilter} /></InputGroupText>
            </InputGroupAddon>
            <Input
                type="text"
                name="repoName"
                id="repoName"
                placeholder="Repository Name (Optional)"
                onChange={e => this.setState({ repoName: e.target.value })}
              />
          </InputGroup>
          <br/>
          <Button type="btn" color="primary" className={!loading ? "hideIcon": "showIcon"}>
            <Spinner animation="border" variant="light" />
            </Button>
          <Button type="submit" color="primary" className={loading ? "hideIcon": "showIcon"}>
           Search
            </Button>
        </Form>
      </Container>
      <br/>
      <RepoList list={repoList}/>
  </div>
    );
  }
}

export default Home;
