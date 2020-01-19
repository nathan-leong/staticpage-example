import React from 'react';
import Layout from '../components/Layout';
import fourOhfour from '../images/404.png'
const Page = () => (
  <Layout>
    <div style={{height: '80vh', 'background-color': 'rgba(210,75,25,0.2)', 'text-align': 'center'}}>
       <img src={fourOhfour} style={{'max-width': '100vw'}}/>
    </div>
  </Layout>
)

export default Page