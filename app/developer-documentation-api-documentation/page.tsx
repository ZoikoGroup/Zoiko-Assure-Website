import type { Metadata } from "next";
import {
  Hero,
  ContractDerivedApiReferenceSection,
  OperationReaderAndSchemaContractSection,
  ValidatedExamplesAndSandboxSection,
  CommonApiQuestionsSection,
} from "@/components/developer-documentation-api-documentation";

export const metadata: Metadata = {
  title: "API Documentation | ZoikoAssure Developers & Documentation",
  description:
    "Review verified API contracts, access requirements and operation behavior.",
};

export default function ApiDocumentationPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Hero />
      <ContractDerivedApiReferenceSection />
      <OperationReaderAndSchemaContractSection />
      <ValidatedExamplesAndSandboxSection />
      <CommonApiQuestionsSection />
    </div>
  );
}
