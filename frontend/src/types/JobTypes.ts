interface Job {
  id?: string | undefined;
  title: string;
  description: string;
  location: string;
  company: string;
  salary: string;
  job_category: string;
  job_experience: string;
  job_type: string;
  job_vacancy: string;
  job_deadline: string;
}

export default Job;
