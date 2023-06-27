export interface UserInfo {
  birthday?: string;
  email_show?: any;
  enrollment_date?: string;
  gender?: number;
  graduation_date?: string;
  is_email_show?: boolean;
  is_major_show?: boolean;
  is_name_show?: boolean;
  is_show_birthday?: boolean;
  is_show_gender?: boolean;
  is_show_qq?: boolean;
  is_show_wechat?: boolean;
  major_id?: string;
  modify_time?: string;
  nickname_text?: string;
  portrait_url?: string;
  qq_number?: any;
  user_id?: string;
  wechat_number?: any;
}

export interface Post_ComList {
  comment: Comment[]
  post: Post[]
}

export interface Post {
  create_time: string
  is_examine: number
  is_hidden: boolean
  is_topping: boolean
  post_id: number
  post_title: string
  post_type: number
  total_floor: number
  user_id: string
}

export interface Comment {
  comment_content: string
  comment_id: number
  create_time: string
  examine_state: number
  floor: number
  is_hidden: boolean
  is_topping: boolean
  modify_time: string
  post_id: number
  user_id: string
}