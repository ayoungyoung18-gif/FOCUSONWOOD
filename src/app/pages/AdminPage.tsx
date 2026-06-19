import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

interface Order { id: string; created_at: string; customer_name: string; product_name: string; total_price: number; status: string; }
interface CustomInquiry { id: string; created_at: string; name: string; phone: string; furniture_type: string; size: string; description: string; }

export function AdminPage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'customs'>('orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [customs, setCustoms] = useState<CustomInquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const secureFetchAllData = async () => {
      try {
        const [orderRes, customRes] = await Promise.all([
          supabase.from('orders').select('*').order('created_at', { ascending: false }),
          supabase.from('custom_order').select('*').order('created_at', { ascending: false })
        ]);

        if (orderRes.data) setOrders(orderRes.data);
        if (customRes.data) setCustoms(customRes.data);
      } catch (err) {
        alert('보안 토큰이 만료되었거나 접근 권한이 상실되었습니다.');
      } finally {
        setLoading(false);
      }
    };
    secureFetchAllData();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase.from('orders').update({ status: newStatus }).eq('id', id);
    if (!error) {
      setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    } else {
      alert('데이터베이스 무결성 오류: 변경 권한이 없습니다.');
    }
  };

  const handleSecureLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/'; // 로그아웃 시 인증 세션을 완벽히 파괴하고 홈으로 탈출
  };

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', color: '#1A2F28', fontSize: '13px' }}>데이터 무결성 검증 및 동기화 중...</div>;

  return (
    <div style={{ padding: '60px 20px', minHeight: '100vh', backgroundColor: '#F8F6F2', color: '#1A2F28', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(26,47,40,0.04)', border: '1px solid rgba(26,47,40,0.05)' }}>
        
        {/* 상단 통합 제어 바 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(26,47,40,0.1)', paddingBottom: '24px', marginBottom: '30px' }}>
          <div>
            <h1 style={{ fontSize: '22px', fontWeight: '600', letterSpacing: '-0.5px', margin: 0 }}>FOCUS ON WOOD ⚙️ 통합 백오피스</h1>
            <p style={{ fontSize: '12px', color: '#A3A3A3', margin: '6px 0 0 0' }}>인증 세션 상태: 최고 관리자 활성화</p>
          </div>
          <button onClick={handleSecureLogout} style={{ padding: '8px 16px', border: '1px solid rgba(26,47,40,0.2)', backgroundColor: 'transparent', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '500', transition: 'all 0.2s' }}>로그아웃</button>
        </div>

        {/* 탭 네비게이션 */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '30px' }}>
          <button onClick={() => setActiveTab('orders')} style={{ padding: '12px 24px', cursor: 'pointer', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', transition: 'all 0.2s', backgroundColor: activeTab === 'orders' ? '#1A2F28' : '#ECE7E1', color: activeTab === 'orders' ? '#F1EDE8' : '#1A2F28' }}>📦 소품 주문 제어 ({orders.length}건)</button>
          <button onClick={() => setActiveTab('customs')} style={{ padding: '12px 24px', cursor: 'pointer', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', transition: 'all 0.2s', backgroundColor: activeTab === 'customs' ? '#1A2F28' : '#ECE7E1', color: activeTab === 'customs' ? '#F1EDE8' : '#1A2F28' }}>🪚 독점 가구 견적 ({customs.length}건)</button>
        </div>

        {/* 주문 데이터 처리 */}
        {activeTab === 'orders' && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: '#1A2F28', color: '#F1EDE8' }}>
                  <th style={{ padding: '14px 16px', fontWeight: '500' }}>주문일자</th>
                  <th style={{ padding: '14px 16px', fontWeight: '500' }}>고객식별명</th>
                  <th style={{ padding: '14px 16px', fontWeight: '500' }}>결제 품목</th>
                  <th style={{ padding: '14px 16px', fontWeight: '500' }}>실결제액</th>
                  <th style={{ padding: '14px 16px', fontWeight: '500' }}>물류 갱신</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? <tr><td colSpan={5} style={{ padding: '40px', textAlign: 'center', color: '#A3A3A3' }}>보안 데이터베이스에 적재된 주문 내역이 존재하지 않습니다.</td></tr> : 
                  orders.map(o => (
                    <tr key={o.id} style={{ borderBottom: '1px solid #EFEFEF' }}>
                      <td style={{ padding: '14px 16px', color: '#666' }}>{new Date(o.created_at).toLocaleDateString()}</td>
                      <td style={{ padding: '14px 16px', fontWeight: '500' }}>{o.customer_name}</td>
                      <td style={{ padding: '14px 16px' }}>{o.product_name}</td>
                      <td style={{ padding: '14px 16px', fontWeight: '600' }}>{o.total_price.toLocaleString()}원</td>
                      <td style={{ padding: '14px 16px' }}>
                        <select value={o.status} onChange={(e) => updateStatus(o.id, e.target.value)} style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid rgba(26,47,40,0.15)', fontSize: '12px', outline: 'none', cursor: 'pointer' }}>
                          <option value="결제완료">결제완료</option>
                          <option value="배송준비중">배송준비중</option>
                          <option value="배송중">배송중</option>
                          <option value="배송완료">배송완료</option>
                          <option value="주문취소">주문취소</option>
                        </select>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        )}

        {/* 견적 데이터 처리 */}
        {activeTab === 'customs' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {customs.length === 0 ? <div style={{ padding: '40px', textAlign: 'center', color: '#A3A3A3' }}>보안 데이터베이스에 적재된 가구 견적 내역이 존재하지 않습니다.</div> : 
              customs.map(c => (
                <div key={c.id} style={{ border: '1px solid rgba(26,47,40,0.06)', padding: '24px', borderRadius: '8px', backgroundColor: '#FBFBFA' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px dashed rgba(26,47,40,0.08)', paddingBottom: '12px' }}>
                    <span style={{ fontWeight: '600', fontSize: '15px' }}>{c.name} 고객 독점 요청서 ({c.phone})</span>
                    <span style={{ fontSize: '12px', color: '#8E8E8E' }}>기록일자: {new Date(c.created_at).toLocaleString()}</span>
                  </div>
                  <div style={{ spaceY: '6px', fontSize: '13px' }}>
                    <p style={{ margin: '4px 0' }}><span style={{ color: '#8E8E8E', marginRight: '8px' }}>가구 분류</span> {c.furniture_type}</p>
                    <p style={{ margin: '4px 0' }}><span style={{ color: '#8E8E8E', marginRight: '8px' }}>희망 규격</span> {c.size}</p>
                    <div style={{ marginTop: '14px', fontSize: '13px', whiteSpace: 'pre-wrap', backgroundColor: '#fff', padding: '16px', borderRadius: '6px', border: '1px solid rgba(26,47,40,0.04)', color: '#333', lineHeight: '1.6' }}>
                      <strong style={{ display: 'block', marginBottom: '6px', color: '#1A2F28', fontSize: '12px' }}>요청 설계 스펙 명세:</strong>
                      {c.description}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        )}

      </div>
    </div>
  );
}