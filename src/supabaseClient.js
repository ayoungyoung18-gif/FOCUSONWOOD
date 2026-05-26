// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// 지난주 수파베이스 대시보드(Settings -> API)에서 확인한 값을 입력하세요.
const supabaseUrl = "https://engtjbwyfzzwaotsmump.supabase.co";
const supabaseAnonKey = "sb_publishable_0RvtOg1-Yh2eCWKcKthGjw_YGoj83hX"; // 복사해둔 anon public 키 입력

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
