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
      this.setState({
        btext: display_data,
      })
    }

    if(display_simple_data){
      this.setState({
        ctext: display_simple_data,
      })
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>

        <h1><p>詳細バージョン</p>{this.state.btext}</h1>
        <h1><p>シンプルバージョン</p>{this.state.ctext}</h1>

        <input type="text" name="atext" value={this.state.atext}
                          onChange={this.handleInputChange} />
                          {/* {(e) => this.setState({text: e.target.value})}/> */}
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
} 

// export default IndexPage


// export default class IndexPage extends React.Component {
//   state = {
//     firstName: "",
//     lastName: "",
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           First name
//           <input type="text" name="firstName" />
//         </label>
//         <label>
//           Last name
//           <input type="text" name="lastName" />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     )
//   }
// }