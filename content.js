const profileData = {
    firstName: "Arshia",
    lastName: "Hemmat",
    title: "Incoming PhD · University of Cambridge",
    subtitle: "MSc Advanced Computer Science · University of Oxford",
    bio: "I work on AI for Biology — building generative and multimodal models that reason about biological data. Previously at the Torr Vision Group (Oxford) and Wellcome Sanger Institute.",
    image: "images/profile.jpg",
    cvLink: "cv/ArshiaHemmat_CV.pdf",
    scholarLink: "https://scholar.google.com/citations?hl=en&user=lASBGvMAAAAJ",
    githubLink: "https://github.com/arshiahemmat",
    linkedinLink: "https://www.linkedin.com/in/arshiahemmat/",
    email: "amirarshia.hemmat@kellogg.ox.ac.uk",
};

const newsData = [
    {
        date: "Apr 2026",
        title: "PhD offer — University of Cambridge",
        content: "Accepted a PhD position at the University of Cambridge to work on AI for Biology.",
        badge: "milestone",
    },
    {
        date: "Mar 2026",
        title: "New paper",
        content: "\"Unmasking the Factual-Conceptual Gap in Persian Language Models\" accepted at the First Workshop on NLP and LLMs for the Iranian Language Family.",
    },
    {
        date: "Feb 2026",
        title: "New preprint",
        content: "\"TDGNet: Hallucination Detection in Diffusion Language Models via Temporal Dynamic Graphs\" is on arXiv.",
        link: "https://arxiv.org/abs/2602.08048"
    },
    {
        date: "Jan 2026",
        title: "EACL 2026",
        content: "\"MEENA (PersianMMMU)\" accepted as a Findings paper at EACL 2026.",
        link: "https://arxiv.org/abs/2508.17290"
    },
    {
        date: "Nov 2025",
        title: "New preprint",
        content: "\"3D-Guided Scalable Flow Matching for Tissue Transcriptomics\" (HoloTea) is on ArXiv.",
        link: "https://arxiv.org/abs/2511.14613"
    },
    {
        date: "Nov 2025",
        title: "NeurIPS spotlight",
        content: "\"From Scenes to Semantics\" accepted as a spotlight at NeurIPS VLM4WD workshop.",
        link: "https://openreview.net/pdf/a545f2756a22a951a8df7cbd598f83e87ca1ce1f.pdf"
    },
    {
        date: "Sep 2025",
        title: "NeurIPS workshop",
        content: "\"ScenePhys\" accepted at the NeurIPS 2025 EWM Workshop.",
        link: "https://openreview.net/forum?id=t5CKY0oUgZ"
    },
    {
        date: "Mar 2025",
        title: "AACL 2025",
        content: "\"VAGUE-Gate\" published in the AACL 2025 main track.",
    },
    {
        date: "Dec 2024",
        title: "NeurIPS 2024",
        content: "Presented \"Hidden in Plain Sight\" (IllusionBench) at NeurIPS Datasets & Benchmarks.",
    },
];

const selectedPapers = [
    {
        title: "Hidden in Plain Sight: Evaluating Abstract Shape Recognition in Vision-Language Models",
        venue: "NeurIPS 2024",
        authors: "Arshia Hemmat, Adam Davies, et al.",
        role: "First Author",
        description: "Introduced IllusionBench to audit VLM shape perception using diffusion-generated images. State-of-the-art models score below 40% zero-shot while humans achieve near-perfect accuracy.",
        links: [{ text: "Paper", url: "https://arxiv.org/abs/2411.06287" }],
    },
    {
        title: "3D-Guided Scalable Flow Matching for Generating Volumetric Tissue Spatial Transcriptomics",
        venue: "arXiv 2025",
        authors: "Mohammad Vali Sanian, Arshia Hemmat, et al.",
        role: "Co-First Author",
        description: "HoloTea: a 3D-aware flow-matching framework for imputing spot-level gene expression from H&E histology slides.",
        links: [{ text: "Paper", url: "https://arxiv.org/abs/2511.14613" }],
    },
    {
        title: "VAGUE-Gate: Plug-and-Play Local-Privacy Shield for RAG",
        venue: "AACL 2025",
        authors: "Arshia Hemmat, Matin Moqadas, et al.",
        role: "First Author",
        description: "A lightweight, locally differentially-private gate deployable in front of any RAG system without retraining.",
        links: [],
    },
    {
        title: "ScenePhys: Controllable Physics Videos for World-Model Evaluation",
        venue: "NeurIPS 2025 EWM",
        authors: "Arshia Hemmat, Emad Aghahosseini, et al.",
        role: "Co-First Author",
        description: "Benchmarking video-capable VLMs on physics understanding using PhET interactive simulations.",
        links: [{ text: "Paper", url: "https://openreview.net/forum?id=t5CKY0oUgZ" }],
    },
    {
        title: "From Scenes to Semantics: PersianCLEVR for Bilingual 3D Visual Reasoning",
        venue: "NeurIPS VLM4WD · Spotlight",
        authors: "Kianoosh Vadaei, Melika Shirian, Arshia Hemmat, et al.",
        role: "Co-First Author",
        description: "A bilingual 3D visual reasoning benchmark connecting synthetic scenes to compositional textual queries.",
        links: [{ text: "Paper", url: "https://openreview.net/pdf/a545f2756a22a951a8df7cbd598f83e87ca1ce1f.pdf" }],
    },
];

