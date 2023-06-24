export interface UserInfo {
  user_id: string;
  username: string;
  nickname: string;
  email: string;
  birthday: string;
  gender: string;
  ethnicity: string;
  major: string;
  enrol_date: string;
  graduate_date: string;
  position?: string | null;
  company?: string | null;
  weibo_url?: string | null;
  github_url?: string | null;
}

export const testJson = JSON.stringify({
  "user_id": "1234567890",
  "username": "JohnDoe",
  "nickname": "JD",
  "email": "johndoe@example.com",
  "birthday": "1990-01-01",
  "gender": "男",
  "ethnicity": "汉族",
  "major": "Computer Science",
  "enrol_date": "2008-09-01",
  "graduate_date": "2012-06-30",
  "position": "123 Main St",
  "company": "ABC Corp",
  "weibo_url": "https://weibo.com/johndoe",
  "github_url": "https://github.com/johndoe"
}
)