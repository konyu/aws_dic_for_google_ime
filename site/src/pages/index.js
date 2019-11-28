import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import GitHubButton from 'react-github-btn'

import detail_data from "../static/output/aws_dic_detail"; 
import simple_data from "../static/output/aws_dic_simple"; 

export default class IndexPage extends React.Component {
  state = {
    atext: "",
    btext: [],
    ctext: [],
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
    
    var detail_arr = []
    if(value.length > 0){
      detail_arr = detail_data.filter(
        (e) => {
          if(!e.key.indexOf(value) ){
            return true;
          }
        }
      )
    }

    var simple_arr = []
    if(value.length > 0){
      simple_arr = simple_data.filter(
        (e) => {
          if(!e.key.indexOf(value) ){
            return true;
          }
        }
      )
    }

    if(detail_arr.length > 0) {
      this.setState({btext: detail_arr })
    } else {
      this.setState({btext: []})
    }

    if(simple_arr.length > 0) {
      this.setState({ctext: simple_arr})
    } else {
      this.setState({ctext: []}) 
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="container">
          <GitHubButton href="https://github.com/konyu/aws_dic_for_google_ime" data-icon="octicon-star" data-size="large" aria-label="Star konyu/aws_dic_for_google_ime on GitHub">Star</GitHubButton>
          <GitHubButton href="https://github.com/konyu/aws_dic_for_google_ime/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork konyu/aws_dic_for_google_ime on GitHub">Fork</GitHubButton>
        </div>
        <p> 
          <input type="text" name="atext" value={this.state.atext}
                          onChange={this.handleInputChange} />
        </p>

        <div className="container">
          <div className="item">
          <h2>接頭語付き</h2>
            <div>
              <ul>
                {this.state.btext.map((data) => {
                  return <li key={data.key}>{data.val}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="item">
            <h2>シンプル</h2>
            <div>
              <ul>
                {this.state.ctext.map((data) => {
                  return <li key={data.key}>{data.val}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}