import React from 'react'
import SEO from '../SEO'

const WhoWeServe = () => {
  return (
    <div>
      <SEO
        title="Who We Serve | RAI Alliance"
        description="We support students, educators, developers, and organizations to adopt responsible AI practices."
        path="/who-we-serve"
        keywords="responsible AI students, responsible AI for educators, AI adoption, trustworthy AI users"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Who We Serve', path: '/who-we-serve' }]}
      />
      WhoWeServe
    </div>
  )
}

export default WhoWeServe
