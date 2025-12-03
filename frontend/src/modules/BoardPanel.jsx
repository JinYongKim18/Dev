import React, { useState } from 'react';

const initialPosts = [
  { id: 1, title: '첫 공지', content: '게시판에 오신 것을 환영합니다.', author: 'admin' }
];

export const BoardPanel = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addPost = () => {
    setPosts([...posts, { id: posts.length + 1, title, content, author: 'you' }]);
    setTitle('');
    setContent('');
  };

  return (
    <div className="card">
      <h2>게시판</h2>
      <ul className="list">
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> — {post.author}
            <div>{post.content}</div>
          </li>
        ))}
      </ul>
      <div className="form">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
        <div className="button-row">
          <button onClick={addPost}>게시물 추가</button>
          <button className="secondary" onClick={() => setPosts(initialPosts)}>초기화</button>
        </div>
      </div>
      <small>REST 엔드포인트: /api/board-posts</small>
    </div>
  );
};
