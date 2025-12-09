package com.example.dev.board;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class BoardPostService {
    private final BoardPostRepository boardPostRepository;

    public BoardPostService(BoardPostRepository boardPostRepository) {
        this.boardPostRepository = boardPostRepository;
    }

    public List<BoardPost> findAll() {
        return boardPostRepository.findAll();
    }

    public Optional<BoardPost> findById(Long id) {
        return boardPostRepository.findById(id);
    }

    public BoardPost save(BoardPost post) {
        return boardPostRepository.save(post);
    }

    public void delete(Long id) {
        boardPostRepository.deleteById(id);
    }
}
