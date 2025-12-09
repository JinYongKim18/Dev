package com.example.dev.security;

import com.example.dev.user.User;
import com.example.dev.user.UserRepository;
import jakarta.validation.constraints.NotBlank;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class LoginController {
    private final UserRepository userRepository;

    public LoginController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public record LoginRequest(@NotBlank String username, @NotBlank String password) {}

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody LoginRequest request) {
        return userRepository.findByUsername(request.username())
                .filter(user -> user.getPassword().equals(request.password()))
                .map(this::buildResponse)
                .orElse(ResponseEntity.status(401).body(Map.of("message", "Invalid credentials")));
    }

    private ResponseEntity<Map<String, Object>> buildResponse(User user) {
        return ResponseEntity.ok(Map.of(
                "username", user.getUsername(),
                "roles", user.getRoles(),
                "message", "Login succeeded"
        ));
    }
}
