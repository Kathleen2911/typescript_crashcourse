interface Job {
    slug: string,
    company_name: string,
    title: number,
    description: string,
    remote: boolean,
    tags: string[],
    job_types: string[],
    location: string,
    created_at: number
}

export default Job