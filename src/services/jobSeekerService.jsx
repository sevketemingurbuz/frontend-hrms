import axios from "axios"

export default class JobSeekerService{
    getJobSeekers(){
        return axios.get("http://localhost:8080/api/jobSeeker/getAll")
    }

    add(jobSeeker){
        return axios.post("http://localhost:8080/api/jobSeeker/add", jobSeeker)
    }

}
