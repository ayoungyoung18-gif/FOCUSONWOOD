import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "../../supabaseClient"; // 🟢 내 수파베이스 클라이언트 불러오기

// 💡 유저 정보의 id를 타입스크립트 호환을 위해 string(문자열)도 가능하게 확장합니다.
interface User {
  id: number | string;
  name: string;
  email: string;
  avatar_url?: string; // 카카오 프로필 사진용 주소 추가
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // 🟢 핵심: 사용자가 카카오 로그인을 마치고 돌아오는 순간을 실시간으로 감시합니다.
  useEffect(() => {
    // 1. 페이지가 처음 켜질 때 기존 로그인 세션이 남아있는지 확인
    supabase.auth.getUser().then(({ data: { user: sbUser } }) => {
      if (sbUser) {
        setUser({
          id: sbUser.id,
          name: sbUser.user_metadata.full_name || sbUser.user_metadata.name || "카카오 회원",
          email: sbUser.email || "",
          avatar_url: sbUser.user_metadata.avatar_url,
        });
      }
    });

    // 2. 카카오 로그인 성공 등 로그인 상태가 바뀌면 자동으로 실행되는 내비게이터
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const sbUser = session?.user;
      if (sbUser) {
        setUser({
          id: sbUser.id,
          name: sbUser.user_metadata.full_name || sbUser.user_metadata.name || "카카오 회원",
          email: sbUser.email || "",
          avatar_url: sbUser.user_metadata.avatar_url,
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // 기존 이메일 로그인 방식 (우선 가짜 데이터로 유지하되 함수 모양 유지)
  const login = (email: string, password: string) => {
    setUser({
      id: 1,
      name: "홍길동",
      email: email,
    });
  };

  // 🟢 로그아웃도 수파베이스와 함께 처리하도록 수정
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
