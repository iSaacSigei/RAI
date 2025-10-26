import React from 'react'
import SEOMetaTags, { pageConfigs } from '../SEOMetaTags';
import { OrganizationSchema } from '../StructuredData';

const Resources = () => {
  return (
    <div>
      <SEOMetaTags {...pageConfigs.resources} />
      <OrganizationSchema />
      <div>Resources</div>
    </div>
  )
}

export default Resources