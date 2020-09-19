import React from 'react';
import './RepoList.scss';
import {
  Container, Table
} from 'reactstrap';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidUpdate(nextProps) {
    const { list } = this.props;
    if (nextProps.list !== list) {
      if (list) {
        this.setState({list: list});
      }
    }
  }


  render() {
    const { list} = this.state;
    
    return (
      <Container>

      
      <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>

      {list.map((repo, i) => {     
           return (
            <tr>
              <td><a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a></td>
              <td>{repo.language}</td>
            </tr>
            ) 
        })}

        
       
      </tbody>
    </Table>
    </Container>
    );
  }
}

export default RepoList;
