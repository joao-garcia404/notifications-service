import { Content } from '@application/entities/content';

import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('Notification content'),
    category: 'social',
    recipientId: 'recipient-1',
    ...override,
  });
}
