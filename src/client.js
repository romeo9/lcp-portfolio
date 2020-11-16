import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "2hw3ahzr",
    dataset: "production",
    useCdn: true
})