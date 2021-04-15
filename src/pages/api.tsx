import React from "react"
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


const Api: React.FunctionComponent = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const path = process.env.NODE_ENV === 'development' ?
    'http://localhost:5000' :
    'https://tactycapi.com'
  return (
    <Layout
      title={`${siteConfig.title} API Documentation`}
      description="API Documentation">
      <main>
        <SwaggerUI url={`${path}/apispec_1.json`}/>
      </main>
    </Layout>
  )
}

export default Api
