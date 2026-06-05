package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/")
    public Map<String, Object> hello() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("🎯 Server", "Spring Boot Java");
        response.put("📌 Message", "Hello from Spring Boot Server!");
        response.put("🕐 Timestamp", LocalDateTime.now().toString());
        response.put("💻 Container", "springboot-server");
        response.put("⚡ Status", "✅ Running");
        response.put("🔗 Port", 3003);
        response.put("📊 Framework", "Spring Boot");
        return response;
    }

    @GetMapping("/health")
    public Map<String, Object> health() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("💚 Status", "✅ Healthy");
        response.put("📍 Server", "springboot-server");
        response.put("🕐 Check Time", LocalDateTime.now().toString());
        return response;
    }
}