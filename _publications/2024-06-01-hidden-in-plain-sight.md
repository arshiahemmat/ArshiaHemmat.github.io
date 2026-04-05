---
title: "Hidden in Plain Sight: Evaluating Abstract Shape Recognition in Vision‑Language Models"
collection: publications
permalink: /publication/hidden-in-plain-sight
excerpt: "Introduces **IllusionBench**, a dataset that hides letters, faces and animals inside everyday scenes to audit whether modern vision‑language models can recognize abstract shapes.  Human subjects achieve near‑perfect accuracy on the tasks, whereas state‑of‑the‑art models score below 40 % zero‑shot, revealing significant robustness gaps."
date: 2024-06-01
venue: "NeurIPS 2024 (Datasets & Benchmarks Track)"
paperurl: "https://arshiahemmat.github.io/illusionbench/"
---

This paper presents **IllusionBench**, a collection of three datasets designed to evaluate whether vision‑language models (VLMs) truly perceive abstract shapes when those shapes are formed by arranging objects within a scene.  By conditioning diffusion models on binary masks to hide letters, faces and animals, the authors generate challenging scenes that require gestalt perception.  Extensive zero‑shot and few‑shot experiments on GPT‑4o, Gemini, Llava and other VLMs reveal that humans find these tasks trivial while even the best models struggle, underscoring the need for better shape recognition and motivating future work on robust multi‑modal models.

[Project Page](/illusionbench/) | [OpenReview]({{page.paperurl}})
