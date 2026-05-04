package com.nishant.tracker.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TestController {

    @GetMapping("/test")
    public String test() {
        return "Backend is working 🚀";
    }

    @GetMapping("/problems")
    public List<Map<String, Object>> getProblems() {
        List<Map<String, Object>> data = new ArrayList<>();

        Map<String, Object> arrays = new HashMap<>();
        arrays.put("topic", "Arrays");
        arrays.put("problems", List.of(
                Map.of("title", "Two Sum", "done", false),
                Map.of("title", "Kadane's Algorithm", "done", false)
        ));

        Map<String, Object> strings = new HashMap<>();
        strings.put("topic", "Strings");
        strings.put("problems", List.of(
                Map.of("title", "Palindrome Check", "done", false)
        ));

        data.add(arrays);
        data.add(strings);

        return data;
    }
}