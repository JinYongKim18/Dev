import React, { useState } from 'react';

const sampleUsers = [
  { id: 1, username: 'admin', email: 'admin@example.com', roles: ['ADMIN', 'USER'] },
  { id: 2, username: 'editor', email: 'editor@example.com', roles: ['EDITOR'] }
];

export const UserPanel = () => {
  const [users] = useState(sampleUsers);

  return (
    <div className="card">
      <h2>사용자 관리</h2>
      <ul className="list">
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong> ({user.email})
            <div>
              {user.roles.map((role) => (
                <span key={role} className="label">{role}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <small>REST 엔드포인트: /api/users</small>
    </div>
  );
};
