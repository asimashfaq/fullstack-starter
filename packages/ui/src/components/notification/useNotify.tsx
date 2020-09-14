import * as React from "react";
import { NotifyContext } from "./notification.provider";

function useNotify() {
  return React.useContext(NotifyContext);
}

export default useNotify;
