import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import detail_data from "../static/output/aws_dic_detail"; 
import simple_data from "../static/output/aws_dic_simple"; 

export default class IndexPage extends React.Component {
  state = {
    atext: "",
    btext: "",
    ctext: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    console.log(target)
    console.log(value)
    console.log(name)

    this.setState({
      [name]: value,
    })
    
    var display_data = detail_data[value]
    var display_simple_data = simple_data[value]

    if(display_data){
      this.setState({btext: display_data})
    } else {
      this.setState({btext: ""})
    }
    // console.log(simple_data)
    if(display_simple_data){
      this.setState({ctext: display_simple_data,})
    } else {
      this.setState({ctext: ""}) 
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <p> 
          <input type="text" name="atext" value={this.state.atext}
                          onChange={this.handleInputChange} />
                          {/* {(e) => this.setState({text: e.target.value})}/> */}
        </p>

        <h1><p>詳細バージョン</p>{this.state.btext}</h1>
        <h1><p>シンプルバージョン</p>{this.state.ctext}</h1>        
      </Layout>
    )
  }
}