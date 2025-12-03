package com.example.dev.board;

import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/board-posts")
public class BoardPostController {
    private final BoardPostService boardPostService;

    public BoardPostController(BoardPostService boardPostService) {
        this.boardPostService = boardPostService;
    }

    @GetMapping
    public List<BoardPost> findAll() {
        return boardPostService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BoardPost> findById(@PathVariable Long id) {
        return boardPostService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<BoardPost> create(@Valid @RequestBody BoardPost post) {
        return ResponseEntity.ok(boardPostService.save(post));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BoardPost> update(@PathVariable Long id, @Valid @RequestBody BoardPost updated) {
        return boardPostService.findById(id)
                .map(existing -> {
                    updated.setId(existing.getId());
                    return ResponseEntity.ok(boardPostService.save(updated));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        boardPostService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
