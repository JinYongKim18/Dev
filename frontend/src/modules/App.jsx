import React from 'react';
import { LoginPanel } from './LoginPanel';
import { UserPanel } from './UserPanel';
import { MenuPanel } from './MenuPanel';
import { BoardPanel } from './BoardPanel';

export const App = () => (
  <div className="app">
    <h1>Spring Boot + React 관리 콘솔</h1>
    <p>사용자, 메뉴, 권한, 로그인, 게시판 관리를 위한 풀스택 예시 프로젝트입니다.</p>
    <div className="grid">
      <LoginPanel />
      <UserPanel />
      <MenuPanel />
      <BoardPanel />
    </div>
  </div>
);
