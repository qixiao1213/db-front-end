export interface Alumni {
    alumni_id: number;
    first_name: string;
    last_name: string;
    birthday?: Date;
    gender?: string;
    ethnicity?: string;
    id_number?: string;
    major?: string;
    enrol_date?: Date;
    graduate_date?: Date;
    position?: string;
    company?: string;
    weibo_url?: string;
    github_url?: string;
    create_time?: Date;
    update_time?: Date;
}

export const testJson = JSON.stringify({
    "alumni_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "birthday": "1990-05-15T00:00:00Z",
    "gender": "Male",
    "ethnicity": "Chinese",
    "id_number": "1234567890",
    "major": "CS",
    "enrol_date": "2008-09-01T00:00:00Z",
    "graduate_date": "2012-06-30T00:00:00Z",
    "position": "123 Main Street",
    "company": "ABC Inc.",
    "weibo_url": "https://weibo.com/johndoe",
    "github_url": "https://github.com/johndoe",
    "create_time": "2023-06-01T12:34:56Z",
    "update_time": "2023-06-10T08:12:34Z"
})