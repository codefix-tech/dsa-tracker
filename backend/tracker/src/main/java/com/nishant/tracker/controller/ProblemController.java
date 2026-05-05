package com.nishant.tracker.controller;

import com.nishant.tracker.model.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ProblemController {

    private List<Topic> topics = new ArrayList<>();

    public ProblemController() {
        topics.add(new Topic("Arrays", new ArrayList<>(List.of(
                new Problem("Two Sum", false),
                new Problem("Kadane's Algorithm", false)
        ))));

        topics.add(new Topic("Strings", new ArrayList<>(List.of(
                new Problem("Palindrome Check", false)
        ))));
    }

    // ✅ GET API
    @GetMapping("/problems")
    public List<Topic> getProblems() {
        return topics;
    }

    // ✅ PUT API
    @PutMapping("/problems/{topicIndex}/{problemIndex}")
    public List<Topic> toggleProblem(
            @PathVariable int topicIndex,
            @PathVariable int problemIndex
    ) {
        Problem p = topics.get(topicIndex).getProblems().get(problemIndex);
        p.setDone(!p.isDone());
        return topics;
    }
}