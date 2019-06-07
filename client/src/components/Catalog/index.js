import React, { Component } from 'react';
import './index.scss';
import callApi from "../../utils/callApi.js";
import Categories from "./Categories/index";
import Seeds from "./Seeds/index";
import Mix from "./Mix/index";
import logo from '../../imgs/loading.gif'



import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class Catalog extends Component {
  constructor(props) {
    super(props)
    this.getSeeds = this.getSeeds.bind(this)
    this.state = {
      seeds: [],
      showLoader: true,
      seedData: {}
    }
    this.getSeeds = this.getSeeds.bind(this);
  }
  componentDidMount() {
    this.getSeeds();
  }
  getSeeds() {
    const collectionEndpoint = 'seedsprd';
    callApi(collectionEndpoint).then((arrOfSeeds) => {
      this.setState({
        seeds: arrOfSeeds[0].seeds,
        showLoader: false
      })
    })
    this.renderProductView = this.renderProductView.bind(this);
  }
  renderProductView(seed) {
    this.setState({
      seedClicked: true,
      seedData: seed
    })
  }
  render() {
    //{(this.state.products.length<1)?'aaaaaa':<ul>{this.state.products}</ul>}
    // IMAGEN ALTERNATIVA MIX
    //https://http2.mlstatic.com/delicioso-mix-de-frutos-secos-especial-muy-completo-D_NQ_NP_645997-MLA26481477271_122017-F.jpg

    return (
      <Router>
        {this.state.showLoader ? <img className='animationLoad'src={logo} alt="loading..." /> :
          <div>
            <Route exact path="/" component={Categories} />
            <Route path="/seeds" render={() => <Seeds {...this.state} isAuthed={true} />} />
            <Route path="/mix" render={() => <Mix {...this.state} isAuthed={true} />} />
            <Route path="/procesar-pago" render={() => <Mix {...this.state} isAuthed={true} />} />
          </div>
        }

      </Router>
    )
  }
}

export default Catalog;