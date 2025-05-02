import React from 'react'

const FeatureList = () => {
    const features = [
        {
          id: "01",
          title: "Enabling Direct Ownership",
          description: "True ownership of AI agents through NFT technology"
        },
        {
          id: "02",
          title: "Democratizing Access",
          description: "Enterprise-grade infrastructure accessible to all"
        },
        {
          id: "03",
          title: "Fair Value Distribution",
          description: "Direct monetization for AI creators"
        }
      ]
  return (
    <div className="space-y-8">
    {features.map((feature) => (
      <div key={feature.id} className="flex">
        <div className="mr-6">
          <span className="text-[#FF3D81] text-3xl font-bold">{feature.id}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default FeatureList