const allPublications = [
    ...selectedPapers,
    {
        title: "MEENA (PersianMMMU): Multimodal-Multilingual Educational Exams for N-Level Assessment",
        venue: "Findings of ACL: EACL 2026",
        authors: "Omid Ghahroodi, Arshia Hemmat, ..., Mohammad Hossein Rohban, Ehsaneddin Asgari, Mahdieh Soleymani Baghshah",
        role: "Co-Author",
        description: "First large-scale Persian VLM benchmark with 7.5k Persian + 3k English multimodal questions spanning scientific reasoning and student performance metadata.",
        links: [{ text: "Paper", url: "https://arxiv.org/abs/2508.17290" }],
    },
    {
        title: "Unmasking the Factual-Conceptual Gap in Persian Language Models",
        venue: "NLP4ILF Workshop 2026",
        authors: "Alireza Sakhaeirad, Ali Ma'manpoosh, Arshia Hemmat",
        role: "Co-Author",
        description: "Investigates the gap between factual recall and conceptual understanding in Persian large language models.",
        links: [],
    },
    {
        title: "TDGNet: Hallucination Detection in Diffusion Language Models via Temporal Dynamic Graphs",
        venue: "arXiv 2026",
        authors: "Arshia Hemmat, Philip Torr, Yonglong Chen, Jiawei Yu",
        role: "First Author",
        description: "A graph-based framework for detecting hallucinations in diffusion language models by modeling token-level temporal dynamics.",
        links: [{ text: "Paper", url: "https://arxiv.org/abs/2602.08048" }],
    },
    {
        title: "RAG-Driven Video QA with Adaptive Chunking",
        venue: "CSICC 2025",
        authors: "Arshia Hemmat, Mohammad Hassan Heydari, et al.",
        role: "First Author",
        description: "Bilingual VideoQA dataset and CLIP-SSIM adaptive chunking strategy for Video-RAG.",
        links: [],
    },
    {
        title: "Leveraging Retrieval-Augmented Generation for University Knowledge Retrieval",
        venue: "IKT 2024 · Oral",
        authors: "Arshia Hemmat, Kianoosh Vadaei, et al.",
        role: "First Author",
        description: "Two-stage Persian RAG pipeline with in-domain LLMs; released UniversityQuestionBench.",
        links: [{ text: "Paper", url: "https://arxiv.org/abs/2411.06237" }],
    },
    {
        title: "Context Awareness Gate for Retrieval-Augmented Generation",
        venue: "IKT 2024 · Poster",
        authors: "Mohammad Hassan Heydari, Arshia Hemmat, et al.",
        role: "Co-Author",
        description: "CAG dynamically routes between internal knowledge and retrieved context.",
        links: [{ text: "Paper", url: "https://arxiv.org/abs/2411.16133" }],
    },
    {
        title: "CLIP Exhibits Improved Compositional Generalization Through Representation Disentanglement",
        venue: "ICLR 2024 · Submission",
        authors: "Reza Abbasi, Amirarshia Hemmat, et al.",
        role: "Co-Author",
        description: "Investigates the role of representation disentanglement in CLIP's compositional generalization.",
        links: [],
    },
    {
        title: "Advanced Mutation Testing with Zero and Few-Shot Evaluation Using GPT-4",
        venue: "IEEE-IoT 2025 · Oral",
        authors: "Arshia Hemmat, Fatame Aghababaei, et al.",
        role: "First Author",
        description: "ZeMut: a GPT-4-driven pipeline for zero- and few-shot mutation-code generation.",
        links: [],
    },
    {
        title: "LLM Requirement Engineering Survey",
        venue: "Frontiers in CS 2025",
        authors: "Arshia Hemmat, et al.",
        role: "First Author",
        description: "Systematic review of large language models applied to software requirement engineering.",
        links: [],
    },
];

const supportData = {
    mentorshipTitle: "For students applying abroad",
    mentorshipText: "Iranian students face unique barriers when applying to top universities. If you are navigating this path, feel free to reach out — I am happy to share what I have learned.",
    collabTitle: "Open to collaboration",
    collabText: "I am always open to discussing research in AI for Biology, multimodal systems, or trustworthy AI.",
};
