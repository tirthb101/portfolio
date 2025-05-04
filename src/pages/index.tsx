import { useState } from "react";
import { Snippet } from "@heroui/snippet";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { Code } from "@heroui/code";
import { toast } from "sonner";

import { title, subtitle } from "@/components/primitives";
import { PhoneIcon, MailIcon } from "@/components/icons";
import EnhancedSpaceTimeGrid from "@/components/space";
import AboutPage from "@/components/about";

export default function IndexPage() {
  const copied = useState<"email" | "phone" | null>(null)[0];
  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${type} copied to clipboard`);
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center gap-6 py-16 md:py-20 px-4 min-h-[calc(100vh-4rem)] text-center">
        <div className="inline-block max-w-lg">
          <span className={title()}>Tirth&nbsp;</span>
          <span className={title()}>Bhatiya&nbsp;</span>
          <br />
          <span className={title({ color: "violet" })}>CSE&nbsp;</span>
          <span className={title()}>Graduate</span>
          <div className={subtitle({ class: "mt-4" })}>SVIT Vasad</div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-4">
          <Tooltip
            content={copied === "email" ? "Copied!" : "Copy email address"}
          >
            <Button
              color="primary"
              radius="full"
              startContent={<MailIcon />}
              variant="shadow"
              onClick={() =>
                copyToClipboard("bhatiatirth01@gmail.com", "email")
              }
            >
              Email
            </Button>
          </Tooltip>

          <Tooltip
            content={copied === "phone" ? "Copied!" : "Copy phone number"}
          >
            <Button
              radius="full"
              startContent={<PhoneIcon size={20} />}
              variant="bordered"
              onClick={() => copyToClipboard("+919316920209", "phone")}
            >
              Phone
            </Button>
          </Tooltip>
        </div>

        {/* Snippet */}
        <div className="mt-8 w-full max-w-md">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span className="flex flex-wrap gap-1 justify-center text-sm sm:text-base">
              Open to Roles Such As
              <Code color="primary">Software Developer</Code>
              <Code color="primary">Machine Learning</Code>
              <Code color="primary">Backend Development</Code>
            </span>
          </Snippet>
        </div>

        {/* Background */}
        <EnhancedSpaceTimeGrid />
      </section>

      {/* Exploring Section */}
      <section className="text-center px-4 py-16" id="fabric">
        <h2 className="text-3xl md:text-4xl font-bold text-violet-600">
          Exploring the Fabric of Code & Time
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Just like the complexities of space-time, I believe technology is a
          dynamic, evolving field. This animated background reflects my passion
          for discovering patterns, solving problems, and building systems that
          flow seamlessly.
        </p>
        <div id="targetSection" />
      </section>

      {/* About Page */}
      <AboutPage />
    </div>
  );
}
