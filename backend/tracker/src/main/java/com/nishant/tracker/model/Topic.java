package com.nishant.tracker.model;

import java.util.List;

public class Topic {
    private String topic;
    private List<Problem> problems;

    public Topic(String topic, List<Problem> problems) {
        this.topic = topic;
        this.problems = problems;
    }

    public String getTopic() { return topic; }
    public List<Problem> getProblems() { return problems; }
}