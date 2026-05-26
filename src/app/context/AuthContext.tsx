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
  loginWithKakao: () => Promise<void>; // 🟢 카카오 로그인 함수 타입 추가
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
          email: sbUser.email || "", // ⚠️ 이메일 권한이 없으므로 빈 문자열("")이 들어옵니다.
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

  // 🟢 버그를 방지하기 위해 가장 안전한 형태로 수정한 카카오 로그인 함수
  const loginWithKakao = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        // ⭐️ 핵심: 주소에 + 기호가 붙는 버그를 예방하기 위해 scopes 항목을 완전히 비워둡니다.
        // 카카오 디벨로퍼스 설정에 맞춰 자동으로 닉네임과 프로필만 요청하게 됩니다.
        redirectTo: window.location.origin, // 로그인 완료 후 돌아올 주소
      },
    });

    if (error) {
      console.error("카카오 로그인 요청 에러:", error.message);
      alert("로그인 도중 오류가 발생했습니다.");
    }
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
        loginWithKakao, // 🟢 제공자 컴포넌트에 함수 등록
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
