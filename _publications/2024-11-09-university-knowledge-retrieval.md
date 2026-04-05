---
title: "Leveraging Retrieval‑Augmented Generation for Persian University Knowledge Retrieval"
collection: publications
permalink: /publication/university-knowledge-retrieval
excerpt: "Proposes a two‑stage retrieval‑augmented generation pipeline that combines Persian large language models with tailored prompt engineering to answer university‑related queries.  Introduces the UniversityQuestionBench dataset and evaluates performance using faithfulness, answer relevance and context relevance metrics."
date: 2024-11-09
venue: "15th IKT (accepted – oral)"
paperurl: "https://ieeexplore.ieee.org/abstract/document/10892716"
---

In this work, the authors develop a **two‑stage retrieval‑augmented generation (RAG) pipeline** to answer questions about university resources using locally scraped documents.  Queries are first categorized to identify the most relevant subset of documents; a Persian large language model then generates answers using a carefully engineered prompt.  The paper introduces **UniversityQuestionBench (UQB)**, a benchmark derived from frequently asked questions by students across disciplines, and evaluates the RAG system using faithfulness, answer relevance and context relevance metrics.  Experiments demonstrate that incorporating retrieval steps significantly improves the precision and contextual relevance of generated answers when compared with baseline models.

[PDF]({{page.paperurl}})
