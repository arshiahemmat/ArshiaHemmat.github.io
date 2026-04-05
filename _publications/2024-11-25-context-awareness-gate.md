---
title: "Context Awareness Gate for Retrieval‑Augmented Generation"
collection: publications
permalink: /publication/context-awareness-gate
excerpt: "Introduces the **Context Awareness Gate (CAG)**, a mechanism that dynamically decides whether a query requires external context retrieval in a retrieval‑augmented generation pipeline.  Includes a **vector‑candidates** method for scalable, LLM‑independent semantic search and demonstrates that skipping unnecessary retrieval improves answer quality."
date: 2024-11-25
venue: "15th IKT (accepted)"
paperurl: "https://arxiv.org/pdf/2411.16133"
---

Retrieval‑augmented generation systems often degrade when irrelevant context is retrieved for an input query.  This paper proposes the **Context Awareness Gate (CAG)**, a neural mechanism that determines whether the question requires external context before generating an answer.  If retrieval is deemed unnecessary, the large language model answers solely from its internal knowledge; otherwise, the pipeline retrieves relevant documents.  The authors also introduce a **vector‑candidates** method – a statistical, LLM‑independent approach for selecting candidate contexts – and show through experiments that CAG improves both faithfulness and relevance of generated answers by avoiding the incorporation of distracting information.

[PDF]({{page.paperurl}})
