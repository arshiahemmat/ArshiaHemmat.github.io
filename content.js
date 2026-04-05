const profileData = {
    firstName: "Arshia",
    lastName: "Hemmat",
    title: "Incoming PhD · University of Cambridge",
    subtitle: "MSc Advanced CS · Oxford University",
    bio: `Researching <strong>AI for Biology</strong> — building generative and multimodal models that decode life at scale.<br>
          Incoming PhD at <strong>University of Cambridge</strong>. Previously MSc at Oxford (Torr Vision Group) and collaborator at Wellcome Sanger Institute.`,
    image: "images/profile.jpg",
    cvLink: "cv/ArshiaHemmat_CV.pdf",
    scholarLink: "https://scholar.google.com/citations?hl=en&user=lASBGvMAAAAJ",
    githubLink: "https://github.com/arshiahemmat",
    linkedinLink: "https://www.linkedin.com/in/arshiahemmat/",
    email: "amirarshia.hemmat@kellogg.ox.ac.uk",
    scholarId: "lASBGvMAAAAJ",
};

const supportData = {
    mentorshipTitle: "For Students Applying Abroad",
    mentorshipText: "I know that Iranian students face unique barriers when applying to top universities. If you're navigating this path, reach out — I'm happy to share my experience and support you.",
    collabTitle: "Let's Collaborate",
    collabText: "Always open to discussing research in AI for Biology, multimodal systems, or trustworthy AI. If you have a cool idea, let's talk."
};

// --- NEWS / UPDATES (Newest to Oldest) ---
const newsData = [
    {
        date: "Apr 2026",
        title: "PhD Offer — University of Cambridge",
        content: `Accepted a PhD position at the <strong>University of Cambridge</strong> in AI for Biology. Excited for the next chapter.`,
        link: null,
        badge: "milestone"
    },
    {
        date: "Nov 2025",
        title: "New Paper on ArXiv",
        content: `<strong>HoloTea:</strong> "3D-Guided Scalable Flow Matching for Tissue Transcriptomics" is now on ArXiv.`,
        link: "https://arxiv.org/abs/2511.14613",
        badge: "paper"
    },
    {
        date: "Nov 2025",
        title: "NeurIPS Spotlight",
        content: `<strong>Spotlight Accepted:</strong> "From Scenes to Semantics" accepted at NeurIPS VLM4WD workshop.`,
        link: "https://openreview.net/pdf/a545f2756a22a951a8df7cbd598f83e87ca1ce1f.pdf",
        badge: "paper"
    },
    {
        date: "Sep 2025",
        title: "NeurIPS Workshop Acceptance",
        content: `"ScenePhys" accepted at NeurIPS 2025 EWM Workshop.`,
        link: "https://openreview.net/forum?id=t5CKY0oUgZ",
        badge: "paper"
    },
    {
        date: "Mar 2025",
        title: "AACL 2025 Publication",
        content: `"VAGUE-Gate" published in AACL 2025 Main Track — privacy-preserving plug-and-play RAG gate.`,
        link: null,
        badge: "paper"
    },
    {
        date: "Feb 2025",
        title: "CSICC 2025 Acceptance",
        content: `"Adaptive Chunking for VideoRAG" accepted for publication at CSICC 2025.`,
        link: null,
        badge: "paper"
    },
    {
        date: "Jan 2025",
        title: "Frontiers in CS",
        content: `Published a systematic review on LLM Requirement Engineering in Frontiers in Computer Science.`,
        link: null,
        badge: "paper"
    },
    {
        date: "Dec 2024",
        title: "NeurIPS 2024",
        content: `Presented "Hidden in Plain Sight" (IllusionBench) at NeurIPS Datasets & Benchmarks.`,
        link: null,
        badge: "paper"
    }
];

