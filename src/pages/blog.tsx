import { CalendarDays } from "lucide-react";

import { title } from "@/components/primitives";

export default function DocsPage() {
  const blogs = [
    {
      title: "What is Quantization in Machine Learning?",
      excerpt:
        "Learn how model quantization reduces model size and increases inference speed with minimal accuracy loss.",
      date: "April 20, 2025",
    },
    {
      title: "Understanding Knowledge Distillation",
      excerpt:
        "A deep dive into how smaller student models learn from large teacher models while preserving performance.",
      date: "April 15, 2025",
    },
    {
      title: "Pruning Neural Networks: Concepts and Trade-offs",
      excerpt:
        "Explore how pruning eliminates unnecessary weights to make models lightweight and efficient.",
      date: "April 10, 2025",
    },
    {
      title: "Transfer Learning Simplified",
      excerpt:
        "How pre-trained models help accelerate training and improve performance on limited data.",
      date: "April 5, 2025",
    },
    {
      title: "ONNX: One Format to Serve Them All",
      excerpt:
        "Understand how ONNX enables model interoperability across different frameworks and platforms.",
      date: "March 28, 2025",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-14 px-6">
      <div className="text-center max-w-2xl mb-12">
        <h1 className={title()}>Blog</h1>
        <p className="text-base text-muted-foreground mt-2 text-justify">
          Sample blog posts covering core concepts in Machine Learning, model
          compression, and deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative border rounded-2xl p-6 shadow-md bg-background/60 backdrop-blur-md hover:shadow-lg transition-all duration-300 group"
          >
            <h2 className="text-xl font-semibold text-primary group-hover:underline text-justify">
              {blog.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed text-justify">
              {blog.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays size={16} /> {blog.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
