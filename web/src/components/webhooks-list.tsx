import { WebhooksListItem } from './webhooks-list-item'

export function WebhooksList() {
  console.log('WebhooksList rendered')
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-1 p-2">
        <WebhooksListItem />
        <WebhooksListItem />
        <WebhooksListItem />
        <WebhooksListItem />
        <WebhooksListItem />
      </div>
    </div>
  )
}
