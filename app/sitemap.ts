import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://norbilt.com'
  const lastModified = new Date()

  // Define all services
  const services = [
    'handyman',
    'home-repair',
    'drywall-repair',
    'finish-carpentry',
    'door-window',
    'kitchen-bath',
    'lighting',
    'flooring',
  ]

  // Define all locations
  const locations = [
    'vancouver',
    'salmon-creek',
    'hazel-dell',
    'five-corners',
    'camas',
    'brush-prairie',
  ]

  // Core pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/thank-you`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Add all service pages
  services.forEach((service) => {
    routes.push({
      url: `${baseUrl}/services/${service}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // Add all location pages
  locations.forEach((location) => {
    routes.push({
      url: `${baseUrl}/locations/${location}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    })

    // Add location-specific service pages
    services.forEach((service) => {
      // Skip services that don't exist for certain locations based on the files found
      const locationServiceCombinations = {
        'vancouver': ['handyman', 'flooring', 'door-window', 'finish-carpentry', 'drywall-repair', 'kitchen-bath'],
        'salmon-creek': ['door-window', 'drywall-repair', 'finish-carpentry', 'flooring', 'handyman', 'kitchen-bath'],
        'hazel-dell': ['handyman', 'kitchen-bath', 'finish-carpentry', 'door-window', 'drywall-repair', 'flooring'],
        'five-corners': ['kitchen-bath', 'handyman', 'flooring', 'finish-carpentry', 'drywall-repair', 'door-window'],
        'camas': ['kitchen-bath', 'handyman', 'flooring', 'finish-carpentry', 'drywall-repair', 'door-window'],
        'brush-prairie': ['handyman', 'door-window', 'drywall-repair', 'finish-carpentry', 'kitchen-bath', 'flooring'],
      }

      const validServices = locationServiceCombinations[location as keyof typeof locationServiceCombinations]

      if (validServices && validServices.includes(service)) {
        routes.push({
          url: `${baseUrl}/locations/${location}/${service}`,
          lastModified,
          changeFrequency: 'weekly',
          priority: 0.7,
        })
      }
    })
  })

  return routes
}