// --- PUBLICATIONS (with topic tags for filtering) ---
const selectedPapers = [
    {
        title: "Hidden in Plain Sight: Evaluating Abstract Shape Recognition in Vision-Language Models",
        venue: "NeurIPS 2024",
        authors: "Arshia Hemmat, Adam Davies, et al.",
        role: "First Author",
        description: "Introduced IllusionBench to audit VLM shape perception using diffusion models. SOTA models score below 40% zero-shot; humans near-perfect.",
        links: [{ text: "ArXiv", url: "https://arxiv.org/abs/2411.06287" }],
        badgeColor: "blue",
        topics: ["vision-language", "benchmarks"]
    },
    {
        title: "3D-Guided Scalable Flow Matching for Generating Volumetric Tissue Spatial Transcriptomics",
        venue: "ArXiv 2025",
        authors: "Mohammad Vali Sanian, Arshia Hemmat, et al.",
        role: "Co-First Author",
        description: "HoloTea: a 3D-aware flow-matching framework for imputing spot-level gene expression from H&E histology slides. Bridging spatial genomics and generative AI.",
        links: [{ text: "Read Paper", url: "https://arxiv.org/abs/2511.14613" }],
        badgeColor: "emerald",
        topics: ["ai-for-biology"]
    },
    {
        title: "VAGUE-Gate: Plug-and-Play Local-Privacy Shield for RAG",
        venue: "AACL 2025",
        authors: "Arshia Hemmat, Matin Moqadas, et al.",
        role: "First Author",
        description: "A lightweight, locally differentially-private gate deployable in front of any RAG system without retraining.",
        links: [],
        badgeColor: "purple",
        topics: ["rag-nlp", "trustworthy-ai"]
    },
    {
        title: "ScenePhys: Controllable Physics Videos for World-Model Evaluation",
        venue: "NeurIPS 2025 EWM",
        authors: "Arshia Hemmat, Emad Aghahosseini, et al.",
        role: "Co-First Author",
        description: "Benchmarking video-capable VLMs on physics understanding using PhET interactive simulations.",
        links: [{ text: "OpenReview", url: "https://openreview.net/forum?id=t5CKY0oUgZ" }],
        badgeColor: "blue",
        topics: ["vision-language", "benchmarks"]
    },
    {
        title: "From Scenes to Semantics: PersianCLEVR for Bilingual 3D Visual Reasoning",
        venue: "NeurIPS VLM4WD · Spotlight",
        authors: "Kianoosh Vadaei, Melika Shirian, Arshia Hemmat, et al.",
        role: "Co-First Author",
        description: "A bilingual 3D visual reasoning benchmark connecting synthetic scenes to compositional textual queries.",
        links: [{ text: "Read PDF", url: "https://openreview.net/pdf/a545f2756a22a951a8df7cbd598f83e87ca1ce1f.pdf" }],
        badgeColor: "emerald",
        topics: ["vision-language", "benchmarks"]
    }
];

const allPublications = [
    ...selectedPapers,
    {
        title: "MEENA (PersianMMMU): Multimodal-Multilingual Educational Exams",
        venue: "Under Review (EACL 2026)",
        authors: "Omid Ghahroodi, Arshia Hemmat, et al.",
        role: "Co-Author",
        description: "First large-scale Persian VLM benchmark with 7.5k Persian + 3k English multimodal questions.",
        links: [{ text: "ArXiv", url: "https://arxiv.org/abs/2508.17290" }],
        badgeColor: "gray",
        topics: ["vision-language", "benchmarks"]
    },
    {
        title: "RAG-Driven Video QA with Adaptive Chunking",
        venue: "CSICC 2025",
        authors: "Arshia Hemmat, Mohammad Hassan Heydari, et al.",
        role: "First Author",
        description: "Bilingual (FA/EN) VideoQA dataset and CLIP-SSIM adaptive chunking for Video-RAG.",
        links: [],
        badgeColor: "gray",
        topics: ["rag-nlp"]
    },
    {
        title: "Leveraging Retrieval-Augmented Generation for University Knowledge Retrieval",
        venue: "IKT 2024 (Oral)",
        authors: "Arshia Hemmat, Kianoosh Vadaei, et al.",
        role: "First Author",
        description: "Two-stage Persian RAG pipeline with in-domain LLMs; released UniversityQuestionBench.",
        links: [{ text: "ArXiv", url: "https://arxiv.org/abs/2411.06237" }],
        badgeColor: "emerald",
        topics: ["rag-nlp"]
    },
    {
        title: "Context Awareness Gate for Retrieval-Augmented Generation",
        venue: "IKT 2024 (Poster)",
        authors: "Mohammad Hassan Heydari, Arshia Hemmat, et al.",
        role: "Co-Author",
        description: "CAG dynamically routes between internal knowledge vs. retrieved context.",
        links: [{ text: "ArXiv", url: "https://arxiv.org/abs/2411.16133" }],
        badgeColor: "emerald",
        topics: ["rag-nlp", "trustworthy-ai"]
    },
    {
        title: "CLIP Exhibits Improved Compositional Generalization Through Representation Disentanglement",
        venue: "ICLR 2024 (Submission)",
        authors: "Reza Abbasi, Amirarshia Hemmat, et al.",
        role: "Co-Author",
        description: "Investigates role of representation disentanglement in CLIP's compositional generalization.",
        links: [],
        badgeColor: "gray",
        topics: ["vision-language"]
    },
    {
        title: "Advanced Mutation Testing with Zero and Few-Shot Evaluation Using GPT-4",
        venue: "IEEE-IoT 2025 (Oral)",
        authors: "Arshia Hemmat, Fatame Aghababaei, et al.",
        role: "First Author",
        description: "ZeMut: a GPT-4-driven pipeline for zero- and few-shot mutation-code generation.",
        links: [],
        badgeColor: "blue",
        topics: ["trustworthy-ai"]
    },
    {
        title: "LLM Requirement Engineering Survey",
        venue: "Frontiers in CS 2025",
        authors: "Arshia Hemmat, et al.",
        role: "First Author",
        description: "Systematic review of LLMs in software requirement engineering.",
        links: [],
        badgeColor: "purple",
        topics: ["rag-nlp"]
    }
];
