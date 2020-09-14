import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import NotificationProvider from '../src/components/notification/notification.provider';
import useNotify from '../src/components/notification/useNotify';
export default {
  title: 'Notification',
  decorators: [withKnobs, withInfo],
};

const SampleNotifiaction = () => {
    const { notify } = useNotify();
    return(
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }}
  >
    <button
      onClick={() =>
        notify({ type: "success",title: "Created new user", description: "John Johnson" })
      }
    >
      Trigger success
    </button>
    <button
      onClick={() =>
        notify({
          type: "success",
          title: "Created new user",
          description: "John Johnson",
          onMore: () => alert("More!")
        })
      }
    >
      Trigger success (with more)
    </button>
    <button
      onClick={() =>
        notify({
          type: "warning",
          title: "Backup",
          description:
            "It's been over 7 days since you have last made a back-up"
        })
      }
    >
      Trigger warning
    </button>
    <button
      style={{ marginBottom: 16 }}
      onClick={() =>
        notify({
          type: "error",
          title: "Couldn't save",
          description: "Please fill in the required fields"
        })
      }
    >
      Trigger error
    </button>
  </div>
    )
};
export const BasicUsage = () => {
  return (
    <NotificationProvider>
      <SampleNotifiaction />
    </NotificationProvider>
  );
};
