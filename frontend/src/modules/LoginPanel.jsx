import React, { useState } from 'react';

export const LoginPanel = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const [result, setResult] = useState('');

  const handleLogin = () => {
    setResult(`샘플 로그인 요청: { username: ${username}, password: ${password} }`);
  };

  return (
    <div className="card">
      <h2>로그인</h2>
      <div className="form">
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="아이디" />
        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" />
        <button onClick={handleLogin}>로그인 테스트</button>
        <small>실제 API는 /api/auth/login 엔드포인트를 호출합니다.</small>
        {result && <div className="label">{result}</div>}
      </div>
    </div>
  );
};
