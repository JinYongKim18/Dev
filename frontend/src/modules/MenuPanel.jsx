import React from 'react';

const menus = [
  { id: 1, name: '대시보드', path: '/', role: 'USER' },
  { id: 2, name: '관리자', path: '/admin', role: 'ADMIN' }
];

export const MenuPanel = () => (
  <div className="card">
    <h2>메뉴 & 권한</h2>
    <ul className="list">
      {menus.map((menu) => (
        <li key={menu.id}>
          <strong>{menu.name}</strong> ({menu.path})
          <div className="label">필요 권한: {menu.role}</div>
        </li>
      ))}
    </ul>
    <small>REST 엔드포인트: /api/menus</small>
  </div>
);
