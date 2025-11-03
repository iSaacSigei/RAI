import React from 'react'
import SEO from '../SEO'

const Resources = () => {
  return (
    <div>
      <SEO
        title="Community Resources | RAI Alliance"
        description="Guides, tools, and community resources to practice responsible AI."
        path="/community"
        keywords="responsible AI resources, AI ethics guides, AI tools, RAI community"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Community', path: '/community' }]}
      />
      Resources
    </div>
  )
}

export default Resources
