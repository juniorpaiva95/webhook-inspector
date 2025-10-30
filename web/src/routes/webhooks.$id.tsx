import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "../components/section-title";
import { CodeBlock } from "../components/ui/code-block";
import { SectionDataTable } from "../components/section-data-table";
import { WebhookDetailHeader } from "../components/webhook-detail-header";
import { webhookDetailSchema, webhooksSchema } from "../http/schemas/webhooks";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { WebhookDetails } from "../components/webhook-details";

export const Route = createFileRoute("/webhooks/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <WebhookDetails id={id} />
    </Suspense>
  );
}
