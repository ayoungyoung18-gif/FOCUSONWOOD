import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { ShoppingBag, FileText, User, ChevronRight, LogOut } from 'lucide-react';

interface Order { id: string; created_at: string; product_name: string; total_price: number; status: string; order_number: string; }
interface CustomOrder { id: string; created_at: string; furniture_type: string; size: string; status: string; }

export function MyPage() {
  const navigate = useNavigate();
  const [activeSubTab, setActiveSubTab] = useState<'orders' | 'customs'>('orders');
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [customs, setCustoms] = useState<CustomOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const secureLoadUserData = async () => {
      try {
        // 1. 현재 로그인한 세션 유저 식별자 보안 획득
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        
        if (authError || !user) {
          alert('인증 세션이 만료되었습니다. 다시 로그인해 주세요.');
          navigate('/');
          return;
        }

        setUserEmail(user.email || '');
        setUserName(user.user_metadata?.full_name || user.email?.split('@')[0] || '고객');

        // 2. 해당 유저의 정보와 일치하는 독점 데이터만 병렬 쿼리로 호출
        const [orderRes, customRes] = await Promise.all([
          supabase.from('orders').select('*').eq('customer_email', user.email).order('created_at', { ascending: false }),
          supabase.from('custom_order').select('*').eq('customer_email', user.email).order('created_at', { ascending: false })
        ]);

        if (orderRes.data) setOrders(orderRes.data);
        if (customRes.data) setCustoms(customRes.data);
      } catch (err) {
        console.error('마이페이지 로딩 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    secureLoadUserData();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', color: '#1A2F28', fontSize: '13px', letterSpacing: '1px' }}>
        프리미엄 대시보드 동기화 중...
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#FBFBFA', minHeight: '100vh', padding: '60px 20px', fontFamily: 'sans-serif', color: '#1A2F28' }}>
      <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
        
        {/* 상단 프로필 요약 카드 벨트 */}
        <div style={{ backgroundColor: '#1A2F28', borderRadius: '12px', padding: '30px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', boxShadow: '0 10px 30px rgba(26,47,40,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#F1EDE8', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#1A2F28' }}>
              <User size={24} />
            </div>
            <div>
              <h2 style={{ margin: 0, color: '#F1EDE8', fontSize: '20px', fontWeight: '500', letterSpacing: '0.5px' }}>{userName} 님, 반가워요.</h2>
              <p style={{ margin: '4px 0 0 0', color: '#F1EDE8/60', fontSize: '12px' }}>{userEmail}</p>
            </div>
          </div>
          <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'transparent', border: '1px solid rgba(241,237,232,0.2)', color: '#F1EDE8/80', padding: '8px 14px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
            <LogOut size={13} /> 로그아웃
          </button>
        </div>

        {/* 메인 레이아웃: 왼쪽 메뉴바 + 오른쪽 데이터 보드 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', alignItems: 'start' }}>
          
          {/* 내비게이션 대시보드 탭 스위처 */}
          <div style={{ backgroundColor: '#fff', border: '1px solid rgba(26,47,40,0.05)', borderRadius: '12px', padding: '16px', spaceY: '6px' }}>
            <p style={{ fontSize: '11px', fontWeight: '600', color: '#A3A3A3', padding: '0 12px 10px 12px', borderBottom: '1px solid #F5F5F5', margin: '0 0 10px 0', letterSpacing: '1px' }}>MY SHOPPING</p>
            
            <button onClick={() => setActiveSubTab('orders')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 12px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', transition: 'all 0.2s', backgroundColor: activeSubTab === 'orders' ? '#F1EDE8/50' : 'transparent', color: '#1A2F28' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ShoppingBag size={16} style={{ color: activeSubTab === 'orders' ? '#D4A373' : '#1A2F28' }} /> 스토어 주문 내역</span>
              <ChevronRight size={14} style={{ color: '#A3A3A3' }} />
            </button>

            <button onClick={() => setActiveSubTab('customs')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 12px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', transition: 'all 0.2s', backgroundColor: activeSubTab === 'customs' ? '#F1EDE8/50' : 'transparent', color: '#1A2F28' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FileText size={16} style={{ color: activeSubTab === 'customs' ? '#D4A373' : '#1A2F28' }} /> 가구 주문제작 문의 현황</span>
              <ChevronRight size={14} style={{ color: '#A3A3A3' }} />
            </button>
          </div>

          {/* 실시간 데이터 콘텐츠 카드 (메인 보드) */}
          <div style={{ gridColumn: 'span 2', backgroundColor: '#fff', border: '1px solid rgba(26,47,40,0.05)', borderRadius: '12px', padding: '35px', boxShadow: '0 4px 20px rgba(0,0,0,0.01)' }}>
            
            {/* 탭 A: 스토어 상품 주문 내역 매칭 리스트 */}
            {activeSubTab === 'orders' && (
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 24px 0', borderBottom: '2px solid #1A2F28', paddingBottom: '10px' }}>스토어 주문 내역</h3>
                {orders.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '60px 0', color: '#A3A3A3', fontSize: '13px' }}>최근 주문하신 내역이 존재하지 않습니다.</div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {orders.map(o => (
                      <div key={o.id} style={{ border: '1px solid #EAEAEA', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ spaceY: '6px' }}>
                          <span style={{ fontSize: '11px', color: '#A3A3A3', display: 'block' }}>주문번호 {o.order_number || o.id.slice(0,8).toUpperCase()}</span>
                          <span style={{ fontSize: '14px', fontWeight: '600', color: '#1A2F28', display: 'block', marginTop: '4px' }}>{o.product_name}</span>
                          <span style={{ fontSize: '13px', color: '#666', display: 'block', marginTop: '2px' }}>{o.total_price.toLocaleString()}원 · {new Date(o.created_at).toLocaleDateString()}</span>
                        </div>
                        <span style={{ padding: '6px 12px', borderRadius: '4px', backgroundColor: '#1A2F28', color: '#F1EDE8', fontSize: '12px', fontWeight: '500' }}>{o.status || '결제완료'}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 탭 B: 원목 맞춤 가구 문의 설계 현황 */}
            {activeSubTab === 'customs' && (
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 24px 0', borderBottom: '2px solid #1A2F28', paddingBottom: '10px' }}>가구 주문제작 문의 현황</h3>
                {customs.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '60px 0', color: '#A3A3A3', fontSize: '13px' }}>상담 신청하신 가구 견적서가 없습니다.</div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {customs.map(c => (
                      <div key={c.id} style={{ border: '1px solid #EAEAEA', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FBFBFA' }}>
                        <div>
                          <span style={{ fontSize: '13px', fontWeight: '600', color: '#1A2F28', display: 'block' }}>[주문제작] {c.furniture_type}</span>
                          <span style={{ fontSize: '12px', color: '#666', display: 'block', marginTop: '4px' }}>희망 규격 스펙: {c.size}</span>
                          <span style={{ fontSize: '11px', color: '#A3A3A3', display: 'block', marginTop: '2px' }}>접수일자: {new Date(c.created_at).toLocaleDateString()}</span>
                        </div>
                        <span style={{ padding: '6px 12px', borderRadius: '4px', backgroundColor: '#D4A373', color: '#fff', fontSize: '12px', fontWeight: '500', letterSpacing: '0.5px' }}>{c.status || '견적확인중'}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}